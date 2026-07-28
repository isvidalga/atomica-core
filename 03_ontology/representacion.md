# ORG-REPRESENTATION · Representación

| Campo | Valor |
|--------|-------|
| Identificador | ORG-REPRESENTATION |
| Capa | Ontology |
| Estado | RC-1 |
| Versión | 0.1 |

---

# Propósito

La Representación constituye el modelo interno mediante el cual ATÓMICA expresa el conocimiento construido sobre un referente organizacional.

No constituye la realidad.

No sustituye al referente.

Hace observable el conocimiento disponible para el Modelo.

---

# Definición

Una Representación es la expresión estructurada del conocimiento contenido en un Estado.

Toda Representación deriva exclusivamente del Estado al que pertenece.

No puede existir una Representación sin un Estado.

---

# Naturaleza

La Representación:

- pertenece al Modelo;
- expresa conocimiento;
- es derivada;
- es revisable;
- posee incertidumbre;
- nunca constituye una certificación.

---

# Composición

Una Representación puede integrar, entre otros:

- capacidades;
- fragilidades;
- relaciones;
- principios sistémicos;
- observaciones consolidadas;
- evidencias aceptadas;
- hipótesis vigentes;
- nivel de confianza.

La composición concreta pertenece a la metodología.

No forma parte de esta Ontología.

---

# Generación

Toda Representación se genera a partir de un único Estado.

Una modificación del Estado implica necesariamente una nueva Representación.

Las Representaciones anteriores permanecen asociadas a sus respectivos Estados históricos.

---

# Relaciones

Toda Representación:

- pertenece exactamente a un Estado;
- representa exactamente un referente organizacional;
- puede visualizarse mediante múltiples instrumentos;
- puede originar nuevas hipótesis;
- puede enriquecerse con nueva evidencia únicamente mediante un nuevo Estado.

---

# Exclusiones

La Representación nunca contiene:

- decisiones;
- recomendaciones;
- objetivos;
- planes de acción;
- intervenciones;
- juicios normativos.

---

# Invariantes

**I-1** Toda Representación pertenece exactamente a un Estado.

**I-2** Ningún Estado existe sin al menos una Representación.

**I-3** Una Representación nunca modifica el Estado del que deriva.

**I-4** Una Representación histórica nunca puede alterarse.

**I-5** Toda Representación conserva la incertidumbre propia del Estado que representa.

**I-6** Ninguna Representación certifica la realidad.

---

# Dependencias

- core/axiomas.md
- ontology/estado.md

---

# Utilizado por

- observatorio.md
- cronica.md
- home.md
- diagnostico.md

---

# Consecuencias arquitectónicas

1. El usuario nunca interactúa directamente con el Estado, sino con su Representación.

2. Múltiples interfaces pueden expresar una misma Representación sin alterar su significado.

3. La evolución del conocimiento produce nuevas Representaciones mediante nuevos Estados.

4. La separación entre Estado y Representación permite evolucionar la interfaz sin modificar el Modelo.
