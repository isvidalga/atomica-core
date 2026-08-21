documento: Memoria y Evolución V2
version: 0.1.0
estado: CANDIDATO
capa: Memoria
breadcrumb: atomica-core/atomica-v2/04_memoria/MEMORIA_EVOLUCION_V2.md
fecha_actualizacion: 2026-08-21
---

# MEMORIA Y EVOLUCIÓN V2

## 1. Propósito

La Memoria conserva el conocimiento producido por ATÓMICA a lo largo del tiempo.

La Evolución compara lecturas sucesivas y distingue:

- cambio del Estado;
- cambio de configuración;
- cambio de acoplamiento;
- cambio de evidencia;
- cambio de Confianza;
- cambio de Cobertura;
- cambio epistemológico;
- aparición, persistencia o desaparición de estructuras.

La Memoria no modifica retrospectivamente una lectura.

La Evolución no sustituye al Estado actual.

---

## 2. Principio fundamental

> El Motor evalúa una lectura. La Memoria conserva lecturas. La Evolución compara lecturas.

```text
Observaciones
    ↓
Motor V2
    ↓
Lectura
    ↓
Memoria
    ↓
Comparación
    ↓
Evolución
```

---

## 3. Unidad temporal: Lectura

Una Lectura es la representación del conocimiento disponible en un momento determinado y bajo una versión metodológica determinada.

Debe conservar:

- identificación;
- organización;
- fecha de observación;
- fecha de procesamiento;
- versión metodológica;
- versión de calibración;
- Observaciones;
- Evidencias;
- configuraciones;
- acoplamientos;
- Estado;
- Confianza;
- Cobertura;
- desconocimientos;
- contradicciones;
- trazabilidad.

---

## 4. Inmutabilidad histórica

Una Lectura productiva es inmutable.

Si aparece nueva información, se genera una nueva Lectura.

```text
R001
 ↓
nueva información
 ↓
R002
```

No se modifica silenciosamente R001.

Si existe un error material en R001:

1. se registra;
2. se conserva R001;
3. se crea una corrección o nueva ejecución;
4. se registra el cambio en el Audit Trail.

---

## 5. Versionado metodológico

Cada Lectura debe conservar:

```text
version_metodologia
version_calibracion
```

Una modificación metodológica produce una nueva versión.

Las Lecturas históricas no se reinterpretan silenciosamente.

---

## 6. Reproducibilidad

Una Lectura debe poder reproducirse a partir de:

- Observaciones;
- Evidencias pertinentes;
- versión metodológica;
- versión de calibración;
- parámetros utilizados;
- contexto disponible.

Si una nueva versión del Motor produce otro resultado sobre los mismos datos, eso se registra como Replay.

---

## 7. Memoria de Observaciones

La Memoria conserva para cada Observación:

- contenido estructurado;
- fuente;
- fecha;
- aplicabilidad;
- evidencia;
- confianza;
- contradicciones;
- historial relevante.

Una nueva fuente no sustituye silenciosamente una Observación previa.

Puede:

- confirmarla;
- complementarla;
- contradecirla;
- reducir su vigencia;
- permitir una mejor clasificación.

---

## 8. Vigencia

La antigüedad no convierte automáticamente una Observación en falsa.

```text
antigua ≠ falsa
```

Una Observación puede pasar longitudinalmente a:

- vigente;
- vigencia incierta;
- desactualizada;
- contradicha;
- superada por nueva evidencia.

Los umbrales temporales concretos están PENDIENTES DE VALIDACIÓN.

---

## 9. Configuraciones longitudinales

K01–K10 mantienen sus estados metodológicos de primera lectura:

```text
POTENCIAL
DECLARADA
RELEVANTE
CRÍTICA
CONTRADICTORIA
```

La capa longitudinal puede derivar estados interpretativos como:

```text
EMERGENTE
PERSISTENTE
MEJORANDO
DETERIORANDO
RESUELTA
DESACTUALIZADA
RECLASIFICADA
```

Estos no son nuevos estados del catálogo K.

---

## 10. Emergente

Una configuración puede clasificarse como EMERGENTE cuando no estaba presente/relevante en una lectura anterior y aparece posteriormente bajo las reglas vigentes.

EMERGENTE no significa automáticamente deterioro.

Puede responder a:

- cambio real;
- descubrimiento de una condición existente;
- aumento de cobertura;
- nueva evidencia;
- cambio de contexto.

