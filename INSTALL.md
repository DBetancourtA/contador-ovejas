# Instalación — Cuenta ovejas

Aplicación web estática hecha con HTML, CSS y JavaScript. No usa servidor, base de datos ni dependencias externas.

## Requisitos

- Un navegador actualizado (Chrome, Firefox, Edge o Safari).
- Opcional: [Git](https://git-scm.com/) para clonar el repositorio.
- Opcional: Python 3 o la extensión *Live Server* de VS Code para servirla en local.

## 1. Obtener el código

**Con Git:**

```bash
git clone https://github.com/TU_USUARIO/contador-ovejas.git
cd contador-ovejas
```

**Sin Git:** en GitHub → botón verde **Code** → **Download ZIP** → descomprime el archivo.

## 2. Ejecutar en local

### Opción A: abrir el archivo
Haz doble clic en `index.html`. Se abre en tu navegador y funciona tal cual.

### Opción B: con un servidor local (recomendado)
Así se comporta igual que publicada en internet.

```bash
# Python 3
python3 -m http.server 8000
```

Abre `http://localhost:8000` en el navegador.

**En VS Code:** instala la extensión *Live Server* → clic derecho sobre `index.html` → **Open with Live Server**.

## 3. Publicar gratis en GitHub Pages

1. Sube el proyecto a un repositorio **público** en GitHub.
2. Ve a **Settings → Pages**.
3. En **Source** elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` → **Save**.
4. En uno o dos minutos estará disponible en:
   `https://TU_USUARIO.github.io/contador-ovejas/`

Cada `git push` a `main` actualiza la página automáticamente.

## 4. Publicar en un hosting tradicional (opcional)

Sube por FTP los archivos `index.html`, `styles.css` y `app.js` a la carpeta pública del hosting (`htdocs` o `public_html`).

## Estructura del proyecto

```
contador-ovejas/
├── index.html    Estructura de la página y dibujo SVG de la oveja
├── styles.css    Escena nocturna, botones y animaciones
├── app.js        Lógica: conteo, mensajes y récord
├── README.md     Descripción del proyecto
└── INSTALL.md    Esta guía
```

## Configuración

No requiere configuración. El récord de ovejas se guarda en el navegador (`localStorage`); para borrarlo, limpia los datos del sitio en tu navegador.

## Problemas frecuentes

| Problema | Solución |
|---|---|
| La tipografía se ve distinta | Sin internet no carga la fuente *Nunito*; la app usa la del sistema y sigue funcionando. |
| El récord no se guarda | El navegador está en modo privado o bloquea el almacenamiento local. |
| GitHub Pages muestra error 404 | Espera 2 minutos y revisa que `index.html` esté en la raíz del repositorio. |
| No se ven las ovejas saltando | Tu sistema tiene activado "reducir movimiento"; la app desactiva las animaciones a propósito. |