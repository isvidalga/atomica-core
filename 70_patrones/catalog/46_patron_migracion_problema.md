# Patrón de 'Migración de Problema'

> **ID:** 46 | **Categoría:** Operaciones y proveedores | **Severidad:** Medio

---

## Definición

Un problema se resuelve moviéndolo de departamento, no eliminándolo. Los tickets, incidencias o responsabilidades rebotan entre áreas sin que ninguna asuma ownership real, generando apariencia de resolución mientras el problema persiste.

---

## Por qué importa

La migración de problema es una forma de evasión institucionalizada. El problema no se resuelve; se desplaza. Cada rebote consume recursos, genera frustración y deteriora relaciones interdepartamentales. La organización gasta energía en mover problemas en lugar de resolverlos, mientras los clientes o stakeholders sufren las consecuencias.

---

## Señales de activación

- Tickets que pasan por 3+ departamentos antes de resolverse
- Cultura de 'no es de mi área' ante problemas
- Problemas recurrentes que reaparecen en diferentes departamentos
- Clientes que reportan haber sido 'pasados de mano en mano'
- Ausencia de métricas de resolución de primer contacto

---

## Datos necesarios

- Tickets/problemas con historial de asignaciones
- Departamentos por los que pasa cada problema
- Tiempo de resolución vs. tiempo de migración
- Resoluciones de primer contacto
- Satisfacción del usuario/cliente con resolución

---

## Método de detección

Medir la cantidad de reasignaciones antes de cierre de cada ticket/problema. Si >3 reasignaciones es el patrón habitual, hay migración. También medir el ratio 'tiempo de migración' / 'tiempo de resolución'. Si la migración consume más tiempo que la resolución, el problema está siendo movido, no resuelto.

---

## Nivel de severidad

**Medio**

---

## Relación con otros patrones

- Silos de Información (15): los silos generan migración de problemas
- Optimización Local (48): cada área empuja el problema fuera de su métrica
- Acumulación de Deuda de Comunicación (49): la falta de información genera rebotes
- Invisibilidad del Trabajo Invisible (24): nadie asume ownership del problema

---

## Posibles intervenciones

- Implementar 'ownership end-to-end' para problemas: una persona responsable hasta cierre
- Crear métrica de resolución de primer contacto
- Establecer SLA de reasignación máxima (ej. 1 rebote)
- Capacitar en resolución de problemas fuera de especialidad
- Medir y publicar la tasa de migración por departamento

---

## Condición de remisión

El promedio de reasignaciones por problema desciende por debajo de 1.5, el ratio tiempo de migración/resolución desciende por debajo de 0.3, y la resolución de primer contacto supera el 70% durante al menos 12 meses.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
