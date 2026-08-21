documento: Configuraciones V2
version: 0.1.0
estado: CANDIDATO
capa: Metodología
breadcrumb: atomica-core/atomica-v2/01_metodologia/CONFIGURACIONES_V2.md
fecha_actualizacion: 2026-08-21
---

# CONFIGURACIONES V2

## 1. Propósito

Las configuraciones representan patrones estructurales identificables a partir de Observaciones.

No son puntuaciones.

No son dimensiones.

No son diagnósticos independientes.

Una configuración expresa una combinación de condiciones que puede imponer una restricción sobre el Estado.

---

## 2. Cadena metodológica

```text
Observaciones
    ↓
Configuraciones
    ↓
Acoplamientos
    ↓
Restricciones
    ↓
Estado sistémico
```

Una declaración del CEO no es automáticamente un hecho. La configuración se deriva mediante reglas explícitas y una evaluación epistemológica separada de la confianza y la cobertura.

---

## 3. Estados de configuración

En primera lectura una configuración puede encontrarse en:

```text
POTENCIAL
DECLARADA
RELEVANTE
CRÍTICA
CONTRADICTORIA
```

En primera lectura no existen:

```text
RESUELTA
DESACTUALIZADA
```

Estos estados pertenecen a la capa longitudinal definida en `MEMORIA_EVOLUCION_V2.md`.

---

## 4. Regla general de evaluación

Toda configuración se evalúa mediante:

```text
Observaciones
    ↓
Elegibilidad
    ↓
Condición mínima
    ↓
Materialidad
    ↓
Relevancia
    ↓
Criticidad
```

Los umbrales numéricos concretos de materialidad, relevancia y criticidad están **PENDIENTES DE VALIDACIÓN** y deben ser parametrizables por contexto/tamaño cuando proceda.

---

# K01 — DEPENDENCIA CONCENTRADA

## Propósito

Detectar una dependencia material concentrada cuya sustitución sea limitada.

## Observaciones requeridas

- concentración;
- sustituibilidad;
- materialidad/consecuencia;
- absorción, cuando sea relevante para A01.

## Condición mínima

```text
concentración material
AND
sustituibilidad limitada
```

## Condición de materialidad

La dependencia debe producir una consecuencia material si el elemento falla, se interrumpe o se deteriora.

## Condición de relevancia

Debe coexistir:

```text
concentración material
+
sustituibilidad limitada
+
consecuencia material
```

## Condición de criticidad

La criticidad depende de la combinación de impacto, sustituibilidad, intensidad y contexto. Una concentración alta no convierte por sí sola una configuración en crítica.

Puede reforzarse cuando la capacidad de absorción sea insuficiente y se cumplan las condiciones de A01.

Los umbrales exactos están **PENDIENTES DE VALIDACIÓN**.

## Contexto / tamaño

Los umbrales deben poder variar según:

- tamaño organizativo;
- actividad;
- estructura;
- alternativas disponibles;
- horizonte temporal;
- contexto cuando sea metodológicamente necesario.

## Evidencia requerida

Puede proceder de:

- declaración de dirección;
- contratos;
- registros comerciales;
- datos operativos;
- fuentes conectadas;
- otras evidencias pertinentes.

La fuente afecta a la Confianza, no aumenta por sí misma la severidad.

## Estados permitidos

POTENCIAL · DECLARADA · RELEVANTE · CRÍTICA · CONTRADICTORIA

## Acoplamientos permitidos

- A01 — Dependencia ↔ absorción;
- A04 — Dependencia ↔ finanzas.

## Efecto sobre Estado

Introduce una restricción localizada de dependencia, continuidad y/o sustitución.

No degrada automáticamente toda la organización.

## Qué NO puede hacer

- No puede inferir fragilidad global por concentración.
- No puede activar A04 sin condiciones financieras compatibles.
- No puede activar A01 simplemente por existir.
- No puede contar dos veces concentración y sustituibilidad como efectos independientes del mismo fenómeno.
- No puede interpretar `DESCONOCIDO` como baja sustituibilidad.

---

# K02 — DEPENDENCIA EXTERNA CRÍTICA

## Propósito

