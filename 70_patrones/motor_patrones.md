# Motor de Patrones

**Versión:** 1.0  
**Estado:** Canónico  
**Ubicación:** `70_patrones/motor_patrones.md`

---

# Breadcrumb

```
ATÓMICA
└── 70 · Patrones
    └── Motor de Patrones
```

---

# Propósito

Este documento define el funcionamiento del motor de detección de patrones organizacionales de ATÓMICA.

No define patrones concretos.

No define algoritmos de implementación.

Define el modelo metodológico mediante el cual ATÓMICA identifica, mantiene y revisa patrones organizacionales.

Todo patrón del repositorio deberá ser compatible con este documento.

---

# Principio fundamental

ATÓMICA no detecta hechos.

Detecta configuraciones recurrentes suficientemente consistentes como para justificar una hipótesis organizacional.

Un patrón nunca representa una certeza.

Representa una explicación estructural plausible del comportamiento observado.

---

# Entrada del motor

El motor consume exclusivamente conocimiento ya existente dentro del modelo organizacional.

Entre otros:

- observaciones;
- declaraciones;
- capacidades;
- fragilidades;
- hipótesis;
- evidencias;
- relaciones;
- evolución temporal;
- nivel de confianza.

No utiliza información ajena al modelo.

---

# Proceso general

Todo patrón sigue el mismo ciclo metodológico.

```
Observaciones

↓

Modelo organizacional

↓

Hipótesis

↓

Detección de recurrencias

↓

Patrón candidato

↓

Evaluación

↓

Patrón detectado

↓

Confirmación o descarte

↓

Evolución continua
```

---

# Naturaleza de un patrón

Un patrón representa una regularidad organizacional.

No describe un evento.

No describe una incidencia.

No describe un documento.

Describe una estructura que aparece de forma suficientemente recurrente como para justificar una interpretación sistémica.

---

# Criterios de detección

La detección de un patrón requiere la combinación de múltiples elementos.

Entre ellos pueden encontrarse:

- repetición;
- persistencia temporal;
- coherencia estructural;
- relaciones entre capacidades;
- relaciones entre fragilidades;
- consistencia entre observaciones;
- evidencia disponible;
- nivel de confianza.

La existencia de un único indicador nunca constituye un patrón.

---

# Evidencia mínima

Un patrón únicamente podrá proponerse cuando exista información suficiente para sostener la hipótesis correspondiente.

La ausencia de información suficiente impedirá su detección.

No autorizará afirmaciones negativas.

---

# Nivel de confianza

Todo patrón posee un nivel de confianza propio.

Dicho nivel es independiente del IFO.

También es independiente del estado general de la organización.

El nivel de confianza evoluciona conforme aumenta o disminuye la calidad del conocimiento disponible.

---

# Evolución

Un patrón nunca es estático.

Puede:

- aparecer;
- fortalecerse;
- debilitarse;
- transformarse;
- desaparecer.

La desaparición de un patrón no elimina su existencia histórica.

Únicamente modifica el estado actual del modelo organizacional.

---

# Confirmación

La detección automática no implica confirmación.

Un patrón podrá:

- permanecer como hipótesis;
- reforzarse mediante nuevas evidencias;
- ser confirmado;
- ser descartado.

El sistema deberá conservar la trazabilidad completa de dicha evolución.

---

# Relaciones

Un patrón puede relacionarse con:

- varias capacidades;
- varias fragilidades;
- múltiples hipótesis;
- diferentes evidencias;
- distintos momentos temporales.

Estas relaciones forman parte del modelo organizacional y no deben duplicarse dentro de la definición del patrón.

---

# Independencia

Los patrones no dependen de:

- una dimensión concreta del IFO;
- un cuestionario específico;
- una versión determinada del software.

El motor opera sobre el modelo organizacional, independientemente de cómo haya sido construido.

---

# Restricciones

El motor nunca podrá:

- generar afirmaciones categóricas;
- ocultar el nivel de confianza;
- detectar patrones sin trazabilidad;
- utilizar información externa al modelo organizacional;
- mantener patrones incompatibles con la ontología oficial.

---

# Relación con otros documentos

Este documento se complementa con:

- `patrones_organizacionales.md`, que define la naturaleza de los patrones.
- `catalogo_patrones_organizacionales.md`, que mantiene el inventario oficial.
- `especificacion_patron.md`, que define la estructura de cada patrón individual.
- `deteccion_patrones.md`, que especifica el proceso metodológico de detección.
- `ciclo_de_vida_patron.md`, que describe la evolución de un patrón a lo largo del tiempo.

---

# Conclusión

El motor de patrones constituye el mecanismo metodológico mediante el cual ATÓMICA transforma observaciones aisladas en conocimiento organizacional estructurado.

Su objetivo no consiste en producir diagnósticos automáticos.

Consiste en identificar regularidades suficientemente fundamentadas para apoyar la comprensión sistémica de una organización.
