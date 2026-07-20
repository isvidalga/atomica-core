# 002_layout.md — HOME · Layout

Deriva de 001_home.md v1.0. Valores marcados **(d)** no están en 001; son especificación de diseño vetables.

## Grid

Retícula base: **8 px (d)**. Todo alineado a múltiplos de 8. Sin retícula de columnas: el eje es vertical.

## Columnas

Una sola columna. Sin paneles laterales, sin segundas columnas, sin rejilla de tarjetas.

- Ancho máximo de contenido: **960 px**.
- Contenedor centrado horizontalmente en la página.
- Por debajo de 960 px: la columna es fluida al 100 % con margen lateral **(d)** (ver 003).

## Alineaciones

Un **único eje izquierdo (d)** para los cinco bloques. Todo el contenido se alinea a ese borde.

- El Estado Global no se centra: su dominancia procede del tamaño, no de la posición.
- Excepción interna Sistemas: nombre al borde izquierdo, valor alineado a la derecha del ancho de columna, barra entre ambos.

## Tamaños (proporción, no tipografía)

Jerarquía de masa visual, de mayor a menor:

1. **Estado Global** — mayor masa de la pantalla. El IFO domina; nada puede igualarlo (ratio de tamaño ≈ 7–8× sobre el contenido, ver 004).
2. **Punto de Atención** — fila de una línea, ancho completo de columna, área pulsable.
3. **Cambio Principal** — fila de una línea, ancho completo, área pulsable.
4. **Sistemas** — seis filas de altura uniforme, ancho completo. Cada fila: nombre · barra · valor. Barras de anchura y altura uniformes.
5. **Acceso al Modelo Vivo** — una única fila de acción compacta, ancho completo, área pulsable.

## Distribución

Orden vertical fijo e inalterable (1→5), apilado en la columna. La separación vertical la define 003. Ningún bloque se coloca en paralelo a otro; no hay disposición horizontal salvo dentro de una fila de Sistemas.

## Jerarquía visual

Impuesta por tamaño, peso y espacio —no por posición—.

- El Estado Global recibe la mayor masa y el mayor aire (003); es el primer punto de fijación.
- Los bloques 2→5 descienden en presencia visual sin competir entre sí ni con el 1.
- Sistemas se lee como **un grupo** (seis filas), no como seis elementos sueltos: su separación interna es menor que la separación entre bloques (003).
- El orden de atención coincide exactamente con el orden de distribución.
