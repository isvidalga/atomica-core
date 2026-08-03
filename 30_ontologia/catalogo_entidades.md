# Catálogo de Entidades

Estado: CANÓNICO

Versión: 2.0.0

Ubicación:

30_ontologia/catalogo_entidades.md

---

# Propósito

Declarar el conjunto oficial de entidades ontológicas del Modelo.

Este catálogo constituye la única fuente de verdad sobre las entidades que forman parte de la Ontología.

No define las entidades.

No especifica su estructura.

Únicamente declara cuáles existen oficialmente.

---

# Principios

Toda entidad ontológica existe únicamente cuando figura inscrita en este catálogo.

Toda entidad posee un único identificador.

Toda entidad posee exactamente una definición oficial.

Toda entidad pertenece exclusivamente a la Ontología.

Las entidades epistemológicas pertenecen a la Epistemología y nunca forman parte de este catálogo.

---

# Organización

Cada entrada registra:

- Identificador
- Entidad
- Estado
- Versión
- Documento de referencia

---

# Catálogo Oficial

| ID | Entidad | Estado | Versión | Documento |
|----|----------|--------|----------|-----------|
| ENT-001 | Organización | CANÓNICO | 2.0.0 | organizacion.md |
| ENT-002 | Modelo | CANÓNICO | 2.0.0 | modelo.md |
| ENT-003 | Identidad | CANÓNICO | 2.0.0 | identidad.md |
| ENT-004 | Estado | CANÓNICO | 2.0.0 | estado.md |
| ENT-005 | Representación | CANÓNICO | 2.0.0 | representacion.md |
| ENT-006 | Trayectoria | CANÓNICO | 2.0.0 | trayectoria.md |
| ENT-007 | Memoria | CANÓNICO | 2.0.0 | memoria.md |
| ENT-008 | Relación | CANÓNICO | 2.0.0 | relacion.md |

---

# Exclusiones

No pertenecen a la Ontología y, por tanto, no forman parte de este catálogo:

- Observación
- Hipótesis
- Evidencia
- Confianza

Estos conceptos pertenecen exclusivamente a la capa de Epistemología.

---

# Evolución

La incorporación de una nueva entidad requiere:

- definición ontológica;
- validación metodológica;
- inscripción en este catálogo;
- publicación de una nueva versión del Canon.

---

# Retirada

Una entidad retirada permanece registrada.

Su estado pasará a:

OBSOLETO

Su identificador nunca podrá reutilizarse.

---

# Restricciones

Una entidad nunca podrá aparecer más de una vez.

Toda entidad deberá poseer un documento oficial.

Una entidad nunca podrá pertenecer simultáneamente a dos capas del Canon.

---

# Relaciones

Depende de:

- `00_canon/politica_identificadores.md`

Utilizado por:

- toda la Ontología.

---

# Declaración

Este catálogo declara exclusivamente las entidades ontológicas que constituyen el Modelo.

Las entidades pertenecientes a otras capas del Canon deberán declararse en sus respectivos catálogos, cuando existan.
