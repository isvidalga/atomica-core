# Fuga de Talento Predecible

> **ID:** 12 | **Categoría:** Personas y cultura | **Severidad:** Alto

---

## Definición

Las salidas de empleados siguen un patrón sistemático que nadie nombra explícitamente. Ciertos perfiles, departamentos, managers o momentos temporales concentran salidas de manera predecible, pero la organización no actúa sobre el patrón.

---

## Por qué importa

La fuga predecible representa un costo recurrente de contratación, onboarding y pérdida de conocimiento. Más grave aún, indica problemas estructurales no resueltos (malos managers, falta de desarrollo, cultura tóxica localizada) que la organización elige ignorar.

---

## Señales de activación

- Picos de salida en el mismo período cada año
- Departamentos o managers con tasas de rotación consistentemente altas
- Perfiles de alto potencial que salen tras períodos similares de permanencia
- Encuestas de salida que revelan las mismas razones recurrentemente
- Cultura de 'así es el sector' para justificar rotación

---

## Datos necesarios

- Fechas de contratación, promociones y salidas
- Encuestas de clima y de salida
- Asignación de empleados a departamentos y managers
- Perfiles de empleados (seniority, función, potencial)
- Datos de mercado laboral del sector

---

## Método de detección

Aplicar análisis de supervivencia (Kaplan-Meier) por cohorte, departamento y manager. Identificar curvas de supervivencia significativamente diferentes entre grupos. Buscar picos de salida en momentos predecibles (ej. post-bonificación, post-evaluación). Calcular hazard ratio por manager y departamento.

---

## Nivel de severidad

**Alto**

---

## Relación con otros patrones

- Dependencia de Personas (7): las salidas de talento clave generan colapsos
- Asimetría de Feedback (29): los empleados no pueden expresar lo que los hace salir
- Déficit de Atención Estratégica (18): el talento no es prioridad en la agenda
- Invisibilidad del Trabajo Invisible (24): el valor del talento no se reconoce

---

## Posibles intervenciones

- Implementar análisis predictivo de rotación con alertas tempranas
- Crear planes de retención personalizados para perfiles de alto riesgo
- Intervenir en managers con tasas de rotación anómalas
- Revisar políticas de compensación y desarrollo en puntos críticos del ciclo
- Realizar 'stay interviews' periódicas para identificar riesgos antes de la salida

---

## Condición de remisión

Las curvas de supervivencia se homogeneizan entre departamentos y managers (diferencias no significativas), y no se identifican picos de salida predecibles durante al menos 18 meses consecutivos.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
