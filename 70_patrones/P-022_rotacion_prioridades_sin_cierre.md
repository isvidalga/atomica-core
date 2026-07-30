# Rotación de Prioridades Sin Cierre

> **ID:** 19 | **Categoría:** Estrategia y adaptación | **Severidad:** Alto

---

## Definición

Proyectos que se abandonan sin conclusión, dejando deuda invisible. Las prioridades cambian antes de que las iniciativas anteriores se cierren formalmente, generando un creciente inventario de proyectos zombis que consumen recursos residualmente.

---

## Por qué importa

La rotación sin cierre genera deuda organizacional invisible. Recursos quedan atados en proyectos sin dueño, sin objetivo claro y sin fecha de finalización. Los equipos pierden credibilidad en las nuevas prioridades ('esto también pasará'). El costo de oportunidad de recursos inmovilizados es sustancial.

---

## Señales de activación

- Lista creciente de proyectos 'en pausa' o 'a retomar'
- Nuevas prioridades que no explicitan qué se deja de hacer
- Recursos asignados a proyectos que nadie revisa
- Equipos que trabajan en múltiples prioridades simultáneas sin claridad
- Presupuestos que incluyen partidas para proyectos olvidados

---

## Datos necesarios

- Lista completa de iniciativas con estado
- Fechas de inicio y última actualización
- Recursos consumidos por iniciativa
- Registro de cambios de prioridad
- Decisiones de cierre formal (o ausencia)

---

## Método de detección

Medir la tasa de 'proyectos zombie': iniciados, no terminados, no cancelados formalmente. Calcular el ratio 'proyectos activos' / 'proyectos cerrados formalmente'. Si el ratio crece sistemáticamente, hay acumulación. También medir el tiempo promedio desde última actualización hasta cierre.

---

## Nivel de severidad

**Alto**

---

## Relación con otros patrones

- Cambios Demasiado Rápidos (5): la oscilación genera proyectos abandonados
- Déficit de Cierre (43): no se cierran formalmente los proyectos
- Acumulación de 'Debería' (33): los compromisos no ejecutados se acumulan
- Déficit de Atención Estratégica (18): la falta de foco genera dispersión

---

## Posibles intervenciones

- Exigir cierre formal de proyectos antes de aprobar nuevos
- Implementar 'presupuesto de prioridades': máximo N proyectos activos
- Crear revisión trimestral de inventario de proyectos con decisión de cierre/continuar
- Asignar 'dueño de cierre' para cada proyecto
- Comunicar explícitamente qué se deja de hacer al cambiar prioridades

---

## Condición de remisión

El ratio proyectos activos/cerrados se estabiliza o decrece, no existen proyectos sin actualización en los últimos 6 meses, y toda nueva prioridad explicita qué proyecto anterior se cierra o pausa.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
