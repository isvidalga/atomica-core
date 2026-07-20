# 003_spacing.md — HOME · Espaciado

Deriva de 001_home.md v1.0. Valores marcados **(d)** no están en 001. Sin referencias a color.

## Unidad base

**8 px (d)**. Todo margen, padding y separación es múltiplo de 8. Los valores de 001 lo cumplen (64, 48, 24, 16).

## Márgenes de contenedor

- Superior: **64 px**.
- Inferior: **96 px (d)** — cierre; la pantalla no termina pegada al último bloque.
- Laterales (viewport < 960 px): **24 px (d)** a cada lado (coincide con el padding interno mínimo).

## Separación entre bloques

**48 px** entre cada uno de los cinco bloques. Valor fijo e idéntico para los cinco: ningún bloque se separa más que otro, ni siquiera el Estado Global —su aire adicional procede de su padding interno, no del hueco entre bloques—.

## Paddings internos

- Título de bloque ↔ contenido del bloque: **16 px**.
- Padding interno mínimo de cualquier bloque: **24 px**.
- Áreas pulsables (Punto de Atención, Cambio Principal, Acceso): padding vertical **24 px (d)** para una zona de toque holgada; toda el área es objetivo.

## Estado Global · respiración

El bloque héroe respira por dentro, no por fuera (el hueco entre bloques sigue siendo 48).

- Aire sobre el IFO dentro del bloque: **32 px (d)**.
- IFO ↔ Nivel: **8 px (d)** — son un solo objeto, separación mínima.
- Nivel ↔ fila Tendencia/Confianza: **16 px (d)**.

## Sistemas · espaciado interno

- Separación entre las seis filas: **16 px (d)**.
- Es **menor** que los 48 px entre bloques a propósito: por proximidad, las seis filas se leen como un solo grupo (el sustrato), no como seis bloques.
- Altura de fila uniforme; padding vertical de fila **8 px (d)** por encima y por debajo de la barra.

## Ritmo vertical

Cadencia denso→abierto→denso: golpe (Estado Global) · 48 · línea (Punto) · 48 · línea (Cambio) · 48 · grupo calmado (Sistemas, interno 16) · 48 · acción (Acceso).

Toda caja de texto asienta sobre la línea base de 8 px; los saltos entre bloques son múltiplos limpios de 8, de modo que el ojo percibe un pulso regular sin verlo.

## Regla dura

Nunca dos bloques visualmente pegados. La separación mínima entre cualquier par de bloques es 48 px, sin excepción.
