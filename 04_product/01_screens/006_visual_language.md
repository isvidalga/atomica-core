# 006_visual_language.md — HOME · Lenguaje Visual

Deriva de 001_home.md v1.0 y 002–005. Solo refinamiento. Sin cambios de arquitectura, layout, componentes ni navegación.

---

## Colores

### Filosofía
Paletas oscuras de instrumento de precisión. El color comunica estado, nunca decoración. Cada tono tiene una carga semántica exacta.

### Escala base
- **Fondo primario**: `#0A0A0F` — negro azulado profundo. No puro negro; el azul sutil evita el agujero visual del #000 y da profundidad cálida.
- **Superficie elevada**: `#12121A` — para bloques que necesitan separación del fondo sin romper la continuidad. Usado con extrema moderación.
- **Texto primario**: `#F0F0F5` — blanco con 2 % de azul. Elimina el deslumbramiento del blanco puro en pantallas OLED.
- **Texto secundario**: `#8A8A99` — gris frío con lectura garantizada en WCAG AAA sobre fondo primario.
- **Texto terciario**: `#5A5A6A` — para metadatos, timestamps, elementos inactivos. Nunca para contenido funcional.

### Acentos semánticos (uso restringido)
- **Acento activo**: `#E8E8F0` — blanco perla. Solo en elementos interactivos en hover, indicadores de foco, y estados de énfasis máximo.
- **Acento cálido**: `#C4A882` — ámbar apagado. Reservado para tendencias positivas, valores en ascenso, y estados de alerta leve. Nunca como fondo.
- **Acento frío**: `#7A9AB0` — azul acero. Para tendencias negativas, valores en descenso. Nunca como fondo.
- **Acento neutro**: `#6A6A7A` — para estados estables o sin tendencia definida.

### Reglas de aplicación
- Nunca más de un acento visible simultáneamente en el viewport.
- Los acentos se aplican como color de texto o como trazo de 1 px. Nunca como relleno de área > 4 px de altura.
- El fondo primario ocupa ≥ 85 % de la pantalla en todo momento.

---

## Sombras

### Principio
La sombra en este lenguaje no es decorativa: es indicador de profundidad z. Solo dos planos existen: fondo y superficie elevada.

### Tokens
- **Sombra sutil** (superficie elevada): `0 1px 2px rgba(0,0,0,0.3)` — apenas perceptible, suficiente para separar un bloque del fondo sin crear flotación.
- **Sombra de foco** (indicador de accesibilidad): `0 0 0 2px rgba(232,232,240,0.6)` — anillo de acento activo, 2 px de grosor, sin desenfoque excesivo.
- **Sombra de estado presionado**: `inset 0 1px 2px rgba(0,0,0,0.4)` — hundimiento contenido, 80 ms.

### Prohibido
- Sombras difusas grandes (> 4 px de desenfoque).
- Sombras múltiples apiladas.
- Sombras con color (solo negro con transparencia).

---

## Radios

### Sistema
Dos valores únicos en toda la interfaz. Sin excepciones.

- **Radio 0**: bordes afilados. Aplica a: barras de Sistemas, indicadores numéricos, separadores, líneas de progreso.
- **Radio 4 px**: esquinas levemente suavizadas. Aplica a: los tres elementos interactivos (Punto de Atención, Cambio Principal, Acceso), contenedores de bloque si usan superficie elevada.

### Razonamiento
Las barras afiladas comunican precisión instrumental. Los elementos interactivos redondeados mínimamente comunican accesibilidad táctil sin ablandar la estética.

---

## Transparencias

### Uso funcional
La transparencia solo sirve para:
1. **Separación sutil**: fondo de bloque al 100 % opaco, nunca translúcido. El fondo primario es inquebrantable.
2. **Estados deshabilitados**: texto o trazos al 40 % de opacidad.
3. **Hover en elementos interactivos**: fondo del área pulsable pasa de 0 % a 6 % de blanco (`rgba(240,240,245,0.06)`). Incremento imperceptible consciente: el ojo lo registra como "vivo" sin identificar el cambio.
4. **Separadores**: `rgba(240,240,245,0.08)` — 1 px de altura, visibles solo cuando estrictamente necesarios.

### Prohibido
- Glassmorphism, blur de fondo, o translucidez estructural.
- Transparencia en texto principal o secundario.
- Gradientes con transparencia.

---

## Iconografía

### Sistema
Sin iconos decorativos. Cada marca visual es un glifo funcional.

### Flechas de acción
- Flecha diagonal simple (→ o ↗) en los tres elementos interactivos.
- Trazo: 1.5 px, punta de ángulo 45°.
- Tamaño: 16 × 16 px, alineada a la línea base del texto.
- En hover: desplazamiento de 2 px en dirección de la flecha (120 ms, ease-out). El único movimiento permitido en iconos.

### Indicadores de tendencia
- Triángulo equilátero de 8 px de altura para Tendencia (↑ ↓ →).
- Trazo: 1 px, sin relleno.
- Color: acento cálido, frío o neutro según semántica.

### Barras de Sistemas
- Sin iconos. El nombre del sistema es suficiente.
- Si se requiere indicador de estado del sistema: un círculo de 6 px de diámetro, relleno sólido, alineado a la izquierda del nombre. Color: acento correspondiente.

### Reglas
- Todos los glifos en trazo, nunca en relleno sólido (salvo indicadores de estado de 6 px).
- Grosor uniforme: 1.5 px para flechas, 1 px para indicadores.
- Sin animación permanente en iconos.