Detectar una dependencia externa material cuya interrupción pueda comprometer una función o condición de continuidad y cuya sustitución no sea inmediata.

## Observaciones requeridas

- dependencia externa;
- materialidad;
- impacto;
- sustituibilidad;
- continuidad.

## Condición mínima

```text
dependencia externa
AND
impacto o consecuencia material
```

## Condición de materialidad

La interrupción de la dependencia debe producir una consecuencia material.

## Condición de relevancia

```text
dependencia material
+
impacto material
+
sustitución no inmediata
```

## Condición de criticidad

Debe existir además una restricción severa sobre continuidad o funcionamiento esencial, sustentada con evidencia suficiente.

No existe la regla:

```text
proveedor único = K02 crítica
```

## Contexto / tamaño

La criticidad debe considerar:

- alternativas reales;
- tiempo de sustitución;
- escala;
- naturaleza de la actividad;
- dependencia contractual/operativa;
- horizonte relevante.

## Evidencia requerida

Puede incluir contratos, registros, datos operativos y declaraciones. Para criticidad debe existir evidencia suficiente sobre impacto y sustituibilidad.

## Estados permitidos

POTENCIAL · DECLARADA · RELEVANTE · CRÍTICA · CONTRADICTORIA

## Acoplamientos permitidos

- A02 — Dependencia ↔ continuidad;
- A05 — Interdependencia ↔ propagación, cuando las condiciones de ese acoplamiento existan.

## Efecto sobre Estado

Introduce una restricción localizada sobre continuidad externa y puede alcanzar un ámbito mayor mediante relaciones catalogadas.

## Qué NO puede hacer

- No puede considerar crítica cualquier dependencia externa.
- No puede inferir insolvencia.
- No puede crear acoplamientos no catalogados.
- No puede elevarse por cantidad de documentos.

---

# K03 — PERSONA CRÍTICA COMPUESTA

## Propósito

Detectar la convergencia de funciones críticas de conocimiento, decisión y/o relación en una misma persona cuando existe consecuencia material y baja sustituibilidad.

## Observaciones requeridas

Al menos dos de:

- conocimiento crítico;
- decisión crítica;
- relación crítica;

más:

- consecuencia material;
- sustituibilidad.

## Condición mínima

```text
número de funciones críticas convergentes >= 2
```

en la misma persona.

## Condición de materialidad

La ausencia de la persona debe poder producir una consecuencia material.

## Condición de relevancia

```text
2 o más funciones críticas
+
consecuencia material
+
sustitución insuficiente
```

## Condición de criticidad

La criticidad puede aumentar cuando convergen tres funciones, la sustitución es especialmente baja y/o la consecuencia material es severa, siempre mediante parámetros contextuales validados.

## Contexto / tamaño

Especialmente sensible a:

- tamaño;
- redundancia;
- delegación;
- estructura de responsabilidades;
- profundidad organizativa.

## Evidencia requerida

Debe poder sostenerse la criticidad de las funciones, la convergencia y la insuficiencia de sustitución.

## Estados permitidos

POTENCIAL · DECLARADA · RELEVANTE · CRÍTICA · CONTRADICTORIA

## Acoplamientos permitidos

- A03 — Persona ↔ continuidad.

## Efecto sobre Estado

Puede generar una restricción de continuidad humana, conocimiento y/o decisión.

## Qué NO puede hacer

- No puede considerar crítica a toda persona con alta responsabilidad.
- No puede equivaler automáticamente «CEO» con persona crítica.
- No puede contar tres veces K03, K04 y K05 cuando procedan de la misma estructura personal.
- No puede inferir sustituibilidad insuficiente sin base.

---

# K04 — CONOCIMIENTO NO SUSTITUIBLE

## Propósito

Detectar conocimiento o capacidad crítica cuya sustitución sea insuficiente, aunque no exista una persona que concentre simultáneamente varias funciones.

## Observaciones requeridas

- conocimiento/capacidad crítica;
- sustituibilidad;
- materialidad.

## Condición mínima

```text
conocimiento o capacidad crítica
```

## Condición de materialidad

La pérdida o indisponibilidad debe producir una consecuencia material.

## Condición de relevancia