---

## 11. Persistente

Una configuración puede clasificarse como PERSISTENTE cuando permanece materialmente presente en lecturas sucesivas bajo criterios temporales validados.

La persistencia no se establece por repetir mecánicamente la misma respuesta.

---

## 12. Mejorando

Una configuración puede clasificarse como MEJORANDO cuando existe evidencia suficiente de un cambio estructural favorable entre lecturas.

Ejemplo:

```text
K03 CRÍTICA
    ↓
cambio estructural
    ↓
K03 RELEVANTE
```

La mejora de Confianza no es por sí misma una mejora organizativa.

---

## 13. Deteriorando

Una configuración puede clasificarse como DETERIORANDO cuando existe evidencia temporal suficiente de que una condición material ha empeorado.

La mera aparición de información más negativa no demuestra automáticamente deterioro.

---

## 14. Resuelta

Una configuración puede clasificarse como RESUELTA únicamente cuando:

1. existía anteriormente;
2. se produce un cambio verificable;
3. deja de cumplir las condiciones metodológicas;
4. existe evidencia suficiente;
5. cuando corresponda, se satisface el criterio temporal definido.

La desaparición por falta de información no equivale a resolución.

---

## 15. Desactualizada

Una configuración puede quedar DESACTUALIZADA cuando la información que sustenta su evaluación ha perdido vigencia suficiente y no existe información actual que permita sostenerla con la misma confianza.

DESACTUALIZADA no significa RESUELTA.

---

## 16. Comparación temporal

Para comparar dos Lecturas:

```text
Comparar(R_t1, R_t2)
```

se deben revisar al menos:

- Estado;
- configuraciones;
- acoplamientos;
- intensidad;
- alcance;
- Confianza;
- Cobertura;
- evidencias;
- desconocimientos;
- contradicciones.

---

## 17. Tipos de cambio

El comparador puede identificar:

```text
CAMBIO_ESTRUCTURAL
CAMBIO_EPISTEMICO
CAMBIO_DE_EVIDENCIA
CAMBIO_DE_COBERTURA
CAMBIO_DE_CONFIANZA
CAMBIO_DE_CONTEXTO
CAMBIO_DE_METODOLOGIA
CAMBIO_DE_CALIBRACION
NO_DETERMINADO
```

No todos equivalen a evolución organizativa.

---

## 18. Cambio de Estado frente a cambio de conocimiento

Ejemplo:

```text
R1:
K07 = DESCONOCIDA

R2:
K07 = CRÍTICA
```

No puede afirmarse automáticamente:

> La situación financiera se deterioró.

Puede significar:

> Ahora existe información suficiente para clasificar la situación.

---

## 19. Cambio por Cobertura

Si una lectura tenía cobertura parcial y una posterior permite observar una parte antes desconocida, puede aparecer una configuración que ya existía materialmente antes.

La Memoria debe distinguir:

```text
APARICIÓN REAL
```

de:

```text
APARICIÓN POR DESCUBRIMIENTO
```

Cuando no sea posible distinguirlas:

```text
NO DETERMINADO
```

---

## 20. Confianza longitudinal

Confianza y Estado son independientes.

Ejemplo:

```text
R1:
Estado = C
Confianza = BAJA

R2:
Estado = C
Confianza = ALTA
```

El resultado es:

```text
Estado: sin cambio
Confianza: aumenta
```

---

## 21. Cobertura longitudinal

La Cobertura puede mejorar sin cambiar el Estado.

La cobertura no funciona como multiplicador o penalización de severidad.

---

## 22. Desconocimiento longitudinal

El histórico debe conservar también qué no se sabía.

Ejemplo:

```text
R1:
UNKNOWN → vencimientos financieros

R2:
dato disponible
```

La aparición del dato reduce incertidumbre, pero no demuestra por sí misma un cambio de la organización.

---

## 23. Contradicciones longitudinales

Una contradicción debe conservarse explícitamente hasta su resolución.

No se promedia.

Una resolución posterior no elimina el hecho de que la contradicción existió.

---

## 24. Acoplamientos longitudinales

A01–A06 pueden:

- aparecer;
- persistir;
- desaparecer;
- cambiar de relevancia.

La Memoria nunca crea un nuevo acoplamiento.

Una relación que no existe en el catálogo debe pasar a la Consola Metodológica como hipótesis.

