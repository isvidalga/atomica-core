# 002_layout.md

# Inicio · Layout

Estado: Congelado

Versión: 1.0

Documento de implementación de interfaz.

Complementa:

`60_interfaces/01_pantallas/001_inicio.md`

No modifica la arquitectura del producto.

No modifica la navegación.

Únicamente especifica el layout de la pantalla Inicio.

---

# Propósito

Definir la estructura espacial de la pantalla Inicio.

Este documento especifica únicamente la distribución física de los elementos.

No define contenido.

No define comportamiento.

No define estilo visual.

---

# Grid

Retícula base:

**8 px**

Todo el layout se alinea a múltiplos de ocho.

No existen excepciones.

No existe una retícula de columnas.

La estructura se organiza sobre un único eje vertical.

---

# Columnas

La pantalla utiliza una única columna.

No existen:

- paneles laterales;
- segundas columnas;
- rejillas de tarjetas.

---

## Anchura

Anchura máxima del contenido:

**960 px**

El contenedor permanece centrado horizontalmente.

Cuando el ancho disponible sea inferior a 960 px, la columna ocupará todo el espacio disponible respetando los márgenes definidos para dispositivos menores.

---

# Alineaciones

Existe un único eje izquierdo.

Todos los bloques utilizan exactamente el mismo punto de alineación.

No existen alineaciones independientes.

---

## Estado Global

El Estado Global no se centra.

Su jerarquía proviene del tamaño.

Nunca de la posición.

---

## Sistemas

Cada fila mantiene la siguiente estructura:

Nombre

↓

Barra horizontal

↓

Valor

El nombre se alinea al borde izquierdo.

El valor al borde derecho.

La barra ocupa el espacio restante.

---

# Tamaños

La jerarquía visual depende exclusivamente de la masa visual.

Nunca del color.

Nunca de la decoración.

Orden obligatorio:

1. Estado Global
2. Punto de Atención
3. Cambio Principal
4. Sistemas
5. Acceso al Modelo Vivo

---

## Estado Global

Constituye el objeto visual dominante.

El IFO representa el mayor peso visual de toda la pantalla.

Ningún otro elemento puede competir con él.

---

## Punto de Atención

Fila de una única línea.

Anchura completa.

Área completamente pulsable.

---

## Cambio Principal

Fila de una única línea.

Anchura completa.

Área completamente pulsable.

---

## Sistemas

Grupo compuesto por exactamente seis filas.

Todas poseen:

- misma altura;
- misma anchura;
- misma estructura.

---

## Acceso al Modelo Vivo

Una única fila de acción.

Anchura completa.

Área completamente pulsable.

---

# Distribución

Los bloques se apilan verticalmente.

Nunca aparecen en paralelo.

Orden obligatorio:

1. Estado Global
2. Punto de Atención
3. Cambio Principal
4. Sistemas
5. Acceso al Modelo Vivo

La única disposición horizontal permitida es la estructura interna de cada fila del bloque Sistemas.

---

# Jerarquía visual

La jerarquía se construye mediante:

- tamaño;
- peso visual;
- espacio.

Nunca mediante:

- color;
- efectos;
- ornamentación.

---

## Estado Global

Recibe la mayor masa visual y la mayor cantidad de espacio libre.

Constituye siempre el primer punto de atención.

---

## Punto de Atención

Segundo punto de atención.

No compite visualmente con el Estado Global.

---

## Cambio Principal

Tercer punto de atención.

Mantiene la misma estructura espacial que el Punto de Atención.

---

## Sistemas

Debe percibirse como un único bloque.

Nunca como seis elementos independientes.

La separación entre filas será siempre menor que la separación entre bloques principales.

---

## Acceso al Modelo Vivo

Representa el cierre natural de la pantalla.

Nunca compite visualmente con los bloques anteriores.

---

# Restricciones

No existen columnas adicionales.

No existen paneles flotantes.

No existen tarjetas.

No existen distribuciones en mosaico.

No existen elementos fuera del eje principal.

---

# Criterios de aceptación

La implementación se considera correcta únicamente si:

- existe una única columna;
- el contenido ocupa un máximo de 960 px;
- todos los bloques comparten el mismo eje izquierdo;
- el Estado Global constituye el elemento dominante;
- los cinco bloques aparecen apilados verticalmente;
- Sistemas se percibe como un único bloque compuesto por seis filas;
- no existen paneles laterales, tarjetas ni columnas adicionales.
