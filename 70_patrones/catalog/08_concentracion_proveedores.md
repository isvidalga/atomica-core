# Concentración de Proveedores

> **ID:** 08 | **Categoría:** Operaciones y proveedores | **Severidad:** Alto

---

## Definición

Vulnerabilidad sistémica oculta en la cadena de valor. La organización depende desproporcionadamente de uno o pocos proveedores en categorías críticas, sin diversificación ni planes de contingencia efectivos.

---

## Por qué importa

La concentración de proveedores expone a la organización a riesgos de interrupción, aumento de precios unilateral, pérdida de poder de negociación y vulnerabilidad ante fallos del proveedor. Un solo evento en el proveedor puede propagarse como crisis en toda la organización.

---

## Señales de activación

- Más del 60% de una categoría de gasto con un solo proveedor
- Dificultad para cambiar de proveedor por dependencia técnica
- Aumentos de precio unilaterales aceptados sin alternativa
- Interrupciones de servicio que afectan operaciones críticas
- Negociaciones donde el proveedor tiene ventaja estructural

---

## Datos necesarios

- Historial de contratos por categoría y proveedor
- Facturación por proveedor y categoría
- Dependencias técnicas de servicios
- Términos contractuales y cláusulas de salida
- Registro de incidentes con proveedores

---

## Método de detección

Calcular el índice de concentración HHI (Herfindahl-Hirschman Index) de proveedores por categoría de gasto. HHI >2500 indica concentración alta. Analizar la evolución temporal del índice: una tendencia creciente amplifica el riesgo. Complementar con análisis de criticidad de cada categoría.

---

## Nivel de severidad

**Alto**

---

## Relación con otros patrones

- Concentración de Riesgo en Clientes (27): simetría en la cadena de valor
- Dependencia de Personas (7): la lógica de concentración se replica en proveedores
- Estabilidad Excesiva (6): la inercia impide diversificación
- Déficit de Experimentación (22): no se pruevan alternativas

---

## Posibles intervenciones

- Establecer política de diversificación: máximo 40% por proveedor en categorías críticas
- Desarrollar proveedores alternativos antes de necesitarlos
- Implementar contratos con cláusulas de contingencia
- Crear inventario de buffer para categorías de alto riesgo
- Realizar auditorías de cadena de suministro periódicamente

---

## Condición de remisión

El HHI de todas las categorías críticas está por debajo de 2500, existen proveedores alternativos validados para categorías de alto impacto, y no se registran incidentes de interrupción por concentración durante al menos 18 meses.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
