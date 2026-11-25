// Cuenta ovejas — lógica de la app
(() => {
  'use strict';

  // Elementos de la página
  const screenStart = document.getElementById('screen-start');
  const screenCount = document.getElementById('screen-count');
  const btnStart = document.getElementById('btn-start');
  const btnCount = document.getElementById('btn-count');
  const btnReset = document.getElementById('btn-reset');
  const btnStop = document.getElementById('btn-stop');
  const countEl = document.getElementById('count');
  const labelEl = document.getElementById('count-label');
  const messageEl = document.getElementById('message');
  const recordEl = document.getElementById('record');
  const flock = document.getElementById('flock');

  const MAX_RUNNERS = 6; // ovejas animadas a la vez en pantalla
  let count = 0;
  let counting = false;

  // ---------- Récord guardado en el navegador ----------
  const readRecord = () => {
    try { return parseInt(localStorage.getItem('ovejas-record') || '0', 10) || 0; } catch (_) { return 0; }
  };
  const saveRecord = (n) => {
    try { localStorage.setItem('ovejas-record', String(n)); } catch (_) { /* sin almacenamiento */ }
  };
  const showRecord = () => {
    const r = readRecord();
    recordEl.hidden = r === 0;
    recordEl.innerHTML = `Tu récord: <b>${r}</b> ${r === 1 ? 'oveja' : 'ovejas'}`;
  };

  // ---------- Mensajes según la cantidad ----------
  const messageFor = (n) => {
    if (n === 1) return 'Primera oveja. ¡Buen comienzo!';
    if (n === 10) return 'Diez ovejas. ¿Ya bostezas?';
    if (n === 25) return 'Veinticinco… los ojos pesan.';
    if (n === 50) return 'Cincuenta. Esto ya es un rebaño.';
    if (n === 100) return '¡Cien ovejas! Felices sueños.';
    if (n % 10 === 0) return `${n} ovejas y contando…`;
    return null;
  };

  // ---------- Oveja que salta la cerca ----------
  const sendSheep = () => {
    if (flock.children.length >= MAX_RUNNERS) flock.firstElementChild.remove();
    const runner = document.createElement('div');
    runner.className = 'runner';
    runner.innerHTML = '<svg viewBox="0 0 120 90" aria-hidden="true"><use href="#sheep"/></svg>';
    flock.appendChild(runner);
    runner.addEventListener('animationend', (e) => {
      if (e.target === runner) runner.remove();
    });
  };

  // ---------- Contar ----------
  const render = () => {
    countEl.textContent = count;
    labelEl.textContent = count === 1 ? 'oveja' : 'ovejas';
    countEl.classList.remove('bump');
    void countEl.offsetWidth; // reinicia la animación
    countEl.classList.add('bump');
  };

  const countSheep = () => {
    if (!counting) return;
    count += 1;
    render();
    sendSheep();
    const msg = messageFor(count);
    if (msg) messageEl.textContent = msg;
    if (count > readRecord()) saveRecord(count);
  };

  // ---------- Pantallas ----------
  const start = () => {
    count = 0;
    counting = true;
    countEl.textContent = '0';
    labelEl.textContent = 'ovejas';
    messageEl.textContent = 'Toca el botón o la pantalla para contar.';
    screenStart.hidden = true;
    screenCount.hidden = false;
    btnCount.focus();
  };

  const reset = () => {
    count = 0;
    countEl.textContent = '0';
    labelEl.textContent = 'ovejas';
    messageEl.textContent = 'Volvemos a empezar.';
    flock.innerHTML = '';
    btnCount.focus();
  };

  const stop = () => {
    counting = false;
    flock.innerHTML = '';
    screenCount.hidden = true;
    screenStart.hidden = false;
    btnStart.textContent = 'Contar de nuevo';
    showRecord();
    btnStart.focus();
  };

  // ---------- Eventos ----------
  btnStart.addEventListener('click', start);
  btnCount.addEventListener('click', countSheep);
  btnReset.addEventListener('click', reset);
  btnStop.addEventListener('click', stop);

  // Tocar cualquier parte libre de la pantalla también cuenta
  document.addEventListener('pointerdown', (e) => {
    if (!counting || e.target.closest('button')) return;
    countSheep();
  });

  // Barra espaciadora o Enter cuentan. Si el foco está en un botón,
  // el propio botón responde (así no se cuenta doble).
  document.addEventListener('keydown', (e) => {
    if (!counting || e.repeat) return;
    if (e.target.closest && e.target.closest('button')) return;
    if (e.code === 'Space' || e.key === 'Enter') {
      e.preventDefault();
      countSheep();
    }
  });

  showRecord();
})();
