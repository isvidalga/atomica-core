# 004_typography.md — HOME · Tipografía

Deriva de 001_home.md v1.0. Valores marcados **(d)** no están en 001. 001 fija: tres niveles, sin niveles adicionales.

## Familia

**Inter Tight (d)** — token congelado del sistema. Una sola familia en toda la Home.

- Numerales **tabulares** (tnum) en IFO y en los valores de Sistemas: para lectura de instrumento y alineación por columna.
- Fallback: pila de sistema (system-ui) para robustez si la fuente no carga.

## Tres niveles

Exactamente tres. Cada elemento de la Home pertenece a uno; no existen más.

### Nivel 1 — Estado (display)
El único objeto de mayor voz. Miembros: **IFO** y su **Nivel** cualitativo (acompañante ligado; ver nota).

- IFO: **120 px (d)**, peso **600**, interlineado **1.0 (d)**, tracking **−0.035em (d)**, tabular.
- Nivel: **28 px (d)**, peso **600**, mismo color/voz que el IFO. Escala reducida porque es el qualificador del número, no un elemento nuevo.

*Nota:* Tendencia y Confianza **no** están en Nivel 1 — son indicadores compactos (Nivel 3).

### Nivel 2 — Títulos de bloque (label)
Etiquetas silenciosas que nombran cada bloque.

- **12 px (d)**, peso **600**, mayúsculas, tracking **+0.14em (d)**, interlineado **1.2 (d)**.

### Nivel 3 — Contenido
Todo lo demás: frases de Punto de Atención y Cambio Principal, nombres y valores de Sistemas, Tendencia, Confianza, acción de Acceso.

- Base: **16 px (d)**, peso **400–500**, interlineado **1.45 (d)**.
- Frases (Punto / Cambio): pueden usar **18 px (d)** por longitud de línea; mismo peso y nivel.
- Valores de Sistemas: **16 px**, peso **500**, tabular.
- Tendencia / Confianza: **13 px (d)**, peso **500**, compactos.

## Pesos

Solo dos pesos en toda la pantalla: **600** (display y títulos) y **400–500** (contenido). Ningún tercer peso.

## Interlineado

Display 1.0 · Títulos 1.2 · Contenido 1.45. Sin valores intermedios.

## Contraste

Jerarquía por tamaño y peso, nunca por color (el color lo gobierna 001).

- Contraste de tamaño IFO : contenido ≈ **7.5×** — garantiza que el IFO sea la primera fijación (pop-out).
- Contraste de tamaño Título : contenido ≈ 0.75× (los títulos son más pequeños que el contenido; son etiquetas, no encabezados que compitan).
- Contraste de peso: 600 vs 400–500 marca la diferencia entre voz de estado/etiqueta y voz de contenido.
