# 007_microdetalles.md

# HOME · Microdetalles

## Estado

Congelado

Versión: 1.0

Deriva de:

- 001_home.md
- 002_layout.md
- 003_espaciado.md
- 004_tipografía.md
- 005_interacciones.md
- 006_lenguaje_visual.md

No modifica arquitectura.

No modifica navegación.

No modifica componentes.

Únicamente especifica el comportamiento de los pequeños detalles visuales y de interacción.

---

# Propósito

Los microdetalles eliminan ambigüedad durante la implementación.

No añaden funcionalidades.

No modifican el comportamiento del producto.

Únicamente garantizan consistencia.

---

# Estados vacíos

## Principio

Un estado vacío nunca representa un error.

Representa conocimiento ausente.

Debe mostrarse explícitamente.

Nunca debe simularse información inexistente.

---

## Estado Global

Si el IFO no puede calcularse:

- se muestra "—";
- nunca se muestra "0";
- nunca se muestra "N/A";
- nunca permanece un indicador de carga permanente.

---

## Punto de Atención

Si no existe un punto de atención:

Se muestra:

> Sin alertas activas.

El bloque continúa siendo navegable.

Destino:

DONELLA

---

## Cambio Principal

Si no existe ningún cambio:

Se muestra:

> Sin cambios significativos.

El bloque continúa siendo navegable.

Destino:

CRÓNICA

---

## Sistemas

Las seis dimensiones permanecen visibles.

Cada una muestra:

- nombre;
- barra vacía;
- valor "—".

Nunca desaparecen.

---

## Acceso al Modelo Vivo

Nunca desaparece.

Siempre permanece operativo.

---

# Skeletons

## Cuándo aparecen

Únicamente cuando la carga inicial supera:

300 ms.

Nunca aparecen durante pequeñas actualizaciones.

---

## Aspecto

Los skeletons reproducen exactamente la geometría del contenido definitivo.

No inventan nuevas formas.

---

## Estado Global

Skeleton del IFO.

Skeleton del Nivel.

---

## Punto de Atención

Una línea.

---

## Cambio Principal

Una línea.

---

## Sistemas

Seis barras.

---

## Modelo Vivo

No utiliza skeleton.

---

## Animación

Pulso suave.

Duración:

1,5 s

Se desactiva automáticamente cuando el usuario solicita reducción de movimiento.

---

## Nunca

Nunca utilizan:

- shimmer;
- gradientes móviles;
- desplazamientos;
- efectos llamativos.

---

# Carga

La Home nunca muestra spinners.

Nunca existen ruedas giratorias.

Nunca existen barras de progreso.

---

## Carga inicial

Skeleton.

---

## Actualización

Transición directa entre valores.

Duración máxima:

200 ms.

---

## Tiempo excesivo

Si el cálculo del IFO supera:

3 segundos

Se muestra:

—

Nunca un spinner.

---

# Foco

## Aplicación

Únicamente existe foco visible sobre:

- Punto de Atención;
- Cambio Principal;
- Acceso al Modelo Vivo.

---

## Indicador

Anillo exterior.

2 px.

Visible.

No decorativo.

---

## Orden

El orden de tabulación coincide exactamente con el orden de lectura.

1.

Punto de Atención.

2.

Cambio Principal.

3.

Modelo Vivo.

---

## Nunca

Estado Global.

Sistemas.

No reciben foco.

---

# Selección

La selección de texto utiliza el estilo definido por el sistema.

No existe selección persistente de componentes.

Los elementos interactivos nunca permanecen seleccionados.

---

# Scroll

## Comportamiento

Scroll nativo.

Sin librerías.

Sin efectos especiales.

---

## Scrollbar

La scrollbar es la proporcionada por el sistema operativo.

Nunca se personaliza.

---

## Overscroll

El fondo permanece uniforme.

Nunca aparecen colores distintos del fondo principal.

---

# Barras de Sistemas

## Geometría

Altura uniforme.

Anchura uniforme.

Bordes rectos.

---

## Estados

### Sin datos

Barra vacía.

Valor:

—

---

### Cero

La pista permanece visible.

La barra no desaparece.

---

### Máximo

No existe efecto especial.

No cambia el color.

No aparece brillo.

---

## Reordenación

Cuando cambian los datos:

Las seis filas se reordenan.

La transición dura como máximo:

200 ms.

Nunca existe rebote.

Nunca existe efecto de mezcla.

---

## Interacción

Las barras nunca son interactivas.

No poseen:

- hover;
- click;
- tooltip;
- menú contextual.

---

# Cursores

Cursor por defecto:

- Estado Global.
- Sistemas.

Cursor interactivo:

- Punto de Atención.
- Cambio Principal.
- Acceso al Modelo Vivo.

Nunca existen cursores diferentes.

---

# Movimiento

Todo movimiento cumple simultáneamente:

- duración máxima de 200 ms;
- una única curva de aceleración;
- propósito funcional.

Nunca existe movimiento permanente.

Nunca existen animaciones decorativas.

---

# Accesibilidad

La Home debe poder utilizarse completamente mediante teclado.

Los indicadores visuales nunca son el único mecanismo para comunicar un estado.

Toda información crítica permanece disponible sin depender de color, movimiento o animación.

---

# Restricciones

## R-001

Nunca mostrar un spinner.

---

## R-002

Nunca ocultar la ausencia de datos.

---

## R-003

Nunca eliminar una dimensión del bloque Sistemas.

---

## R-004

Nunca introducir animaciones permanentes.

---

## R-005

Nunca añadir estados de interacción distintos de los definidos.

---

# Criterios de aceptación

La implementación se considera correcta únicamente si:

- Los estados vacíos permanecen visibles y nunca se sustituyen por valores ficticios.
- Los skeletons aparecen únicamente durante la carga inicial superior a 300 ms.
- Nunca existen spinners.
- El foco únicamente aparece sobre los tres elementos navegables.
- Las barras permanecen visibles incluso sin datos.
- El scroll utiliza exclusivamente el comportamiento nativo.
- Ninguna animación supera los 200 ms.
- No existen microinteracciones distintas de las especificadas.
