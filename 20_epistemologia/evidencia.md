# ORG-EVIDENCE · Evidencia

| Campo | Valor |
|--------|-------|
| Identificador | ORG-EVIDENCE |
| Capa | Ontology |
| Estado | RC-1 |
| Versión | 0.1 |

---

# Propósito

La Evidencia representa todo elemento verificable que respalda, cuestiona o modifica el conocimiento construido por el Modelo.

La Evidencia nunca constituye conocimiento por sí misma.

Su función es sustentar la construcción y revisión del conocimiento.

---

# Definición

Una Evidencia es un elemento verificable incorporado al Modelo para justificar una Representación, un Estado o una Hipótesis.

Toda Evidencia mantiene su identidad, procedencia e integridad.

---

# Naturaleza

La Evidencia:

- pertenece al Modelo;
- es verificable;
- posee origen conocido;
- posee trazabilidad;
- es persistente;
- puede perder vigencia sin perder existencia.

---

# Composición

Una Evidencia puede corresponder, entre otros, a:

- documentos;
- registros;
- observaciones verificadas;
- indicadores;
- entrevistas;
- respuestas del diagnóstico;
- fuentes externas.

La clasificación concreta pertenece a la metodología.

---

# Incorporación

Toda Evidencia:

- conserva su origen;
- conserva su fecha de incorporación;
- conserva su relación con las Observaciones que la utilizan;
- nunca modifica directamente el conocimiento.

La incorporación de nueva Evidencia únicamente puede producir un nuevo Estado.

---

# Relaciones

Toda Evidencia:

- puede respaldar múltiples Observaciones;
- puede respaldar múltiples Hipótesis;
- puede participar en múltiples Estados;
- pertenece a la Memoria del Modelo.

---

# Exclusiones

La Evidencia nunca contiene:

- interpretaciones;
- conclusiones;
- decisiones;
- recomendaciones;
- intervenciones;
- juicios de valor.

---

# Invariantes

**I-1** Toda Evidencia posee un origen identificable.

**I-2** Toda Evidencia mantiene trazabilidad completa.

**I-3** Ninguna Evidencia modifica directamente un Estado.

**I-4** Toda Evidencia puede dejar de ser vigente sin desaparecer.

**I-5** La eliminación de Evidencia histórica no está permitida.

**I-6** Toda Evidencia permanece asociada a la Memoria del Modelo.

**I-7** Toda Evidencia puede ser reutilizada por futuros Estados sin alterar su contenido.

---

# Dependencias

- core/axiomas.md
- ontology/memoria.md

---

# Utilizado por

- observacion.md
- estado.md
- hipotesis.md
- trayectoria.md

---

# Consecuencias arquitectónicas

1. La Evidencia constituye el único fundamento verificable del conocimiento del Modelo.

2. Ningún Estado puede justificarse sin Evidencia trazable.

3. La incorporación de Evidencia nunca altera retrospectivamente el conocimiento histórico.

4. La pérdida de trazabilidad invalida el uso de la Evidencia dentro del Modelo.

5. Toda auditoría del Modelo puede reconstruirse a partir de las Evidencias conservadas.
