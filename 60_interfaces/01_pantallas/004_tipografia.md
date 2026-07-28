# 004_tipografia.md

# Inicio · Tipografía

Estado: Congelado

Versión: 1.0

Documento de implementación de interfaz.

Complementa:

`60_interfaces/01_pantallas/001_inicio.md`

`60_interfaces/01_pantallas/002_layout.md`

`60_interfaces/01_pantallas/003_espaciado.md`

No modifica la arquitectura del producto.

No modifica el layout.

No modifica el contenido.

Únicamente especifica el sistema tipográfico de la pantalla Inicio.

---

# Propósito

Definir el lenguaje tipográfico de la pantalla Inicio.

La tipografía constituye una herramienta de jerarquía.

Nunca representa decoración.

Nunca representa identidad de marca.

Su única función consiste en facilitar la comprensión inmediata del estado de la organización.

---

# Familia tipográfica

La pantalla utiliza una única familia tipográfica.

**Inter Tight**

Si la fuente no estuviera disponible se utilizará la pila tipográfica del sistema.

Nunca se mezclan familias.

---

# Numerales

Los valores numéricos utilizan siempre:

**Numerales tabulares (tnum)**

Se aplican a:

- IFO.
- Valores del bloque Sistemas.

El objetivo es mantener una alineación estable durante cualquier actualización.

---

# Jerarquía tipográfica

La pantalla utiliza exactamente tres niveles tipográficos.

No existen niveles adicionales.

Todo elemento visible pertenece obligatoriamente a uno de ellos.

---

# Nivel 1 · Estado

Representa el Estado Global.

Es la voz dominante de la pantalla.

Incluye únicamente:

- IFO.
- Nivel cualitativo.

---

## IFO

Tamaño:

**120 px**

Peso:

**600**

Interlineado:

**1.0**

Tracking:

**−0.035 em**

Utiliza numerales tabulares.

---

## Nivel cualitativo

Tamaño:

**28 px**

Peso:

**600**

El nivel cualitativo forma parte del mismo objeto visual que el IFO.

Nunca constituye un encabezado independiente.

---

# Nivel 2 · Títulos de bloque

Identifica los cinco bloques funcionales.

No compite con el contenido.

Únicamente etiqueta.

---

## Especificación

Tamaño:

**12 px**

Peso:

**600**

Transformación:

**Mayúsculas**

Tracking:

**+0.14 em**

Interlineado:

**1.2**

---

# Nivel 3 · Contenido

Representa toda la información restante.

Incluye:

- Punto de Atención.
- Cambio Principal.
- Tendencia.
- Confianza.
- Nombres de Sistemas.
- Valores de Sistemas.
- Acción de acceso al Modelo Vivo.

---

## Contenido general

Tamaño:

**16 px**

Peso:

**400–500**

Interlineado:

**1.45**

---

## Frases principales

Las frases del Punto de Atención y del Cambio Principal pueden aumentar ligeramente su tamaño para favorecer la lectura.

Tamaño:

**18 px**

Peso:

**400–500**

Interlineado:

**1.45**

---

## Valores de Sistemas

Tamaño:

**16 px**

Peso:

**500**

Utilizan numerales tabulares.

---

## Tendencia y Confianza

Tamaño:

**13 px**

Peso:

**500**

Nunca pertenecen al Nivel 1.

Siempre forman parte del Nivel 3.

---

# Pesos tipográficos

La pantalla utiliza únicamente dos pesos principales.

**600**

Utilizado para:

- Estado Global.
- Nivel cualitativo.
- Títulos de bloque.

---

**400–500**

Utilizado para:

- Contenido.
- Frases.
- Valores.
- Indicadores.

No existen pesos adicionales.

---

# Interlineado

Nivel 1

**1.0**

---

Nivel 2

**1.2**

---

Nivel 3

**1.45**

No existen valores intermedios.

---

# Jerarquía visual

La jerarquía tipográfica depende exclusivamente de:

- tamaño;
- peso;
- espaciado.

Nunca depende del color.

Nunca depende de efectos gráficos.

---

## Estado Global

El IFO constituye el primer punto de atención.

Su tamaño mantiene una proporción aproximada de:

**7,5 : 1**

respecto al contenido base.

---

## Títulos

Los títulos son deliberadamente más pequeños que el contenido.

Su función consiste únicamente en identificar bloques.

Nunca atraer la atención.

---

## Contenido

Todo el contenido mantiene una lectura homogénea.

Ningún elemento del Nivel 3 compite con el Estado Global.

---

# Restricciones

Existe una única familia tipográfica.

Existen exactamente tres niveles tipográficos.

Los numerales utilizan formato tabular.

Los títulos nunca superan visualmente al contenido.

El Estado Global mantiene siempre la mayor presencia tipográfica.

La jerarquía nunca se construye mediante color.

---

# Criterios de aceptación

La implementación se considera correcta únicamente si:

- toda la pantalla utiliza Inter Tight;
- los numerales del IFO utilizan formato tabular;
- los valores de Sistemas utilizan formato tabular;
- existen exactamente tres niveles tipográficos;
- el IFO utiliza un tamaño de 120 px y peso 600;
- el nivel cualitativo utiliza un tamaño de 28 px y peso 600;
- los títulos de bloque utilizan un tamaño de 12 px, peso 600 y mayúsculas;
- el contenido utiliza un tamaño base de 16 px;
- las frases principales pueden utilizar un tamaño de 18 px;
- Tendencia y Confianza pertenecen al Nivel 3;
- únicamente existen los pesos 600 y 400–500;
- la jerarquía visual depende exclusivamente del tamaño, el peso y el espaciado.
- 
