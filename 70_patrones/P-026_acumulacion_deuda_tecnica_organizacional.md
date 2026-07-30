# Acumulación de Deuda Técnica/Organizacional

> **ID:** 23 | **Categoría:** Operaciones y proveedores | **Severidad:** Alto

---

## Definición

Atajos que se pagan con interés compuesto. Decisiones de 'solución rápida' o 'lo arreglamos después' se acumulan generando costos crecientes de mantenimiento, complejidad y fragilidad. La deuda no se paga; se capitaliza.

---

## Por qué importa

La deuda técnica y organizacional relentiza toda innovación futura. Cada nueva iniciativa debe navegar un laberinto de soluciones provisionales que nunca se formalizaron. El costo de cambio crece exponencialmente, hasta que la organización queda atrapada en su propia arquitectura de atajos.

---

## Señales de activación

- Proyectos nuevos que tardan más por la complejidad acumulada
- Sistemas o procesos que nadie entiende completamente
- Cultura de 'no toques eso, podría romperse'
- Costos de mantenimiento que crecen más rápido que los de innovación
- Decisiones documentadas como 'temporal' que persisten años

---

## Datos necesarios

- Decisiones de 'solución rápida' o 'fast path' con fecha
- Costos posteriores de mantenimiento por dominio
- Complejidad de sistemas/procesos (métricas técnicas)
- Tiempo de implementación de nuevas funcionalidades
- Registro de deuda técnica documentada

---

## Método de detección

Correlar decisiones de 'fast path' con costos crecientes en el mismo dominio. Medir la pendiente de crecimiento de costos de mantenimiento vs. costos de innovación. Si la pendiente de mantenimiento es creciente y supera la de innovación, hay acumulación de deuda. También evaluar la ratio 'nueva funcionalidad' / 'tiempo de implementación'.

---

## Nivel de severidad

**Alto**

---

## Relación con otros patrones

- Rotación de Prioridades Sin Cierre (19): las deudas se dejan sin resolver
- Invisibilidad del Trabajo Invisible (24): la deuda no se reconoce
- Déficit de Cierre (43): los proyectos técnicos no se cierran formalmente
- Cambios Demasiado Rápidos (5): la velocidad genera atajos

---

## Posibles intervenciones

- Reservar capacidad dedicada a reducción de deuda (ej. 20% del tiempo)
- Documentar y priorizar deuda técnica/organizacional visiblemente
- Incluir pago de deuda en planificación de cada nuevo proyecto
- Establecer estándares de calidad mínima no negociables
- Medir y publicar el costo acumulado de la deuda

---

## Condición de remisión

La pendiente de costos de mantenimiento se estabiliza o decrece, el ratio nueva funcionalidad/tiempo de implementación se mantiene estable, y se reserva capacidad sistemática para reducción de deuda durante al menos 18 meses.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
