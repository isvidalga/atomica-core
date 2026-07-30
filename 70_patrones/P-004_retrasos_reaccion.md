# Retrasos de Reacción

> **ID:** 01 | **Categoría:** Percepción y aprendizaje | **Severidad:** Alto

---

## Definición

La empresa siempre responde tarde a señales externas. El daño se acumula mientras el sistema percibe, pero no actúa. Existe un delta sistemático entre la aparición de una señal relevante y la respuesta organizacional, que no es aleatorio sino estructural.

---

## Por qué importa

Los retrasos de reacción convierten problemas manejables en crisis. Cada día de inacción amplifica el costo de corrección y erosiona la confianza de stakeholders. La organización opera en modo reactivo permanente, gastando recursos en extinción de incendios que podrían haberse prevenido.

---

## Señales de activación

- La misma queja de cliente aparece múltiples veces antes de generar acción
- Métricas de alerta se mantienen en rojo durante períodos prolongados sin intervención
- Los equipos expresan frustración por 'haberlo visto venir'
- Las acciones correctivas siempre llegan después de que el daño ya es visible externamente
- Existe un patrón de 'sorpresa' ante eventos predecibles

---

## Datos necesarios

- Fechas de señal externa (queja, métrica, alerta, noticia de sector)
- Fechas de acción organizacional asociada
- Registro de decisiones de escalamiento
- Logs de sistemas de monitoreo
- Corpus de comunicaciones internas sobre el tema

---

## Método de detección

Medir el delta entre 'señal visible' y 'respuesta registrada' en múltiples instancias a lo largo del tiempo. Construir una distribución de tiempos de reacción. Si la distribución muestra un sesgo consistente (siempre >X días) o cola larga persistente, el retraso es estructural, no aleatorio. Comparar con benchmarks de sector cuando estén disponibles.

---

## Nivel de severidad

**Alto**

---

## Relación con otros patrones

- Aprendizaje Organizacional Ausente (10): sin mecanismo de transferencia, los retrasos se perpetúan
- Déficit de Atención Estratégica (18): la operativa consume el tiempo de dirección
- Estabilidad Excesiva (6): la rigidez amplifica el retraso
- Asimetría de Información Vertical (20): la señal no llega a quien puede actuar

---

## Posibles intervenciones

- Establecer umbrales de acción automática ante señales predefinidas
- Reducir capas de aprobación para respuestas a señales críticas
- Implementar sistema de alertas tempranas con owners asignados
- Crear ritual de revisión semanal de señales del entorno
- Documentar y analizar cada retraso como caso de aprendizaje

---

## Condición de remisión

El tiempo medio de reacción a señales críticas se reduce consistentemente por debajo del umbral de daño acumulativo, y la distribución de tiempos se acorta sin cola larga persistente durante al menos dos ciclos completos del fenómeno observado.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