---

## 25. Decisiones del CEO

Las decisiones se registran independientemente del Estado.

Debe conservarse:

- lectura disponible;
- fecha;
- actor;
- decisión;
- justificación declarada;
- configuraciones relacionadas cuando proceda.

ATÓMICA no debe atribuirse la decisión.

---

## 26. Resultado posterior

Cuando exista información posterior, puede registrarse:

```text
Lectura
↓
Decisión
↓
Resultado posterior
```

El resultado posterior puede utilizarse para evaluación metodológica.

No demuestra por sí mismo causalidad ni error del Motor.

---

## 27. Error de decisión frente a error metodológico

Un resultado negativo posterior puede deberse a:

- decisión incorrecta;
- información no disponible;
- evento exógeno;
- cambio de contexto;
- limitación metodológica;
- error de implementación;
- causa no determinada.

La Memoria no debe atribuir automáticamente el resultado al Motor.

---

## 28. Replay histórico

Un Replay ejecuta una Lectura histórica utilizando otra versión metodológica o de calibración.

El resultado original no se modifica.

Debe conservar:

- Lectura de origen;
- versión original;
- versión nueva;
- resultado original;
- resultado Replay;
- diferencias;
- finalidad;
- responsable;
- fecha.

---

## 29. E11 — Evaluación del Motor

E11 vigila el comportamiento del Motor y puede detectar:

- resultados anómalos;
- contradicciones recurrentes;
- sensibilidad inesperada;
- casos sin clasificación estable;
- diferencias sistemáticas por tamaño/contexto;
- configuraciones excesivamente frecuentes o infrecuentes;
- divergencias entre resultado y casos de validación.

E11 no modifica automáticamente el Motor.

---

## 30. E12 — Evolución metodológica

E12 gestiona propuestas de modificación metodológica.

Una propuesta debe conservar:

- regla afectada;
- versión actual;
- cambio propuesto;
- motivo;
- evidencia;
- casos afectados;
- resultados antes/después;
- Replay;
- responsable;
- revisión;
- decisión.

Estados posibles:

```text
BORRADOR
EN_REVISION
VALIDADA
RECHAZADA
DESPLEGADA
```

---

## 31. Regla de aprendizaje

El aprendizaje metodológico sigue:

```text
caso real
    ↓
observación
    ↓
resultado
    ↓
E11
    ↓
hipótesis
    ↓
E12
    ↓
Replay
    ↓
pruebas
    ↓
validación
    ↓
nueva versión
```

Nunca:

```text
caso real
↓
IA
↓
modificación automática
↓
producción
```

---

## 32. Auditoría longitudinal

Debe poder reconstruirse:

1. qué sabía ATÓMICA;
2. qué desconocía;
3. qué metodología utilizaba;
4. qué Estado produjo;
5. qué información se mostró;
6. qué decisión declaró el usuario;
7. qué ocurrió posteriormente;
8. qué cambios metodológicos se hicieron después.

---

## 33. Integridad histórica

Una Lectura histórica no puede sobrescribirse silenciosamente.

Toda modificación debe generar un Evento de Auditoría y mantener la trazabilidad de versiones.

---

## 34. Interfaz y Memoria

El Observatorio puede mostrar únicamente una síntesis limpia:

```text
C · CONDICIONADO
↓ respecto a la lectura anterior
Principal cambio: K03
```

La complejidad completa permanece en las capas metodológica y de auditoría.

---

## 35. No inferencia causal

Una secuencia temporal no demuestra causalidad.

```text
A ocurrió
↓
B ocurrió después
```

no equivale a:

```text
A causó B
```

La causalidad queda fuera del Motor V2 salvo metodología específica posterior.

---

## 36. Retención y requisitos jurídicos

La política exacta de conservación, acceso, borrado, consentimiento, tratamiento de datos y valor probatorio debe validarse jurídicamente antes de producción.

La arquitectura debe permitir conservar la trazabilidad requerida sin utilizar la retención como excusa para conservar datos sin necesidad.

---

## 37. Estado

CANDIDATO.

Pendiente de validación:

- umbrales temporales de DESACTUALIZADA;
- criterios de RESUELTA;
- número mínimo de lecturas para PERSISTENTE;
- reglas de MEJORANDO/DETERIORANDO;
- políticas de retención;
- requisitos jurídicos específicos.
