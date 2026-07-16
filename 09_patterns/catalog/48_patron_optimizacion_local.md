# Patrón de 'Optimización Local'

> **ID:** 48 | **Categoría:** Operaciones y proveedores | **Severidad:** Alto

---

## Definición

Cada parte optimiza su métrica, dañando el sistema global. Los departamentos toman decisiones que mejoran sus indicadores locales mientras empeoran métricas organizacionales agregadas, generando conflictos y resultados netos negativos.

---

## Por qué importa

La optimización local destruye la coherencia del sistema. Cada área gana su batalla mientras la organización pierde la guerra. Los incentivos desalineados generan comportamientos que son racionalmente locales pero irracionalmente globales. La organización se fragmenta en optimizadores individuales que compiten en lugar de cooperar.

---

## Señales de activación

- Departamentos que celebran métricas locales mientras la organización empeora
- Conflictos recurrentes por decisiones que benefician un área y dañan otra
- Incentivos que recompensan comportamientos localmente óptimos pero globalmente dañinos
- Métricas departamentales que mejoran mientras métricas globales declinan
- Cultura de 'mi área cumplió' ante resultados globales malos

---

## Datos necesarios

- Métricas por departamento
- Métrica global de la organización
- Decisiones locales con su impacto departamental y global
- Incentivos por departamento
- Conflictos interdepartamentales con sus causas

---

## Método de detección

Correlar mejoras departamentales con métrica global. Si son inversas (mejora local = empeora global), hay optimización local. También medir la frecuencia de decisiones que generan conflicto interdepartamental: alta frecuencia indica desalineación de incentivos.

---

## Nivel de severidad

**Alto**

---

## Relación con otros patrones

- Silos de Información (15): los silos generan optimización local
- Inflación de Métricas (17): cada área optimiza su métrica proxy
- Migración de Problema (46): cada área empuja el problema fuera
- Asimetría de Información Vertical (20): nadie ve el impacto global

---

## Posibles intervenciones

- Diseñar métricas globales compartidas que trasciendan departamentos
- Alinear incentivos a resultados globales, no solo locales
- Crear comités de decisión con representación de áreas afectadas
- Medir y publicar el impacto global de decisiones locales
- Implementar 'contratos de interfaz' entre departamentos

---

## Condición de remisión

La correlación entre mejoras locales y métrica global se vuelve positiva, los conflictos interdepartamentales por optimización local descienden por debajo del 10% de decisiones, y los incentivos globales representan >30% de la compensación durante al menos 18 meses.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