```text
conocimiento crítico
+
sustitución insuficiente
+
consecuencia material
```

## Condición de criticidad

Depende de:

- severidad de la consecuencia;
- grado de no sustitución;
- continuidad afectada;
- contexto.

Los umbrales exactos están **PENDIENTES DE VALIDACIÓN**.

## Contexto / tamaño

Debe considerar:

- tamaño;
- redundancia de conocimiento;
- documentación;
- capacidad de formación;
- facilidad de sustitución.

## Evidencia requerida

Debe existir soporte suficiente para afirmar que el conocimiento es crítico y que la sustitución es insuficiente.

## Estados permitidos

POTENCIAL · DECLARADA · RELEVANTE · CRÍTICA · CONTRADICTORIA

## Acoplamientos permitidos

- A03 cuando concurra la estructura personal requerida.

## Efecto sobre Estado

Introduce una restricción sobre continuidad del conocimiento/capacidad.

## Qué NO puede hacer

- No puede convertirse automáticamente en K03.
- No puede asumir que falta documentación = conocimiento no sustituible.
- No puede crear una dependencia personal inexistente.

---

# K05 — DECISIÓN CONCENTRADA

## Propósito

Detectar concentración de una capacidad decisional crítica cuando la ausencia del decisor pueda producir bloqueo o retraso material.

## Observaciones requeridas

- decisión crítica;
- concentración decisional;
- efecto de ausencia;
- sustituibilidad.

## Condición mínima

```text
decisión crítica concentrada
```

## Condición de materialidad

La ausencia debe poder producir bloqueo o retraso material.

## Condición de relevancia

```text
concentración decisional
+
bloqueo o retraso material
```

## Condición de criticidad

```text
bloqueo material
+
sustitución insuficiente
+
consecuencia severa
```

## Contexto / tamaño

Debe considerar:

- delegación;
- número de decisores;
- mecanismos de sustitución;
- tamaño;
- criticidad real de la decisión.

## Evidencia requerida

Debe identificarse la decisión y la consecuencia de la ausencia.

## Estados permitidos

POTENCIAL · DECLARADA · RELEVANTE · CRÍTICA · CONTRADICTORIA

## Acoplamientos permitidos

- A03 — Persona ↔ continuidad;
- A06 — Detección ↔ respuesta, cuando exista un episodio compatible.

## Efecto sobre Estado

Introduce una restricción sobre continuidad decisional.

## Qué NO puede hacer

- No puede interpretar centralización como fragilidad automáticamente.
- No puede considerar toda decisión del CEO como crítica.
- No puede activar A06 sin evidencia del episodio correspondiente.

---

# K06 — INFRAESTRUCTURA / UBICACIÓN CRÍTICA

## Propósito

Detectar un activo o ubicación cuya pérdida pueda producir impacto material y cuya continuidad sea limitada.

## Observaciones requeridas

- activo/ubicación;
- impacto de pérdida;
- continuidad;
- sustituibilidad/alternativas.

## Condición mínima

```text
activo o ubicación materialmente relevante
```

## Condición de materialidad

La pérdida debe producir impacto material.

## Condición de relevancia

```text
activo crítico
+
pérdida material
+
continuidad limitada
```

## Condición de criticidad

Requiere consecuencia severa y capacidad insuficiente de sustitución/continuidad.

## Contexto / tamaño

Debe considerar:

- redundancia;
- tiempo de sustitución;
- escala;
- naturaleza del activo;
- ubicación;
- alternativas.

## Evidencia requerida

Debe existir evidencia suficiente sobre la función del activo/ubicación y las condiciones de continuidad.

## Estados permitidos

POTENCIAL · DECLARADA · RELEVANTE · CRÍTICA · CONTRADICTORIA

## Acoplamientos permitidos

- A02;
- A05.

## Efecto sobre Estado

Introduce una restricción de continuidad física/operativa.

## Qué NO puede hacer

- No puede inferir criticidad por precio o valor contable.
- No puede crear propagación sin ruta explícita.

---

# K07 — RIGIDEZ FINANCIERA

## Propósito

Detectar una combinación material de condiciones financieras que limite la capacidad de absorber perturbaciones o atender compromisos sin una respuesta financiera extraordinaria.

