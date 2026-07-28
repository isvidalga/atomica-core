# Relación

**Estado:** Frozen

**Versión:** 1.0.0

**Breadcrumb:** `30_ontologia/relacion.md`

---

# Propósito

Este documento define el concepto de Relación dentro de la ontología de ATÓMICA.

Una Relación constituye la conexión estructural existente entre dos o más entidades del dominio.

Las Relaciones proporcionan estructura al Modelo.

Sin Relaciones, las entidades permanecerían aisladas.

---

# Definición

Una Relación es una conexión estructural entre dos o más entidades del dominio.

Una Relación no es ninguna de las entidades que conecta.

Una Relación no modifica las entidades relacionadas.

---

# Naturaleza

La Relación:

- pertenece al Modelo;
- pertenece al dominio;
- es independiente de cualquier tecnología;
- puede ser dirigida cuando la naturaleza de la conexión lo requiere;
- nunca interpreta el significado de la conexión.

---

# Constitución

Toda Relación está formada por:

- un identificador;
- las entidades relacionadas;
- la naturaleza de la conexión;
- una dirección, cuando corresponda.

---

# Formación

Una Relación existe únicamente cuando existen las entidades que conecta.

La desaparición de cualquiera de ellas invalida la Relación.

La modificación de una Relación genera una nueva Relación.

---

# Restricciones

## RL-001

Toda Relación conecta dos o más entidades del dominio.

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

Una Relación nunca es una de las entidades relacionadas.

---

## RL-006

Varias Relaciones pueden conectar las mismas entidades.

---

## RL-007

La dirección de una Relación sólo existe cuando la naturaleza de la conexión lo requiere.

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

# Dependencias

- `10_nucleo/axiomas.md`

---

# Utilizado por

- `30_ontologia/estado.md`
- `30_ontologia/representacion.md`
- `40_metodologia/`
- `50_producto/`

---

# Declaración

Las Relaciones constituyen la estructura del Modelo.

Las entidades definen qué existe.

Las Relaciones definen cómo esas entidades permanecen conectadas.
