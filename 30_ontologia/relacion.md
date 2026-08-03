# Relación

Estado: CANÓNICO

Versión: 2.0.0

Ubicación:

30_ontologia/relacion.md

---

# Propósito

Definir el concepto ontológico de Relación.

Una Relación constituye el vínculo estructural entre entidades del Modelo.

Las Relaciones proporcionan estructura al Modelo.

Las entidades definen qué existe.

Las Relaciones definen cómo permanece conectado.

---

# Definición

Una Relación es un vínculo estructural entre dos o más entidades del Modelo.

Una Relación nunca constituye ninguna de las entidades que conecta.

Una Relación nunca modifica dichas entidades.

---

# Naturaleza

Toda Relación:

- pertenece al Modelo;
- conecta entidades del Modelo;
- es independiente de cualquier implementación;
- puede ser dirigida cuando la naturaleza del vínculo lo requiera;
- es inmutable una vez admitida.

---

# Propiedades

Toda Relación posee:

- un identificador único;
- las entidades que conecta;
- una naturaleza de relación;
- una dirección cuando resulte necesaria.

---

# Formación

Una Relación únicamente puede existir cuando existen las entidades que conecta.

Toda modificación de una Relación requiere la creación de una nueva Relación.

Nunca la modificación de una Relación existente.

---

# Persistencia

Toda Relación admitida permanece disponible mientras existan las entidades que conecta.

La sustitución por una nueva Relación nunca modifica la anterior.

---

# Relaciones

Una Relación puede conectar:

- Organizaciones;
- Estados;
- Representaciones;
- Capacidades;
- Fragilidades;
- Principios Sistémicos;
- cualquier otra entidad oficialmente definida por el Canon.

---

# Restricciones

## RL-001

Toda Relación conecta al menos dos entidades del Modelo.

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

Toda modificación genera una nueva Relación.

---

## RL-006

Varias Relaciones pueden conectar las mismas entidades.

---

## RL-007

La dirección únicamente existe cuando la naturaleza del vínculo lo requiere.

---

# Exclusiones

Una Relación nunca contiene:

- Observaciones;
- Hipótesis;
- Evidencias;
- Confianza;
- decisiones;
- intervenciones;
- interfaces;
- algoritmos.

---

# Dependencias

- `10_nucleo/axiomas.md`
- `30_ontologia/modelo.md`

---

# Utilizado por

- toda la Ontología;
- `40_metodologia/`

---

# Declaración

Las Relaciones constituyen la estructura del Modelo.

Las entidades establecen qué existe.

Las Relaciones establecen cómo permanece conectado.
