# Dependencia de Personas

> **ID:** 07 | **Categoría:** Personas y cultura | **Severidad:** Crítico

---

## Definición

La organización funciona como red de individuos, no como sistema. Procesos críticos, conocimientos estratégicos y relaciones clave están concentrados en pocas personas. La salida de cualquiera de ellas colapsa componentes del sistema.

---

## Por qué importa

La dependencia de personas convierte la organización en una estructura frágil. Las ausencias, rotaciones o salidas generan crisis predecibles. El conocimiento tácito no se transfiere, los procesos no se estandarizan y la organización no escala más allá de la capacidad individual de sus nodos críticos.

---

## Señales de activación

- Procesos que se detienen cuando una persona específica está ausente
- Reuniones donde solo una persona puede responder ciertas preguntas
- Retrasos recurrentes vinculados a la disponibilidad de individuos clave
- Dificultad para delegar tareas de ciertos roles
- Pánico organizacional ante anuncios de salida de empleados específicos

---

## Datos necesarios

- Red de comunicación (quién habla con quién, frecuencia)
- Asignación de decisiones por persona
- Resultados de procesos cuando nodos clave están ausentes
- Mapa de conocimientos tácitos
- Historial de incidentes vinculados a ausencias individuales

---

## Método de detección

Medir centralidad de nodos en la red de comunicación y decisión utilizando métricas de teoría de grafos (betweenness centrality, degree centrality). Simular eliminación de nodos: si la eliminación de un nodo desconecta componentes o reduce drásticamente el flujo de información, hay dependencia crítica. Umbral: si >30% de procesos críticos dependen de un solo individuo.

---

## Nivel de severidad

**Crítico**

---

## Relación con otros patrones

- Patrón de 'Héroe de Turno' (40): los mismos individuos resuelven crisis
- Silos de Información (15): la información no fluye, se acumula en personas
- Invisibilidad del Trabajo Invisible (24): el trabajo crítico no se documenta
- Fuga de Talento Predecible (12): las salidas generan colapsos

---

## Posibles intervenciones

- Documentar procesos críticos con redundancia de conocimiento
- Implementar programa de shadowing para roles críticos
- Rotar responsabilidades estratégicas periódicamente
- Crear equipos de decisión en lugar de decisores individuales
- Establecer planes de contingencia por persona clave

---

## Condición de remisión

Ningún proceso crítico depende de un único individuo, la centralidad de todos los nodos en la red de decisión está por debajo del umbral crítico, y las simulaciones de eliminación de nodos no generan desconexión de componentes durante al menos 12 meses.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
