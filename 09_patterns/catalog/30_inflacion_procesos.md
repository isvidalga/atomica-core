# Inflación de Procesos

> **ID:** 30 | **Categoría:** Operaciones y proveedores | **Severidad:** Medio

---

## Definición

Cada problema se resuelve con un nuevo proceso. La organización asfixia bajo una capa creciente de procedimientos, aprobaciones y controles que ralentizan la acción sin mejorar los resultados. Los procesos se acumulan; nunca se eliminan.

---

## Por qué importa

La inflación de procesos relentiza la organización, aumenta los costos de transacción, desmotiva a los equipos y genera burocracia por burocracia. Cada nuevo proceso añade fricción; la eliminación de procesos obsoletos nunca ocurre. La organización se vuelve progresivamente más lenta y menos adaptable.

---

## Señales de activación

- Número creciente de procesos documentados sin revisión de obsolescencia
- Tiempos de aprobación que crecen año a año
- Equipos que ignoran procesos porque son impracticables
- Cultura de 'hay que seguir el proceso' sin cuestionar su utilidad
- Procesos que se solapan o contradicen entre sí

---

## Datos necesarios

- Procesos documentados con fechas de creación
- Problemas que cada proceso intenta resolver
- Tiempos de ciclo por proceso
- Tasa de cumplimiento real de procesos
- Procesos eliminados (o ausencia de ellos)

---

## Método de detección

Calcular la tasa de creación de procesos vs. tasa de eliminación. Si solo crece, hay inflación. También medir la complejidad del ecosistema de procesos: número de pasos promedio, número de aprobaciones requeridas, tiempo de ciclo. Si todas las métricas crecen, hay inflación sistémica.

---

## Nivel de severidad

**Medio**

---

## Relación con otros patrones

- Ritmo de Reuniones vs. Ritmo de Decisiones (16): los procesos generan reuniones
- Patrón de Escalada de Requisitos (38): cada proceso crece en alcance
- Inflación de Reuniones de Sincronización (45): los procesos requieren alineación
- Déficit de Delegación Reversible (21): los procesos centralizan control

---

## Posibles intervenciones

- Implementar revisión anual de obsolescencia de procesos
- Establecer 'presupuesto de procesos': máximo N procesos activos
- Simplificar o eliminar un proceso antes de aprobar uno nuevo
- Medir y publicar el costo de cumplimiento de procesos
- Empoderar equipos para ignorar procesos obsoletos con justificación

---

## Condición de remisión

La tasa de eliminación de procesos iguala o supera la tasa de creación, el tiempo de ciclo promedio se estabiliza o decrece, y la tasa de cumplimiento real supera el 80% durante al menos 12 meses.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
