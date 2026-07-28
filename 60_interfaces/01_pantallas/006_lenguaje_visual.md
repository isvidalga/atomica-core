# 006_lenguaje_visual.md

# HOME · Lenguaje Visual

Estado: PROVISIONAL

Versión: 0.1

---

# Propósito

Este documento define el lenguaje visual específico de la pantalla HOME.

No modifica la arquitectura.

No modifica el layout.

No modifica la navegación.

No introduce nuevos componentes.

Su función consiste únicamente en congelar las reglas visuales necesarias para implementar la Home.

Este documento es temporal.

Cuando exista el Sistema de Diseño canónico de ATÓMICA, todas las reglas generales deberán trasladarse allí.

Este documento conservará únicamente aquellas reglas específicas de la pantalla HOME.

---

# Principios

## El aspecto comunica significado

La estética nunca es decorativa.

Cada decisión visual debe reforzar la comprensión del estado de la organización.

---

## La jerarquía nunca depende del color

El orden visual se construye mediante:

- tamaño;
- peso;
- espacio;
- posición.

Nunca mediante colores llamativos.

---

## El color expresa estado

El color nunca organiza la interfaz.

Nunca sustituye la información.

Su función consiste únicamente en reforzar significado.

---

## La profundidad es mínima

La Home no utiliza efectos tridimensionales.

No pretende parecer un panel flotante.

Todo pertenece a un mismo plano visual.

---

# Colores

## Filosofía

La Home utiliza una paleta oscura propia de un instrumento de precisión.

El objetivo es reducir el ruido visual y favorecer la lectura prolongada.

---

## Escala principal

### Fondo principal

`#0A0A0F`

Negro azulado profundo.

Ocupa la práctica totalidad de la superficie.

---

### Superficie elevada

`#12121A`

Solo cuando sea estrictamente necesario separar visualmente un bloque.

Nunca como recurso decorativo.

---

### Texto principal

`#F0F0F5`

Máximo contraste de lectura.

---

### Texto secundario

`#8A8A99`

Información auxiliar.

---

### Texto terciario

`#5A5A6A`

Metadatos.

Información de contexto.

Nunca contenido funcional.

---

# Colores semánticos

## Acento principal

`#E8E8F0`

Reservado para:

- foco;
- interacción;
- elementos activos.

---

## Acento cálido

`#C4A882`

Representa:

- evolución positiva;
- crecimiento;
- tendencia favorable.

Nunca se utiliza como fondo.

---

## Acento frío

`#7A9AB0`

Representa:

- descenso;
- debilitamiento;
- pérdida.

---

## Acento neutro

`#6A6A7A`

Representa estabilidad.

---

# Restricciones de color

Nunca aparecerán simultáneamente varios colores de atención.

El fondo principal deberá ocupar al menos el 85 % de la pantalla.

Los colores de atención solo podrán aplicarse a:

- IFO;
- Tendencia;
- Punto de Atención;
- Cambio Principal.

---

# Sombras

## Filosofía

Las sombras representan profundidad.

Nunca decoración.

---

## Superficie elevada

```
0 1px 2px rgba(0,0,0,0.30)
```

---

## Estado de foco

```
0 0 0 2px rgba(232,232,240,0.60)
```

---

## Estado pulsado

```
inset 0 1px 2px rgba(0,0,0,0.40)
```

---

## Restricciones

No existen:

- sombras difusas;
- sombras múltiples;
- sombras coloreadas.

---

# Radios

Solo existen dos radios.

---

## Radio 0

Aplicado a:

- barras;
- indicadores;
- líneas;
- separadores.

---

## Radio 4 px

Aplicado únicamente a:

- Punto de Atención;
- Cambio Principal;
- Acceso al Modelo Vivo;
- superficies elevadas.

---

# Transparencias

Solo pueden utilizarse para:

- estados deshabilitados;
- hover;
- separadores;
- foco.

Nunca forman parte del diseño estructural.

---

## Hover

```
rgba(240,240,245,0.06)
```

---

## Separadores

```
rgba(240,240,245,0.08)
```

---

# Iconografía

## Filosofía

No existen iconos decorativos.

Cada icono posee significado funcional.

---

## Flechas

Se utilizan únicamente en:

- Punto de Atención;
- Cambio Principal;
- Acceso al Modelo Vivo.

Características:

- trazo de 1.5 px;
- tamaño 16×16 px;
- alineación con la línea base.

En hover:

- desplazamiento de 2 px;
- duración 120 ms;
- ease-out.

---

## Tendencia

Indicador triangular.

Altura:

8 px.

Sin relleno.

Solo trazo.

---

## Sistemas

No utilizan iconos.

El nombre identifica suficientemente la dimensión.

Cuando sea necesario indicar estado se utilizará únicamente un punto sólido de 6 px.

---

# Movimiento

El lenguaje visual permanece esencialmente estático.

Solo existen animaciones funcionales.

Nunca decorativas.

---

## Carga

Duración máxima:

200 ms.

---

## Actualización de datos

Duración máxima:

200 ms.

---

## Hover

Duración:

120 ms.

---

## Estado pulsado

Duración:

80 ms.

---

## Restricciones

No existen:

- animaciones permanentes;
- parallax;
- rebotes;
- escalados;
- efectos teatrales;
- fondos animados.

---

# Consistencia

Toda nueva decisión visual deberá respetar este documento.

Si una regla general comienza a repetirse en múltiples pantallas, deberá trasladarse al futuro Sistema de Diseño.

Hasta ese momento, este documento constituye la especificación visual de HOME.

---

# Criterios de aceptación

La implementación será correcta únicamente si:

- respeta la paleta definida;
- utiliza exclusivamente los radios especificados;
- no introduce colores adicionales;
- no incorpora sombras distintas de las definidas;
- mantiene una interfaz esencialmente estática;
- utiliza únicamente iconografía funcional;
- no introduce efectos decorativos;
- mantiene la jerarquía visual definida en `001_home.md`;
- continúa siendo compatible con `002_layout.md`, `003_spacing.md`, `004_typography.md` y `005_interacciones.md`.
