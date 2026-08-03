# RELACIÓN

Estado: CANÓNICO

Tipo: CONCEPTO

Versión: 2.0.0

Ubicación:

30_ontologia/relacion.md

---

# Propósito

Definir el concepto de Relación dentro de la ontología de ATÓMICA.

Una Relación constituye el vínculo estructural existente entre dos o más entidades del Modelo.

Las Relaciones proporcionan estructura al Modelo.

Sin Relaciones, las entidades permanecerían aisladas.

---

# Definición

Una Relación es un vínculo estructural entre dos o más entidades del Modelo.

Una Relación no es ninguna de las entidades que conecta.

Una Relación no modifica las entidades relacionadas.

Una Relación expresa únicamente la existencia de una conexión.

---

# Naturaleza

La Relación:

- pertenece al Modelo;
- es independiente de cualquier implementación;
- puede ser dirigida cuando la naturaleza de la conexión lo requiera;
- nunca interpreta el significado de la conexión;
- nunca altera las entidades relacionadas.

---

# Constitución

Toda Relación posee:

- un identificador único;
- las entidades relacionadas;
- la naturaleza de la conexión;
- una dirección, cuando corresponda.

---

# Formación

Una Relación únicamente puede establecerse entre entidades existentes del Modelo.

La creación de una Relación nunca modifica las entidades relacionadas.

La modificación de una Relación genera una nueva Relación.

---

# Persistencia

Toda Relación forma parte del conocimiento del Modelo.

Su historial permanece trazable conforme a las reglas generales del Canon.

---

# Restricciones

## RL-001

Toda Relación conecta dos o más entidades del Modelo.

---

## RL-002

Una Relación nunca existe sin las entidades que conecta.

---

## RL-003

Una Relación nunca modifica las entidades relacionadas.

---

## RL-004

Una Relación nunca sustituye a las entidades relacionadas.

---

## RL-005

Una Relación nunca constituye una de las entidades relacionadas.

---

## RL-006

Varias Relaciones pueden conectar las mismas entidades.

---

## RL-007

La dirección de una Relación existe únicamente cuando la naturaleza de la conexión lo requiere.

---

## RL-008

Una Relación nunca interpreta la conexión que representa.

---

# Exclusiones

Una Relación nunca contiene:

- Observaciones;
- Evidencias;
- Hipótesis;
- Confianza;
- decisiones;
- recomendaciones;
- intervenciones;
- cálculos;
- interfaces.

---

# Relaciones

Depende de:

- 10_nucleo/axiomas.md
- 10_nucleo/principios.md

Utilizado por:

- estado.md
- representacion.md
- 40_metodologia/
- 50_producto/

---

# Responsabilidad

Este documento define exclusivamente el concepto de Relación.

No define las entidades del dominio.

No define el significado de las conexiones.

No establece reglas metodológicas.

---

# Declaración

Las Relaciones constituyen la estructura del Modelo.

Las entidades determinan qué existe.

Las Relaciones determinan cómo dichas entidades permanecen conectadas.
