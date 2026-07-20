# HOME

## Estado

Congelado v1.0

---

# Pregunta

¿Cómo está mi organización?

La Home responde exclusivamente a esta pregunta.

No responde:

- cómo se relacionan las partes
- qué ocurrió
- qué debo hacer
- cómo evolucionan las intervenciones
- cuánta evidencia existe

Cada una pertenece a otra pantalla.

---

# Objetivo

Permitir que un CEO comprenda el estado general de su organización en menos de cinco segundos.

La Home no es un dashboard.

La Home no es un centro de operaciones.

La Home es un instrumento de lectura.

---

# Usuario

CEO.

Consulta prevista:

- una o varias veces al día
- menos de un minuto
- normalmente desde portátil
- ocasionalmente desde móvil

---

# Arquitectura

La pantalla se organiza verticalmente.

Existe una única columna de lectura.

Orden obligatorio.

1. Header

2. Estado

3. Sistemas

4. Cambio más relevante

5. Punto de apalancamiento

No existen columnas paralelas.

No existe sidebar.

---

# Componentes

## 1. Header

Contiene únicamente:

- nombre de la empresa
- fecha de última actualización

No contiene:

- avatar
- chat
- logo protagonista
- build
- versión
- usuario
- navegación secundaria

---

## 2. Estado

Es el elemento dominante de toda la pantalla.

Contiene únicamente:

- IFO
- nivel
- dirección
- confianza

Ejemplo

IFO

67

ROBUSTA

↑ +3

Confianza Alta

No existen más indicadores principales.

---

## 3. Sistemas

Lista de los seis sistemas organizacionales.

Cada sistema muestra únicamente:

- nombre
- puntuación
- estado visual

Cada sistema ocupa una sola línea.

Cada línea abre el detalle del sistema.

No existen tarjetas independientes.

No existen gráficos.

No existen widgets.

---

## 4. Cambio más relevante

Responde únicamente:

¿Qué está cambiando?

Formato:

Una frase.

Un enlace.

Ejemplo

"La dependencia de una persona clave continúa aumentando."

→ Ver Crónica

---

## 5. Punto de apalancamiento

Responde únicamente:

¿Dónde merece la pena intervenir?

Formato:

Una frase.

Un enlace.

Ejemplo

"Reducir los retrasos de retroalimentación."

→ Abrir Donella

---

# Navegación

Estado

↓

Detalle IFO

Sistema

↓

Detalle Sistema

Cambio

↓

Crónica

Palanca

↓

Donella

No existe ninguna otra navegación.

---

# Elementos prohibidos

La Home nunca contendrá:

- radar
- grafo
- timeline
- actividad reciente
- alertas
- intervención
- evidencias
- documentos
- PDF
- widgets
- chat IA
- avatar
- noticias
- KPIs secundarios
- carruseles
- tablas
- mapas
- gráficos complejos

---

# Criterios de aceptación

Después de cinco segundos un CEO debe poder responder:

1.

¿Cómo está mi organización?

2.

¿Cuál es el sistema más débil?

3.

¿Qué está cambiando?

4.

¿Dónde debo mirar primero?

Si necesita explorar la pantalla para responder cualquiera de estas preguntas, la Home no cumple su función.

---

# Dependencias

La Home enlaza con:

002_modelo_vivo.md

003_cronica.md

004_donella.md

No depende funcionalmente de ninguna otra pantalla.

---

# Implementación

Esta especificación es independiente de la tecnología.

No define:

- HTML
- CSS
- JavaScript
- React
- Vue
- componentes

Define únicamente el comportamiento funcional del producto.

Cualquier implementación deberá respetar esta especificación.
