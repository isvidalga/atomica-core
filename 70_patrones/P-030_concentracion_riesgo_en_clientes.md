# Concentración de Riesgo en Clientes

> **ID:** 27 | **Categoría:** Clientes y mercado | **Severidad:** Crítico

---

## Definición

Dependencia desproporcionada de pocos ingresos. Un número reducido de clientes concentra la mayor parte de los ingresos, generando vulnerabilidad sistémica ante la pérdida de cualquiera de ellos.

---

## Por qué importa

La concentración de riesgo en clientes expone a la organización a fluctuaciones extremas de ingresos. La pérdida de un solo cliente puede generar crisis financiera, recortes forzados y desestabilización. La organización no controla su propio destino porque depende de decisiones ajenas.

---

## Señales de activación

- Más del 30% de ingresos con un solo cliente
- Negociaciones donde el cliente tiene ventaja estructural
- Pérdida de un cliente que genera crisis organizacional
- Dificultad para rechazar demandas de clientes grandes
- Cartera de clientes que no crece en diversidad

---

## Datos necesarios

- Ingresos por cliente con evolución temporal
- Contratos y términos por cliente
- Tasa de churn por segmento de cliente
- Costo de adquisición de nuevos clientes
- Pipeline de nuevos clientes

---

## Método de detección

Calcular el HHI (Herfindahl-Hirschman Index) de ingresos por cliente. HHI >2500 indica concentración alta. Analizar la evolución temporal: tendencia creciente amplifica el riesgo. También medir la dependencia de ingresos recurrentes vs. nuevos: alta dependencia de recurrentes con pocos clientes es riesgo máximo.

---

## Nivel de severidad

**Crítico**

---

## Relación con otros patrones

- Concentración de Proveedores (8): simetría de concentración en cadena de valor
- Estabilidad Excesiva (6): la inercia impide diversificación de cartera
- Déficit de Retroalimentación de Cliente (47): se escucha solo al cliente grande
- Ilusión de Control (11): se confunde lealtad de cliente con control propio

---

## Posibles intervenciones

- Establecer límite máximo de ingresos por cliente (ej. 20%)
- Invertir en diversificación de cartera con objetivos explícitos
- Reducir dependencia de clientes grandes mediante estandarización
- Crear productos/servicios que no dependan de clientes específicos
- Implementar alertas tempranas de riesgo de churn en clientes grandes

---

## Condición de remisión

El HHI de ingresos por cliente desciende por debajo de 2500, ningún cliente representa más del 20% de ingresos, y existe pipeline de diversificación activo durante al menos 18 meses.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
