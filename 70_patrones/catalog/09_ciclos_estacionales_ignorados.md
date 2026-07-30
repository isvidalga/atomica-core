# Ciclos Estacionales Ignorados

> **ID:** 09 | **Categoría:** Percepción y aprendizaje | **Severidad:** Medio

---

## Definición

La empresa se sorprende cada año con patrones predecibles. Ciclos estacionales, recurrentes o periódicos en métricas operativas no generan preparación previa ni adaptación proactiva, a pesar de su regularidad demostrable.

---

## Por qué importa

Ignorar ciclos estacionales genera crisis recurrentes, sobrecarga de recursos en picos, subutilización en valles y costos de oportunidad por no capitalizar patrones predecibles. La organización gasta energía en reaccionar a lo que podría anticipar.

---

## Señales de activación

- La misma situación de estrés operativo se repite cada año en las mismas fechas
- Equipos que expresan 'esto pasa siempre' sin acción preventiva
- Presupuestos que no reflejan variaciones estacionales conocidas
- Contrataciones de emergencia en períodos predecibles de alta demanda
- Inventarios que se agotan o acumulan en ciclos recurrentes

---

## Datos necesarios

- Métricas operativas con marca temporal (mínimo 3 años)
- Eventos recurrentes del negocio (campañas, temporadas, cierres)
- Registro de incidentes con fecha
- Datos de carga de trabajo histórica
- Presupuestos anuales y su ejecución mensual

---

## Método de detección

Aplicar análisis espectral (FFT - Fast Fourier Transform) a series temporales de métricas operativas. Identificar picos de frecuencia que indiquen periodicidad. Cruzar con calendario de eventos organizacionales. Si existen picos recurrentes que no generan preparación previa documentada, el ciclo está siendo ignorado.

---

## Nivel de severidad

**Medio**

---

## Relación con otros patrones

- Retrasos de Reacción (1): se reacciona tarde a lo predecible
- Aprendizaje Organizacional Ausente (10): no se transfiere la experiencia estacional
- Ritmo de Contratación vs. Ritmo de Necesidad (26): se contrata en respuesta, no en anticipación
- Déficit de Memoria de Fallos (39): cada ciclo se vive como si fuera la primera vez

---

## Posibles intervenciones

- Crear calendario operativo que incorpore ciclos conocidos
- Implementar planificación estacional con triggers automáticos
- Documentar lecciones aprendidas de cada ciclo para el siguiente
- Ajustar presupuestos y headcount a patrones estacionales
- Capacitar equipos en reconocimiento y preparación de ciclos

---

## Condición de remisión

Todos los ciclos identificados mediante análisis espectral tienen planes de preparación documentados, y no se registran incidentes atribuibles a sorpresa estacional durante al menos dos ciclos completos de cada patrón.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
