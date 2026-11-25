# Cuenta ovejas

App sencilla en HTML, CSS y JavaScript: cada clic cuenta una oveja y la ves saltar la cerca.

## Qué hace
- Pantalla de inicio con botón **Empezar a contar**.
- Contador grande en pantalla; cada clic (botón, toque en la pantalla o barra espaciadora) suma una oveja.
- Una oveja animada salta la cerca por cada conteo.
- Mensajes al llegar a 10, 25, 50 y 100.
- Botones **Reiniciar** y **Terminar**; el récord se guarda en el navegador (`localStorage`).
- Accesible: navegable con teclado, contador anunciado a lectores de pantalla y respeta "reducir movimiento".

## Cómo ejecutarla
No necesita instalación: abre `index.html` en el navegador.

## Publicarla gratis con GitHub Pages
1. Sube estos archivos a un repositorio público.
2. En GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / root → Save**.
3. En un minuto estará en `https://TU_USUARIO.github.io/NOMBRE_DEL_REPO/`.

## Estructura
```
index.html   estructura y dibujo SVG de la oveja
styles.css   escena nocturna, botones y animaciones
app.js       lógica: contar, mensajes, récord
```
