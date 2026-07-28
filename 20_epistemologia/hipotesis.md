# ORG-HYPOTHESIS · Hipótesis

| Campo | Valor |
|--------|-------|
| Identificador | ORG-HYPOTHESIS |
| Capa | Ontology |
| Estado | RC-1 |
| Versión | 0.1 |

---

# Propósito

La Hipótesis representa una explicación provisional que el Modelo formula para interpretar un Estado.

No constituye un hecho.

No constituye una conclusión definitiva.

Su función es orientar la interpretación del conocimiento disponible.

---

# Definición

Una Hipótesis es una proposición inferida por el Modelo a partir de un Estado y respaldada por las observaciones y evidencias disponibles.

Toda Hipótesis permanece abierta a revisión.

---

# Naturaleza

La Hipótesis:

- pertenece al Modelo;
- es inferencial;
- es revisable;
- posee incertidumbre;
- depende de la evidencia disponible;
- nunca constituye una verdad demostrada.

---

# Generación

Toda Hipótesis:

- deriva de un Estado;
- utiliza las observaciones disponibles;
- utiliza las evidencias aceptadas;
- puede desaparecer si un nuevo Estado deja de sostenerla.

La aparición de nueva evidencia nunca modifica una Hipótesis existente.

Genera una nueva Hipótesis asociada a un nuevo Estado.

---

# Relaciones

Toda Hipótesis:

- pertenece exactamente a un Estado;
- puede estar respaldada por múltiples Evidencias;
- puede relacionarse con múltiples Fragilidades;
- puede relacionarse con múltiples Capacidades.

---

# Exclusiones

La Hipótesis nunca contiene:

- decisiones;
- recomendaciones;
- intervenciones;
- objetivos;
- planes de acción;
- certificaciones.

---

# Invariantes

**I-1** Toda Hipótesis pertenece exactamente a un Estado.

**I-2** Ninguna Hipótesis existe sin evidencia asociada.

**I-3** Ninguna Hipótesis puede modificar un Estado.

**I-4** Toda Hipótesis puede ser refutada.

**I-5** Una Hipótesis histórica nunca se modifica.

**I-6** La sustitución de una Hipótesis requiere un nuevo Estado.

---

# Dependencias

- core/axiomas.md
- ontology/estado.md
- ontology/evidencia.md

---

# Utilizado por

- observatorio.md
- cronica.md
- intervencion.md

---

# Consecuencias arquitectónicas

1. El Modelo propone hipótesis; nunca afirma hechos.

2. Toda Hipótesis debe poder justificarse mediante Evidencias.

3. El incremento de evidencia aumenta o disminuye la plausibilidad de una Hipótesis, pero nunca la convierte en una verdad absoluta.

4. El usuario siempre podrá conocer qué Evidencias respaldan una Hipótesis concreta.
