# Mapa del proyecto — Cuenta ovejas

## Archivos principales
| Archivo | Para qué sirve |
|---|---|
| `index.html` | La estructura: las dos pantallas (inicio y contador), los botones y el dibujo de la oveja en SVG. |
| `styles.css` | La apariencia: el cielo de noche, las colinas, la cerca, los botones y las animaciones de salto. |
| `app.js` | La lógica: cuenta, muestra mensajes, anima las ovejas y guarda el récord. |
| `README.md` / `INSTALL.md` | Qué es el proyecto y cómo ejecutarlo. |

## Dónde empieza
El navegador abre `index.html`, que carga `styles.css` y, al final, `app.js`.
`app.js` busca los botones, les asigna qué hacer al hacer clic y muestra el récord guardado.

## Datos
No hay base de datos. El conteo vive en la variable `count` mientras la página está abierta.
El récord se guarda en el navegador con `localStorage` (clave `ovejas-record`).

## Recorrido: "Contar una oveja"
1. **`index.html`**: el usuario hace clic en el botón `#btn-count`.
2. **`app.js`**: el listener `btnCount.addEventListener('click', countSheep)` llama a `countSheep()`.
3. **`countSheep()`**: si `counting` es verdadero, suma 1 a `count`.
4. **`render()`**: escribe el número en `#count`, cambia "oveja/ovejas" y reinicia la clase `bump`, que agranda el número.
5. **`sendSheep()`**: crea un `<div class="runner">` con la oveja y lo agrega a `#flock`.
6. **`styles.css`**: las animaciones `run` (cruzar) y `hop` (saltar la cerca) mueven la oveja. Al terminar, `app.js` la elimina.
7. **`messageFor(count)`**: si el número es 10, 25, 50 o 100, muestra un mensaje.
8. **`saveRecord()`**: si `count` supera el récord, lo guarda en `localStorage`.

## Preguntas para comprobar que lo entendí
- ¿Qué pasa si hago clic en "Contar oveja" antes de pulsar "Empezar"?
- ¿Por qué no aparecen más de 6 ovejas a la vez en pantalla?
- ¿Dónde está guardado el récord y cómo lo borro?
