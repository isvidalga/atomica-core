# ORG-TRAJECTORY · Trayectoria

| Campo | Valor |
|--------|-------|
| Identificador | ORG-TRAJECTORY |
| Capa | Ontology |
| Estado | RC-1 |
| Versión | 0.1 |

---

# Propósito

La Trayectoria representa la evolución histórica del conocimiento que el Modelo mantiene sobre un mismo referente organizacional.

No describe el cambio del referente.

Describe el cambio de su representación.

---

# Definición

Una Trayectoria es la sucesión ordenada de Estados pertenecientes a un mismo referente organizacional.

Cada nuevo Estado amplía el conocimiento disponible.

Ningún Estado sustituye retrospectivamente a otro.

---

# Naturaleza

La Trayectoria:

- pertenece al Modelo;
- es histórica;
- es acumulativa;
- es irreversible;
- conserva la secuencia de Estados;
- nunca representa la realidad directamente.

---

# Composición

Toda Trayectoria está formada exclusivamente por Estados.

No contiene observaciones.

No contiene evidencias.

No contiene hipótesis.

Estos elementos pertenecen a cada Estado.

---

# Orden

Los Estados se incorporan según el orden lógico de creación.

La Trayectoria nunca puede alterar dicho orden.

La incorporación de un nuevo Estado siempre ocurre al final de la Trayectoria.

---

# Persistencia

Una Trayectoria nunca elimina Estados.

Toda modificación del conocimiento genera un nuevo Estado.

El histórico permanece íntegro.

---

# Relaciones

Toda Trayectoria:

- pertenece exactamente a un referente organizacional;
- contiene uno o más Estados;
- posee exactamente un Estado vigente;
- puede contener múltiples Estados históricos.

---

# Exclusiones

La Trayectoria nunca contiene:

- decisiones;
- intervenciones;
- recomendaciones;
- objetivos;
- planes de acción;
- indicadores agregados.

---

# Invariantes

**I-1** Toda Trayectoria pertenece exactamente a un referente organizacional.

**I-2** Toda Trayectoria contiene al menos un Estado.

**I-3** Existe exactamente un Estado vigente por Trayectoria.

**I-4** Los Estados históricos nunca pueden modificarse.

**I-5** El orden histórico nunca puede alterarse.

**I-6** Ningún Estado puede pertenecer simultáneamente a dos Trayectorias.

**I-7** La eliminación de una Trayectoria implica la eliminación del acceso al conocimiento histórico, por lo que no está permitida.

---

# Dependencias

- core/axiomas.md
- ontology/estado.md

---

# Utilizado por

- representacion.md
- memoria.md
- observatorio.md

---

# Consecuencias arquitectónicas

1. La evolución organizacional se representa como una sucesión de Estados.

2. Toda comparación temporal se realiza entre Estados de una misma Trayectoria.

3. Ningún algoritmo puede modificar retrospectivamente el conocimiento histórico.

4. El Estado vigente constituye únicamente el último elemento de la Trayectoria.
