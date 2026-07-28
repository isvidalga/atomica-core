# ORG-STATE · Estado

| Campo | Valor |
|--------|-------|
| Identificador | ORG-STATE |
| Capa | Ontology |
| Estado | RC-1 |
| Versión | 0.1 |

---

# Propósito

El Estado representa el conocimiento vigente que el Modelo mantiene sobre un referente organizacional en un instante determinado.

No describe la organización en sí.

Describe la representación que el Modelo ha construido a partir de las observaciones y evidencias disponibles.

---

# Definición

Un Estado es una representación coherente, temporal y revisable del referente organizacional.

Todo Estado depende de las observaciones y evidencias disponibles en el momento de su construcción.

Todo Estado podrá modificarse cuando aparezcan nuevas observaciones o nuevas evidencias.

---

# Naturaleza

El Estado:

- pertenece al Modelo;
- representa conocimiento;
- es temporal;
- es revisable;
- posee incertidumbre;
- nunca constituye una certificación de la realidad.

El Estado no es un hecho.

El Estado es la mejor representación disponible según el conocimiento actual del Modelo.

---

# Composición

Todo Estado podrá integrar, entre otros:

- observaciones;
- evidencias;
- capacidades;
- fragilidades;
- hipótesis;
- nivel de confianza;
- principios sistémicos relacionados.

La composición concreta pertenece a la metodología y no forma parte de esta Ontología.

---

# Vigencia

Para cada referente organizacional existirá exactamente un Estado vigente.

Los Estados anteriores permanecerán como Estados históricos.

Nunca serán modificados retrospectivamente.

---

# Evolución

Un Estado puede ser sustituido por otro Estado.

La sustitución nunca elimina el Estado anterior.

La sucesión ordenada de Estados constituye la Trayectoria.

---

# Relaciones

Todo Estado:

- pertenece exactamente a un referente organizacional;
- puede estar respaldado por múltiples observaciones;
- puede estar respaldado por múltiples evidencias;
- participa en exactamente una Trayectoria;
- puede originar nuevas hipótesis.

---

# Exclusiones

El Estado nunca contiene:

- decisiones;
- recomendaciones;
- intervenciones;
- objetivos;
- planes de acción;
- juicios normativos.

---

# Invariantes

**I-1** Todo Estado pertenece exactamente a un referente organizacional.

**I-2** Todo Estado posee un instante de creación.

**I-3** Todo Estado conserva su contenido histórico una vez sustituido.

**I-4** Todo Estado podrá ser revisado únicamente mediante la creación de un nuevo Estado.

**I-5** Ningún Estado certifica la realidad.

**I-6** Todo Estado expresa el conocimiento vigente del Modelo en el momento de su construcción.

**I-7** Ninguna Representación existe fuera de un Estado.

---

# Dependencias

- core/axiomas.md

---

# Utilizado por

- trayectoria.md
- representacion.md
- memoria.md
- hipotesis.md
- observatorio.md

---

# Consecuencias arquitectónicas

1. El Estado es la unidad fundamental del conocimiento del Modelo.

2. Toda evolución organizacional se expresa como una sucesión de Estados.

3. La confianza modifica la credibilidad del Estado, nunca su existencia.

4. El Estado puede ser reemplazado, pero nunca sobrescrito.

5. Toda representación visible en el instrumento procede del Estado vigente.
