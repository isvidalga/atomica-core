# Inflación de Métricas

> **ID:** 17 | **Categoría:** Percepción y aprendizaje | **Severidad:** Alto

---

## Definición

Lo que se mide se optimiza; lo que se optimiza se distorsiona. Las métricas históricas muestran discontinuidades que coinciden con cambios de incentivo, revelando que la 'mejora' no se traduce en outcome real sino en manipulación del indicador.

---

## Por qué importa

La inflación de métricas corrompe el sistema de percepción de la organización. Los líderes toman decisiones basadas en datos manipulados. Los equipos invierten energía en 'hacer los números' en lugar de generar valor real. La organización cree que mejora mientras empeora.

---

## Señales de activación

- Mejoras de métrica que no se reflejan en resultados de negocio
- Cambios de comportamiento que optimizan el indicador pero no el objetivo
- Discontinuidades en series temporales que coinciden con cambios de incentivo
- Equipos que 'juegan con las métricas'
- Sorpresa ante resultados de negocio malos a pesar de métricas verdes

---

## Datos necesarios

- Métricas históricas con marca temporal
- Comportamientos reportados asociados a métricas
- Cambios de incentivo y su fecha
- Métricas de outcome real (no proxy)
- Registro de ajustes metodológicos en métricas

---

## Método de detección

Buscar discontinuidades en series de métricas que coincidan con cambios de incentivo. Comparar la evolución de la métrica proxy con la evolución de la métrica de outcome real. Si la proxy mejora mientras el outcome empeora o no cambia, hay inflación. También buscar comportamientos reportados de optimización del indicador.

---

## Nivel de severidad

**Alto**

---

## Relación con otros patrones

- Patrón de Escapismo Estratégico (32): se cambia de métrica cuando la actual es mala
- Optimización Local (48): cada área optimiza su métrica dañando el global
- Ilusión de Control (11): las métricas infladas confirman la ilusión
- Inflación de Procesos (30): se crean procesos para 'mejorar' métricas

---

## Posibles intervenciones

- Diseñar métricas que sean difíciles de gamificar
- Vincular incentivos a métricas de outcome, no de actividad
- Auditar métricas periódicamente comparando con resultados reales
- Implementar métricas de contrapeso que revelen distorsiones
- Capacitar en ética de datos y consecuencias de la gamificación

---

## Condición de remisión

La correlación entre métricas proxy y métricas de outcome real se mantiene fuerte (r>0.7) durante al menos 18 meses, y no se detectan discontinuidades atribuibles a cambios de incentivo.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