## Observaciones requeridas

- holgura;
- deuda;
- vencimientos;
- ciclo de caja;
- cuando proceda, liquidez y capacidad disponible de financiación.

## Condición mínima

Debe existir información suficiente sobre un conjunto mínimo de factores financieros relevantes.

La ausencia de una variable no equivale a una valoración negativa.

## Condición de materialidad

La combinación debe limitar materialmente la capacidad de absorción.

## Condición de relevancia

Se evalúa la combinación de factores, no un indicador aislado:

```text
holgura
+
deuda
+
vencimientos
+
ciclo de caja
```

## Condición de criticidad

Requiere una capacidad de absorción insuficiente y una consecuencia material severa en el contexto de la organización.

## Contexto / tamaño

Debe considerar:

- tamaño;
- sector/contexto cuando sea pertinente;
- estructura de financiación;
- ciclo operativo;
- estacionalidad;
- vencimientos;
- capacidad de refinanciación o financiación disponible.

Los umbrales exactos están **PENDIENTES DE VALIDACIÓN**.

## Evidencia requerida

Preferentemente datos financieros, documentación contable, previsiones y otras fuentes estructuradas. Las declaraciones pueden sustentar estados epistemológicos inferiores cuando corresponda.

## Estados permitidos

POTENCIAL · DECLARADA · RELEVANTE · CRÍTICA · CONTRADICTORIA

## Acoplamientos permitidos

- A01;
- A04.

## Efecto sobre Estado

Introduce una restricción sobre capacidad de absorción financiera.

## Qué NO puede hacer

- No puede interpretar deuda alta como K07 crítica por sí misma.
- No puede interpretar liquidez puntual como rigidez estructural.
- No puede diagnosticar insolvencia jurídica.
- No puede aumentar severidad por documentos adicionales.

---

# K08 — INTERDEPENDENCIA PROPAGADORA

## Propósito

Detectar una dependencia interna con una ruta explícita de propagación material hacia otros componentes.

## Observaciones requeridas

- dependencia interna;
- ruta de propagación;
- impacto de propagación;
- capacidad de contención cuando sea relevante.

## Condición mínima

```text
dependencia interna
+
ruta de propagación explícita
```

## Condición de materialidad

La propagación debe producir un impacto material fuera del punto inicial.

## Condición de relevancia

Debe existir una cadena explícita del tipo:

```text
A
↓
B
↓
C
```

con transmisión material.

## Condición de criticidad

Depende de:

- intensidad de la propagación;
- alcance;
- capacidad de contención;
- impacto material.

## Contexto / tamaño

Debe considerar estructura y redundancia reales de la organización.

## Evidencia requerida

Debe existir soporte suficiente para la ruta de propagación.

## Estados permitidos

POTENCIAL · DECLARADA · RELEVANTE · CRÍTICA · CONTRADICTORIA

## Acoplamientos permitidos

- A05.

## Efecto sobre Estado

Puede ampliar el alcance de una restricción y llevarla de local/funcional a interfuncional/organizacional cuando las condiciones lo permitan.

## Qué NO puede hacer

- No puede inferir propagación solo por relación semántica.
- No puede inventar una ruta no catalogada/observada.
- No puede incrementar severidad simplemente por número de componentes afectados.

---

# K09 — DETECCIÓN INSUFICIENTE

## Propósito

Detectar capacidad insuficiente para identificar un evento material a tiempo.

## Observaciones requeridas

- evento;
- momento de detección;
- ventana relevante de detección;
- consecuencia;
- evidencia del episodio.

## Condición mínima

Debe existir un evento observado o suficientemente documentado.

## Condición de materialidad

El evento debe ser material para la organización.

## Condición de relevancia

```text
evento material
+
detección posterior a la ventana relevante
```

## Condición de criticidad

La criticidad requiere evidencia suficiente de comportamiento y consecuencia material severa. Una declaración genérica no basta.

## Contexto / tamaño

La ventana relevante depende del tipo de evento, capacidad de monitorización y tiempo de intervención razonable.

## Evidencia requerida

Para estados altos se requiere evidencia del episodio, no solo intención.

## Estados permitidos

