# Modelo Vivo

Estado: BORRADOR

Ubicación:

50_producto/esquema_bd_v2.md

---

# Propósito

Definir la estructura persistente del Modelo Vivo.

El Modelo representa el estado sistémico estimado de una organización.

No representa el diagnóstico.

El diagnóstico únicamente inicializa el Modelo.

---

# Tablas

## modelos

Representa el Modelo Vivo de una organización.

Existe un único modelo por organización.

---

## estados

Representa una instantánea inmutable del Modelo.

Cada modificación del Modelo genera un nuevo Estado.

Los Estados nunca se actualizan.

Solo se crean.

---

## trayectorias

Representa la secuencia temporal de Estados.

Permite reconstruir la evolución completa del Modelo.

No contiene información calculada.

Únicamente relaciones temporales.

---

## indicadores

Representa los indicadores calculados para un Estado.

Incluye, entre otros:

- IFO
- indicadores por dimensión
- indicadores derivados

Los indicadores pertenecen al Estado.

Nunca al Diagnóstico.

---

## patrones_detectados

Representa los patrones identificados durante el cálculo de un Estado.

Su existencia depende exclusivamente del Estado al que pertenecen.

---

# Relaciones

Organización

↓

Modelo

↓

Estado

├── Indicadores

├── Patrones detectados

└── Trayectoria

---

# Reglas

Existe un único Modelo por organización.

Un Modelo posee múltiples Estados.

Cada Estado pertenece a un único Modelo.

Los Estados son inmutables.

Toda evolución genera un nuevo Estado.

La Trayectoria se construye a partir de la secuencia de Estados.

Los Indicadores pertenecen a un Estado.

Los Patrones pertenecen a un Estado.

---

# Consecuencias

`diagnosticos` deja de almacenar:

- ifo_global
- scores_dimensiones
- fragilidades_ocultas
- nivel_antifragilidad

Toda esa información pasa a `estados`.

El diagnóstico queda reducido al papel de observación inicial del Modelo.
