# 005_interactions.md — HOME · Interacciones

Deriva de 001_home.md v1.0. Valores marcados **(d)** no están en 001. Límite duro: toda animación **≤ 200 ms**. Nada decorativo.

## Elementos interactivos

Exactamente tres. Ningún otro elemento responde a puntero, toque o teclado.

- **Punto de Atención** → DONELLA
- **Cambio Principal** → CRÓNICA
- **Acceso al Modelo Vivo** → Modelo Vivo

No interactivos, sin ningún estado: **Estado Global** y **Sistemas** (las seis barras). Cursor por defecto sobre ellos.

## Hover

Solo en los tres elementos interactivos. Toda el área es el objetivo.

- Un único cambio de estado sutil (**(d)**: leve variación de fondo o desplazamiento de 2 px de la flecha de acción). Nada más.
- Cursor: pointer.
- Duración: **120 ms (d)**, ease-out. Sin rebote, sin escala, sin sombra decorativa.

## Click / activo

- Estado presionado breve y contenido: **80 ms (d)**, ease-out.
- Al soltar: navegación inmediata al destino. Sin transición de salida decorativa.

## Focus

- Indicador de foco visible y de alto contraste en los tres elementos interactivos (accesibilidad de teclado). No decorativo.
- Orden de foco = orden de lectura: Punto de Atención → Cambio Principal → Acceso.
- Estado Global y Sistemas no son enfocables (no son interactivos).

## Animaciones

Permitidas solo en tres ocasiones. Todas **≤ 200 ms**, ease-out, y todas respetan `prefers-reduced-motion` (se desactivan).

- **Carga:** el contenido asienta una sola vez al sustituir los placeholders. **≤ 200 ms (d)**. Sin escalonado teatral.
- **Cambio de estado (datos):** al actualizarse el IFO o los valores, transición breve (fundido/asentamiento de número). **≤ 200 ms (d)**.
- **Reordenación de Sistemas:** cuando el orden peor→mejor cambia por nuevos datos, transición de reordenación breve. **≤ 200 ms (d)**.
- **Hover:** según la sección Hover.

## Prohibido

- Animación continua o permanente.
- Bucles, parpadeos, parallax, movimiento de fondo.
- Barras de Sistemas con animación permanente, efecto 3D o gradiente informativo.
- Cualquier transición que supere 200 ms o que no cumpla una de las cuatro ocasiones anteriores.
