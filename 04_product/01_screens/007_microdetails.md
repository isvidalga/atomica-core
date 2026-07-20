# 007_microdetails.md — HOME · Microdetalles

Deriva de 001_home.md v1.0 y 002–006. Solo refinamiento. Sin cambios de arquitectura, layout, componentes ni navegación.

---

## Estados vacíos

### Principio
Un estado vacío nunca es un error. Es una condición del sistema con información útil.

### Implementación
- **IFO sin datos**: muestra "—" (em-dash) tabular, color terciario. Nunca "0", nunca "N/A", nunca spinner eterno.
- **Punto de Atención vacío**: fila presente, texto "Sin alertas activas", color terciario. El área sigue siendo pulsable (navega a historial vacío).
- **Cambio Principal vacío**: "Sin cambios significativos", color terciario. Navegable.
- **Sistemas sin datos**: las seis filas permanecen, barras al 0 %, valores "—". El grupo mantiene su presencia visual; la ausencia de datos es legible.
- **Acceso al Modelo Vivo**: nunca vacío. Siempre navegable.

### Transición de vacío a datos
Cuando los datos llegan, el contenido asienta en 200 ms (ease-out). Sin skeleton si la carga es < 300 ms. Con skeleton si > 300 ms (ver siguiente sección).

---

## Skeletons

### Cuándo
Solo durante la carga inicial de datos que supere 300 ms. Nunca en actualizaciones posteriores (ahí se usa transición de número).

### Diseño
- Fondo del skeleton: `rgba(240,240,245,0.04)` — apenas visible, no competir con el fondo primario.
- Forma: rectángulos con radio 0 (barras) o 4 px (bloques de texto). Dimensiones exactas al contenido que reemplazarán.
- Animación: pulso de opacidad 0.04 → 0.08 → 0.04, duración 1.5 s, ease-in-out. Solo si `prefers-reduced-motion` no está activo.
- **Prohibido**: shimmer diagonal, gradiente animado, o movimiento de posición.

### Skeleton por bloque
- **Estado Global**: skeleton del IFO (120 px de altura, ancho proporcional) + skeleton del Nivel (28 px).
- **Punto / Cambio**: skeleton de una línea de texto, ancho 70 %.
- **Sistemas**: skeleton de las seis barras, ancho variable según proporción esperada.
- **Acceso**: sin skeleton — el botón de acción es inmediato.

---

## Loaders

### Principio
No hay loaders visuales dedicados en la Home. La interfaz nunca muestra un spinner circular o una barra de progreso independiente.

### Estrategia
- Carga inicial: skeletons (arriba).
- Actualización de datos: transición de número (200 ms, ease-out). El valor anterior se desvanece, el nuevo asienta. Sin indicador de "cargando".
- Navegación: transición inmediata. La página destino gestiona su propio estado.

### Excepción
Si la carga de un dato crítico (IFO) excede 3 s, mostrar el em-dash "—" como fallback. Nunca un spinner.

---

## Focus

### Indicador visual
- Anillo de 2 px de grosor, color acento activo (`#E8E8F0`), offset 2 px del borde del elemento.
- Sin desenfoque (box-shadow sólido, no difuso).
- Aplica a los tres elementos interactivos únicamente.

### Comportamiento
- Focus visible siempre que el elemento reciba foco por teclado (Tab).
- Focus no visible en interacción táctil o por puntero (mouse), salvo que el usuario navegue posteriormente por teclado.
- Transición de aparición: 80 ms, ease-out.
- Transición de desaparición: 120 ms, ease-out (más lenta para evitar parpadeo al moverse entre elementos).

### Estados Global y Sistemas
No enfocables. Sin indicador. Cursor por defecto.

---

## Selección

### Texto
- Color de selección: `rgba(196,168,130,0.25)` — acento cálido al 25 % de opacidad. Visible pero no agresivo.
- Color de texto seleccionado: heredado (sin inversión forzada).

### Elementos interactivos
- No hay estado de "selección" persistente en la Home. Los elementos son enlaces de navegación, no toggles.

---

## Scroll

### Comportamiento
- Scroll nativo del navegador. Sin librerías de scroll suavizado.
- `scroll-behavior: auto` por defecto. `smooth` solo si el usuario lo solicita explícitamente (preferencia del sistema).

### Indicadores
- Sin scrollbar personalizado. El scrollbar nativo del sistema operativo es suficiente.
- Sin indicador de posición de scroll (dots, progreso lineal, etc.).

### Overscroll
- Fondo primario se extiende en overscroll. Nunca blanco o color diferente al fondo.

---

## Barras (Sistemas)

### Diseño
- Altura: 4 px. Radio: 0 (afilado).
- Fondo de la pista: `rgba(240,240,245,0.06)` — apenas visible.
- Relleno de la barra: color del acento semántico del sistema (cálido, frío o neutro), opacidad 100 %.
- Transición de relleno: 200 ms, ease-out, al actualizarse el valor.

### Reordenación
Cuando el orden peor→mejor cambia por nuevos datos:
- Las filas se reordenan con transición de 200 ms.
- La barra que se mueve mantiene su relleno visible durante el movimiento.
- Sin animación de "shuffle" o rebote.

### Estados especiales
- **Barra al 0 %**: la pista permanece visible. No desaparece.
- **Barra al 100 %**: sin cambio visual especial (no brilla, no cambia de color).
- **Barra sin datos**: pista visible, sin relleno, valor "—".

### Interacción
- Las barras no son interactivas. Sin hover, sin click, sin tooltip.
- El cursor sobre una barra es el cursor por defecto.
