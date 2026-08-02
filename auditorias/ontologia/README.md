# Auditorías · Ontología

Estado: EVIDENCIA

Ubicación:

```
auditorias/ontologia/
```

---

# Objeto

Este directorio conserva las auditorías realizadas sobre la capa de Ontología de ATÓMICA.

Las auditorías documentan el estado del repositorio en un commit determinado.

No modifican la metodología.

No redefinen conceptos.

No sustituyen documentos canónicos.

Cada auditoría constituye evidencia histórica del estado del repositorio en el momento de su ejecución.

---

# Alcance

Las auditorías de Ontología verifican exclusivamente:

- coherencia documental;
- consistencia ontológica;
- relaciones entre documentos;
- dependencias;
- contradicciones;
- cierre del grafo;
- trazabilidad.

No realizan propuestas de diseño.

No introducen nuevos conceptos.

No corrigen documentos.

Las correcciones deberán realizarse mediante commits posteriores del repositorio.

---

# Auditorías

| ID | Estado | Determinación | Ámbito |
|----|---------|---------------|---------|
| R-06 | Cerrada | B | Mecanismo de definición oficial |
| R-07 | Cerrada | B | Ciclo Estado ⇄ Representación |
| R-08 | Cerrada | C | Anclaje y conexión del grafo ontológico |
| R-09 | Cerrada | B | Dependencia entre Canon y Ontología |
| R-10 | Cerrada | C | Cierre del grafo ontológico |

---

# Orden recomendado

Las auditorías forman una secuencia.

Se recomienda el siguiente orden de lectura:

1. R-06
2. R-07
3. R-08
4. R-09
5. R-10

Las auditorías posteriores pueden:

- confirmar;
- modificar;
- contextualizar;
- sustituir parcialmente;

las determinaciones anteriores.

La interpretación vigente será siempre la de la auditoría más reciente que trate la misma cuestión.

---

# Referencia auditada

Serie correspondiente a:

```
tag v1.0
commit fe6dc5c
```

Cada documento identifica explícitamente el commit auditado.

No debe asumirse que una auditoría sigue siendo válida para versiones posteriores del repositorio.

---

# Regla de conservación

Las auditorías son inmutables.

Una auditoría publicada no debe editarse.

Si aparece nueva evidencia o cambia el repositorio, deberá emitirse una nueva auditoría que:

- confirme;
- amplíe;
- modifique; o
- sustituya

las conclusiones anteriores, preservando siempre el historial documental.
