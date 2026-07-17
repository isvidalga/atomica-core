# Ritmo de Contratación vs. Ritmo de Necesidad

> **ID:** 26 | **Categoría:** Operaciones y proveedores | **Severidad:** Medio

---

## Definición

Se contrata tarde (generando sobrecarga) o temprano (generando costo ocioso). El ciclo de contratación no está sincronizado con el ciclo real de necesidad de recursos, creando desfases sistemáticos entre oferta y demanda de talento.

---

## Por qué importa

El desajuste entre contratación y necesidad genera costos duales: sobrecarga de equipos existentes (quemadura, errores, rotación) cuando se contrata tarde, y costo ocioso (baja productividad, desmotivación) cuando se contrata temprano. La organización oscila entre crisis de capacidad y crisis de utilización.

---

## Señales de activación

- Equipos que reportan estar sobrecargados mientras se abren vacantes
- Nuevas contrataciones que pasan semanas sin trabajo asignado
- Ciclos de 'contratamos de emergencia' seguidos de 'ahora tenemos exceso'
- Presupuestos de headcount que no reflejan la carga de trabajo real
- Rotación por sobrecarga seguida de despidos por exceso de personal

---

## Datos necesarios

- Headcount histórico con fechas
- Carga de trabajo medida (tickets, proyectos, horas)
- Fechas de apertura de vacantes y fechas de contratación
- Tiempo de onboarding hasta productividad plena
- Métricas de utilización y sobrecarga

---

## Método de detección

Correlar headcount con carga de trabajo con desfase temporal. Encontrar el lag que maximiza la correlación. Si el lag óptimo es significativamente diferente de cero, hay desajuste. También medir la varianza de utilización: alta varianza indica oscilación entre sobrecarga y ociosidad.

---

## Nivel de severidad

**Medio**

---

## Relación con otros patrones

- Ciclos Estacionales Ignorados (9): los ciclos de necesidad no se anticipan
- Fuga de Talento Predecible (12): la sobrecarga acelera la salida
- Déficit de Atención Estratégica (18): la planificación de recursos no es prioridad
- Cambios Demasiado Rápidos (5): las prioridades cambian antes de que la contratación se complete

---

## Posibles intervenciones

- Implementar planificación de workforce con horizonte de 12-18 meses
- Crear pipeline de candidatos para roles recurrentes
- Establecer triggers automáticos de contratación basados en carga de trabajo
- Desarrollar capacidad de flexibilidad laboral (freelance, outsourcing)
- Medir y publicar el desfase contratación-necesidad por área

---

## Condición de remisión

El lag óptimo entre contratación y necesidad se reduce por debajo de 30 días, la varianza de utilización se estabiliza en un rango aceptable, y no se registran ciclos de sobrecarga/ocio extremos durante al menos 18 meses.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
