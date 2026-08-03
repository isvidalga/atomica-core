# Representación

Estado: CANÓNICO

Versión: 2.0.0

Ubicación:

30_ontologia/representacion.md

---

# Propósito

Definir el concepto ontológico de Representación.

La Representación constituye la expresión formal mediante la cual un Estado organiza el conocimiento admitido sobre una Organización.

Toda Representación pertenece exactamente a un Estado.

---

# Definición

Una Representación es la estructura formal asociada a un Estado.

Su función consiste exclusivamente en organizar el conocimiento admitido por el Modelo.

Nunca modifica el referente observado.

Nunca constituye el referente.

---

# Naturaleza

Toda Representación:

- pertenece al Modelo;
- pertenece exactamente a un Estado;
- referencia indirectamente una Identidad;
- es inmutable;
- es persistente.

La Representación organiza conocimiento.

No produce conocimiento.

---

# Propiedades

Toda Representación posee:

- un identificador único;
- exactamente un Estado;
- una estructura formal del conocimiento admitido;
- trazabilidad completa hacia los elementos que la sustentan.

---

# Formación

Toda Representación se constituye simultáneamente con el Estado al que pertenece.

Toda modificación del conocimiento admitido requiere la creación de:

- una nueva Representación;
- un nuevo Estado.

Nunca la modificación de una Representación existente.

---

# Persistencia

Toda Representación permanece disponible como parte del historial del Modelo.

La sustitución por una nueva Representación nunca elimina la anterior.

---

# Relaciones

Toda Representación:

- pertenece exactamente a un Estado;
- referencia indirectamente una Identidad mediante dicho Estado;
- forma parte de exactamente una Trayectoria.

Todo Estado posee exactamente una Representación.

---

# Restricciones

## RP-001

Toda Representación pertenece exactamente a un Estado.

---

## RP-002

Una Representación nunca existe sin Estado.

---

## RP-003

Toda Representación es inmutable.

---

## RP-004

Toda modificación genera una nueva Representación.

---

## RP-005

Toda Representación conserva íntegramente su trazabilidad.

---

## RP-006

Una Representación nunca modifica la Organización representada.

---

# Exclusiones

Una Representación nunca contiene:

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
- `30_ontologia/identidad.md`
- `30_ontologia/estado.md`

---

# Utilizado por

- `40_metodologia/`

---

# Declaración

La Representación constituye la expresión formal del conocimiento admitido por el Modelo para un Estado determinado.

Toda evolución del conocimiento implica una nueva Representación asociada a un nuevo Estado.

Ninguna Representación previamente constituida puede modificarse.
