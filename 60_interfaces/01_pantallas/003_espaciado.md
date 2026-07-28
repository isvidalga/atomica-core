# 003_espaciado.md

# Inicio · Espaciado

Estado: Congelado

Versión: 1.0

Documento de implementación de interfaz.

Complementa:

`60_interfaces/01_pantallas/001_inicio.md`

`60_interfaces/01_pantallas/002_layout.md`

No modifica la arquitectura del producto.

No modifica el layout.

Únicamente especifica el sistema de espaciado de la pantalla Inicio.

---

# Propósito

Definir el ritmo espacial de la pantalla.

El espaciado constituye parte del lenguaje visual.

No representa decoración.

Representa jerarquía.

Representa agrupación.

Representa respiración.

---

# Unidad base

La unidad base del sistema es:

**8 px**

Todo margen, separación y padding será múltiplo de ocho.

No existen excepciones.

---

# Márgenes del contenedor

## Margen superior

**64 px**

---

## Margen inferior

**96 px**

La pantalla nunca finaliza inmediatamente después del último bloque.

Siempre conserva un cierre visual amplio.

---

## Márgenes laterales

Cuando el ancho disponible sea inferior a la anchura máxima del contenido:

**24 px** a cada lado.

---

# Separación entre bloques

La separación entre los cinco bloques principales será siempre:

**48 px**

Es un valor constante.

Nunca depende del contenido.

Nunca existen excepciones.

El Estado Global no incrementa esta separación.

Su presencia visual proviene únicamente de su espacio interno.

---

# Espaciado interno

## Título de bloque → contenido

**16 px**

---

## Padding interno mínimo

Todo bloque mantiene un padding mínimo de:

**24 px**

---

## Áreas pulsables

Los bloques interactivos mantienen un padding vertical mínimo de:

**24 px**

Se consideran bloques interactivos:

- Punto de Atención.
- Cambio Principal.
- Acceso al Modelo Vivo.

Toda la superficie constituye un único objetivo de interacción.

---

# Estado Global

El Estado Global obtiene su presencia mediante respiración interna.

Nunca mediante separación adicional respecto al resto de bloques.

---

## Aire superior

**32 px**

---

## IFO → Nivel

**8 px**

Ambos elementos forman un único objeto visual.

La separación será mínima.

---

## Nivel → Tendencia / Confianza

**16 px**

---

# Sistemas

El bloque Sistemas constituye un único grupo visual.

Nunca se percibe como seis bloques independientes.

---

## Separación entre filas

**16 px**

Este valor es deliberadamente inferior a la separación existente entre bloques principales.

---

## Altura

Todas las filas mantienen exactamente la misma altura.

---

## Padding vertical por fila

**8 px** por encima.

**8 px** por debajo.

---

# Ritmo vertical

La pantalla mantiene un ritmo constante.

Estado Global

↓

48 px

↓

Punto de Atención

↓

48 px

↓

Cambio Principal

↓

48 px

↓

Sistemas

↓

48 px

↓

Acceso al Modelo Vivo

El ritmo únicamente se altera mediante el espaciado interno de cada bloque.

Nunca mediante la separación entre bloques.

---

# Agrupación visual

La proximidad comunica relación.

La separación comunica independencia.

Por ello:

- las seis filas de Sistemas aparecen agrupadas;
- los cinco bloques principales permanecen claramente diferenciados.

---

# Restricciones

Nunca existen bloques visualmente pegados.

Nunca existen separaciones arbitrarias.

Nunca se utilizan valores distintos de múltiplos de ocho.

Nunca se incrementa la separación entre bloques para generar jerarquía.

La jerarquía siempre procede del contenido y del espacio interno.

---

# Criterios de aceptación

La implementación se considera correcta únicamente si:

- toda separación es múltiplo de ocho;
- el margen superior es de 64 px;
- el margen inferior es de 96 px;
- los márgenes laterales son de 24 px cuando la pantalla es inferior a 960 px;
- la separación entre los cinco bloques es siempre de 48 px;
- el padding mínimo de cualquier bloque es de 24 px;
- las áreas pulsables mantienen un padding vertical mínimo de 24 px;
- el Estado Global obtiene su presencia mediante respiración interna y no mediante separación adicional;
- las seis filas de Sistemas mantienen una separación constante de 16 px;
- el bloque Sistemas se percibe como un único grupo visual.
