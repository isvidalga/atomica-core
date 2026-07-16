# Ontología de ATÓMICA

**Versión:** 1.0  
**Estado:** Normativo  
**Última actualización:** 2026-07-13

---

# Propósito

Este documento define la ontología oficial de ATÓMICA.

Su finalidad es establecer el conjunto de entidades, relaciones y restricciones que conforman el universo conceptual del sistema.

La ontología constituye la única fuente autorizada para definir los conceptos utilizados por la metodología.

Ningún documento posterior podrá redefinir una entidad aquí descrita.

---

# Alcance

La ontología no describe procesos.

No describe algoritmos.

No describe cálculos.

No describe implementaciones.

Describe únicamente qué entidades existen, cómo se relacionan y qué restricciones gobiernan dichas relaciones.

---

# Principios ontológicos

La ontología de ATÓMICA se rige por los siguientes principios:

- Cada entidad representa un único concepto.
- Cada concepto posee una única definición oficial.
- Las relaciones poseen significado explícito.
- Ninguna entidad puede definirse mediante sí misma.
- Las entidades representan el dominio organizacional, no la implementación técnica.
- Los resultados derivados (por ejemplo, índices o puntuaciones) no constituyen entidades ontológicas.

---

# Entidades fundamentales

## Organización

Unidad de análisis sobre la que ATÓMICA construye conocimiento.

La organización constituye el objeto observado.

No forma parte del modelo; es aquello que el modelo representa.

---

## Diagnóstico

Proceso estructurado mediante el cual se obtienen declaraciones acerca de una organización.

El diagnóstico genera información de entrada para el modelo.

No produce conclusiones por sí mismo.

---

## Declaración

Información proporcionada durante un diagnóstico.

Una declaración representa lo que una organización afirma acerca de sí misma.

Las declaraciones constituyen observaciones reportadas.

No representan hechos verificados.

---

## Modelo organizacional

Representación estructurada del conocimiento disponible acerca de una organización.

El modelo organizacional está compuesto por hipótesis y sus relaciones.

No constituye una copia de la realidad.

Constituye una representación imperfecta y revisable.

---

## Hipótesis

Proposición inferida acerca de una organización.

Toda hipótesis expresa una interpretación del conocimiento disponible.

Las hipótesis pueden aumentar o disminuir su nivel de confianza conforme aparecen nuevas evidencias.

Nunca se consideran definitivamente verdaderas.

---

## Evidencia

Elemento que aporta información adicional para evaluar la plausibilidad de una o varias hipótesis.

La evidencia no modifica directamente la realidad representada.

Únicamente modifica el grado de confianza asociado a determinadas hipótesis.

---

## Confianza

Propiedad asociada a una hipótesis.

Representa el grado de respaldo disponible según las declaraciones y evidencias observadas.

La confianza nunca expresa certeza.

Expresa únicamente la robustez del conocimiento disponible.

---

## Dimensión

Agrupación conceptual utilizada para organizar el análisis organizacional.

Las dimensiones permiten estructurar capacidades, prácticas y fragilidades sin alterar su naturaleza.

No representan componentes independientes de la organización.

---

## Capacidad

Propiedad organizacional que incrementa la habilidad del sistema para responder, adaptarse o evolucionar frente a cambios internos o externos.

Las capacidades representan potencial organizacional.

No constituyen acciones.

No constituyen resultados.

---

## Fragilidad

Condición sistémica que incrementa la probabilidad de degradación significativa del funcionamiento organizacional ante perturbaciones.

Una fragilidad puede coexistir con capacidades elevadas.

La ausencia de capacidad no implica necesariamente fragilidad.

---

## Patrón

Configuración recurrente de relaciones entre entidades del modelo organizacional que posee significado metodológico.

Un patrón describe una estructura observable.

No constituye por sí mismo una fragilidad.

---

## Práctica

Actividad, mecanismo o comportamiento organizacional susceptible de desarrollarse de manera intencionada.

Las prácticas contribuyen al desarrollo o mantenimiento de capacidades.

No constituyen capacidades en sí mismas.

---

# Relaciones fundamentales

Las siguientes relaciones forman parte del núcleo ontológico de ATÓMICA.

## El diagnóstico obtiene declaraciones.

```
Diagnóstico
        │
        ▼
Declaraciones
```

---

## Las declaraciones alimentan el modelo.

```
Declaraciones
        │
        ▼
Modelo organizacional
```

---

## El modelo contiene hipótesis.

```
Modelo
     │
     ▼
Hipótesis
```

---

## Las hipótesis poseen confianza.

```
Hipótesis
      │
      ▼
Confianza
```

---

## Las evidencias modifican la confianza.

```
Evidencia
      │
      ▼
Confianza
```

No modifican directamente las hipótesis.

---

## Las prácticas desarrollan capacidades.

```
Prácticas
      │
      ▼
Capacidades
```

---

## Las capacidades contribuyen a reducir fragilidad.

La relación no es determinista.

Una capacidad elevada no garantiza ausencia de fragilidad.

---

## Los patrones describen configuraciones.

Los patrones permiten interpretar relaciones entre capacidades, fragilidades, declaraciones e hipótesis.

No representan conclusiones.

---

# Restricciones ontológicas

Para preservar la coherencia metodológica, se establecen las siguientes restricciones.

## R1

Una organización nunca es equivalente a su modelo organizacional.

---

## R2

Toda hipótesis pertenece exactamente a un modelo organizacional.

---

## R3

Toda confianza está asociada a una hipótesis.

No puede existir de manera independiente.

---

## R4

Una evidencia puede respaldar múltiples hipótesis.

---

## R5

Una hipótesis puede estar respaldada por múltiples evidencias.

---

## R6

Las declaraciones no generan automáticamente hipótesis.

Las hipótesis requieren un proceso de inferencia.

---

## R7

Una práctica nunca constituye una capacidad.

---

## R8

Una fragilidad nunca se define como ausencia de capacidad.

---

## R9

Un patrón nunca constituye evidencia.

---

## R10

Los índices, puntuaciones o clasificaciones no forman parte de la ontología.

Son resultados derivados de la metodología.

---

# Entidades explícitamente excluidas

Los siguientes elementos no pertenecen a la ontología de ATÓMICA:

- IFO
- puntuaciones
- porcentajes
- algoritmos
- funciones SQL
- bases de datos
- interfaces
- informes
- usuarios
- software
- tecnologías de implementación

Todos ellos pertenecen a niveles distintos de la arquitectura metodológica o técnica.

---

# Evolución de la ontología

La incorporación de nuevas entidades requerirá:

1. una definición formal;
2. la identificación de sus relaciones;
3. la definición de sus restricciones;
4. la evaluación de su impacto sobre el resto del corpus;
5. una decisión metodológica versionada.

La estabilidad de la ontología prevalece sobre la incorporación de nuevos conceptos.
