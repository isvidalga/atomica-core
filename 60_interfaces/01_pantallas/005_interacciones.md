# 005_interacciones.md

# Inicio · Interacciones

Estado: Congelado

Versión: 1.0

Documento de implementación de interfaz.

Complementa:

`60_interfaces/01_pantallas/001_inicio.md`

`60_interfaces/01_pantallas/002_layout.md`

`60_interfaces/01_pantallas/003_espaciado.md`

`60_interfaces/01_pantallas/004_tipografia.md`

No modifica la arquitectura del producto.

No modifica el contenido.

Únicamente especifica el comportamiento interactivo de la pantalla Inicio.

---

# Propósito

Definir el comportamiento interactivo de la pantalla Inicio.

La interacción únicamente existe cuando permite acceder a una respuesta más profunda.

Nunca constituye una finalidad.

Nunca añade información.

Nunca distrae.

---

# Elementos interactivos

La pantalla contiene exactamente tres elementos interactivos.

No existen más.

## Punto de Atención

Destino:

**DONELLA**

---

## Cambio Principal

Destino:

**CRÓNICA**

---

## Acceso al Modelo Vivo

Destino:

**Modelo Vivo**

---

# Elementos no interactivos

Los siguientes elementos nunca responden a interacción:

- Estado Global.
- Sistemas.
- Barras de Sistemas.
- IFO.
- Nivel.
- Tendencia.
- Confianza.

No muestran estados interactivos.

No modifican el cursor.

---

# Hover

El estado Hover únicamente existe en los tres elementos interactivos.

Toda la superficie constituye el área activa.

---

## Comportamiento

El Hover únicamente puede producir:

- una ligera variación del fondo;
- un pequeño desplazamiento del indicador de acción.

Nunca ambas alteraciones modifican la jerarquía visual.

---

## Cursor

Durante Hover:

**pointer**

En el resto de la pantalla:

cursor por defecto.

---

## Duración

**120 ms**

Curva:

**ease-out**

---

## Restricciones

Nunca existen:

- rebotes;
- escalados;
- sombras decorativas;
- animaciones llamativas.

---

# Estado activo

Cuando el usuario pulsa un elemento interactivo:

- aparece un estado presionado;
- la navegación comienza inmediatamente tras liberar la interacción.

---

## Duración

**80 ms**

Curva:

**ease-out**

---

## Restricciones

No existen transiciones de salida.

No existen animaciones de cambio de pantalla.

La navegación es inmediata.

---

# Focus

Los tres elementos interactivos disponen de estado Focus.

El indicador de Focus debe ser claramente visible.

Nunca decorativo.

---

## Orden

El orden de navegación mediante teclado coincide exactamente con el orden de lectura.

1. Punto de Atención.
2. Cambio Principal.
3. Acceso al Modelo Vivo.

No existen elementos adicionales dentro de la secuencia.

---

## Elementos excluidos

No reciben Focus:

- Estado Global.
- Sistemas.
- Barras.
- IFO.
- Nivel.
- Tendencia.
- Confianza.

---

# Animaciones permitidas

Las animaciones únicamente existen cuando comunican un cambio de estado.

Nunca decoran.

Toda animación cumple simultáneamente las siguientes condiciones:

- duración máxima de **200 ms**;
- curva **ease-out**;
- desactivación automática cuando el sistema utiliza `prefers-reduced-motion`.

---

## Carga

Al finalizar la carga:

Los placeholders desaparecen.

El contenido aparece mediante una transición única.

Duración máxima:

**200 ms**

No existen apariciones escalonadas.

---

## Actualización de datos

Cuando cambian:

- IFO;
- Estado;
- valores de Sistemas.

La actualización utiliza una transición breve.

Duración máxima:

**200 ms**

---

## Reordenación de Sistemas

Cuando cambian los valores y el orden de las dimensiones se modifica:

La reordenación utiliza una transición breve.

Duración máxima:

**200 ms**

---

## Hover

El Hover utiliza la transición definida anteriormente.

Duración:

**120 ms**

---

# Accesibilidad

La interacción debe ser completamente utilizable mediante:

- ratón;
- teclado;
- dispositivos táctiles.

Las áreas pulsables mantienen un tamaño suficiente para interacción táctil.

---

# Restricciones

Nunca existen:

- animaciones permanentes;
- elementos en movimiento continuo;
- parpadeos;
- bucles;
- efectos parallax;
- fondos animados;
- barras con animación continua;
- efectos tridimensionales;
- gradientes animados;
- transiciones superiores a 200 ms;
- animaciones que no respondan a un cambio real de estado.

---

# Criterios de aceptación

La implementación se considera correcta únicamente si:

- existen exactamente tres elementos interactivos;
- Estado Global nunca responde a interacción;
- Sistemas nunca responde a interacción;
- las barras de Sistemas nunca responden a interacción;
- Hover únicamente existe sobre los tres elementos interactivos;
- Hover utiliza una duración de 120 ms;
- el estado activo utiliza una duración de 80 ms;
- toda navegación comienza inmediatamente tras finalizar la pulsación;
- el orden de Focus coincide con el orden de lectura;
- todas las animaciones duran un máximo de 200 ms;
- todas las animaciones respetan `prefers-reduced-motion`;
- no existen animaciones continuas ni decorativas.