POTENCIAL · DECLARADA · RELEVANTE · CRÍTICA · CONTRADICTORIA

## Acoplamientos permitidos

- A06.

## Efecto sobre Estado

Introduce una restricción sobre capacidad de detección.

## Qué NO puede hacer

- No puede inferir incapacidad general a partir de una sola declaración.
- No puede utilizar el número de documentos como proxy de criticidad.
- No puede activar A06 sin una respuesta insuficiente compatible.

---

# K10 — RESPUESTA / ADAPTACIÓN INSUFICIENTE

## Propósito

Detectar una capacidad insuficiente para responder o adaptarse ante un evento material.

## Observaciones requeridas

- evento;
- respuesta ejecutada;
- tiempo de respuesta;
- adecuación de la respuesta;
- consecuencia;
- evidencia del episodio.

## Condición mínima

Debe existir un episodio observado o evidencia suficiente.

## Condición de materialidad

El evento y/o la respuesta insuficiente deben tener consecuencia material.

## Condición de relevancia

```text
evento material
+
respuesta insuficiente
```

## Condición de criticidad

Requiere evidencia suficiente de comportamiento y consecuencia severa en contexto.

## Contexto / tamaño

Debe considerar:

- recursos disponibles;
- naturaleza del evento;
- tiempo de reacción razonable;
- alternativas;
- escala organizativa.

## Evidencia requerida

Para estados altos se requiere evidencia conductual suficiente.

## Estados permitidos

POTENCIAL · DECLARADA · RELEVANTE · CRÍTICA · CONTRADICTORIA

## Acoplamientos permitidos

- A06.

## Efecto sobre Estado

Introduce una restricción sobre capacidad de respuesta/adaptación.

## Qué NO puede hacer

- No puede deducir un patrón general de una intención futura.
- No puede afirmar aprendizaje o deterioro longitudinal en primera lectura.
- No puede activar A06 sin una detección tardía compatible.

---

# 19. Reglas transversales

## 19.1 Declaración no equivale a hecho

La declaración puede sostener POTENCIAL/DECLARADA y, cuando las condiciones metodológicas lo permitan, RELEVANTE. La criticidad debe respetar las exigencias de evidencia de cada configuración.

## 19.2 N/A

```text
N/A ≠ 0
N/A ≠ ausencia
N/A ≠ fragilidad
```

## 19.3 Desconocimiento

```text
DESCONOCIDO ≠ BAJO
DESCONOCIDO ≠ NEGATIVO
DESCONOCIDO ≠ FRAGILIDAD
```

## 19.4 Contradicción

Las fuentes incompatibles materialmente no se promedian.

## 19.5 Doble conteo

Una observación puede participar en una configuración, pero no puede aportar simultáneamente su efecto individual y el efecto completo de la configuración para el mismo fenómeno.

## 19.6 Cantidad no equivale a severidad

Más configuraciones independientes no implican automáticamente mayor Estado.

## 19.7 IA

La IA puede interpretar y normalizar Observaciones, pero no puede crear configuraciones nuevas, modificar reglas o inventar acoplamientos en tiempo de ejecución.

---

# 20. Calibración

Los siguientes elementos permanecen parametrizables:

- umbrales de concentración;
- sustituibilidad;
- materialidad;
- intensidad;
- criticidad;
- tamaño/contexto;
- temporalidad de K09/K10;
- otros parámetros que se definan en una versión de calibración.

Los parámetros no forman parte de la ontología.

Su modificación requiere una nueva versión de calibración y, cuando afecte a reglas, revisión metodológica conforme a E11/E12.

---

# 21. Control de cambios

Una nueva configuración no puede incorporarse mediante modificación silenciosa.

Cualquier propuesta de K11 o posterior debe:

1. registrarse como hipótesis metodológica;
2. evaluarse fuera del motor productivo;
3. someterse a pruebas;
4. validarse;
5. incorporarse mediante una nueva versión metodológica.

---

# 22. Estado del documento

Estado: CANDIDATO.

Para pasar a FROZEN deben completarse:

- especificación computable definitiva de A01–A06;
- reglas del Estado;
- pruebas adversariales y de regresión;
- calibración inicial documentada;
- revisión de implementación.
