# Navegación

Estado: CANÓNICO

Versión: 2.2.0

Tipo: Producto

Ubicación:

50_producto/navegacion.md

---

# Propósito

Este documento establece la arquitectura de navegación de ATÓMICA.

La navegación organiza el acceso al conocimiento representado por el Producto.

No organiza funcionalidades.

No organiza módulos.

No organiza entidades del dominio.

No organiza componentes de la interfaz.

La navegación se construye exclusivamente a partir de preguntas de comprensión.

Su finalidad consiste en facilitar la construcción progresiva de comprensión sobre el conocimiento representado.

---

# Alcance

Este documento regula la organización de la navegación en todos los instrumentos del Producto.

Es aplicable a:

- menús;
- recorridos;
- flujos de exploración;
- cambios de contexto;
- jerarquías de navegación;
- transiciones entre instrumentos.

No define:

- la Ontología;
- la Metodología;
- el Modelo Vivo;
- la Arquitectura del Dominio;
- el diseño visual;
- la implementación técnica.

---

# Dependencias normativas

Este documento depende de:

- `00_canon/`
- `10_nucleo/`
- `20_epistemologia/`
- `30_ontologia/`
- `40_metodologia/`
- `50_producto/principios.md`
- `50_producto/modelo_vivo.md`
- `50_producto/lenguaje_producto.md`
- `50_producto/experiencia_cognitiva.md`
- `50_producto/flujo_exploracion.md`

En caso de conflicto prevalecen siempre las definiciones canónicas.

---

# Objetivo

La navegación permite acceder al conocimiento mediante preguntas de comprensión.

El propósito de navegar no consiste en encontrar funcionalidades ni objetos.

Consiste en facilitar que el usuario pueda formular y resolver preguntas sobre el conocimiento disponible.

Cada recorrido puede incrementar la comprensión del usuario sin modificar el conocimiento representado.

---

# Naturaleza

La navegación constituye un mecanismo de exploración del conocimiento.

No forma parte del Modelo Vivo.

No modifica el conocimiento representado.

No genera conocimiento.

No interpreta el conocimiento.

Únicamente organiza el acceso al mismo.

---

# Principios

## NAV-001 · La navegación se organiza por preguntas

Toda navegación parte de una necesidad de comprensión.

Los elementos principales de navegación representan preguntas.

Nunca representan objetos del dominio.

---

## NAV-002 · Cada instrumento responde una pregunta principal

Cada instrumento del Producto responde una única pregunta principal de comprensión.

La navegación conecta dichas preguntas sin mezclar las responsabilidades de los instrumentos.

---

## NAV-003 · Un único conocimiento representado

Todos los instrumentos exploran el mismo conocimiento mantenido por el Modelo Vivo.

La navegación nunca crea representaciones independientes del conocimiento.

---

## NAV-004 · El recorrido incrementa comprensión

La navegación debe permitir avanzar hacia niveles mayores de comprensión.

Avanzar no significa necesariamente mostrar más información.

Significa proporcionar el contexto necesario para comprender mejor el conocimiento disponible.

---

## NAV-005 · La exploración nunca modifica el conocimiento

Ninguna acción de navegación altera el Modelo Vivo.

El recorrido modifica únicamente la perspectiva y profundidad desde las que el usuario explora el conocimiento.

---

## NAV-006 · El contexto permanece continuo

Durante la exploración el usuario conserva, cuando resulte aplicable, la referencia del conocimiento desde el que inició el recorrido.

Una transición no debe provocar pérdida injustificada de contexto.

---

## NAV-007 · La incertidumbre acompaña al conocimiento

Cuando una representación incorpore incertidumbre conforme al Sistema Normativo, dicha incertidumbre deberá permanecer asociada al conocimiento durante la exploración.

La navegación nunca puede ocultarla para simplificar el recorrido.

---

## NAV-008 · Los objetos no organizan la navegación

Las entidades definidas por la Ontología constituyen conocimiento.

No constituyen por sí mismas elementos de navegación.

La navegación utiliza el conocimiento representado para responder preguntas de comprensión.

---

## NAV-009 · La profundidad es progresiva

Una pregunta puede explorarse con distintos niveles de profundidad.

La profundización incorpora contexto, relaciones, fundamento o trazabilidad cuando estén disponibles.

Nunca cambia la pregunta que se está respondiendo.

---

# Arquitectura

La navegación del Producto se estructura mediante preguntas de comprensión.

Cada pregunta constituye un objetivo de exploración.

Los instrumentos proporcionan las representaciones necesarias para responder dichas preguntas.

La navegación y los instrumentos mantienen responsabilidades diferentes:

- la navegación organiza las preguntas y las transiciones;
- los instrumentos proporcionan la representación mediante la que se explora cada pregunta.

La incorporación o modificación de un instrumento no autoriza por sí misma la creación de una nueva estructura de navegación.

Toda nueva pregunta principal deberá justificarse dentro de la evolución del Producto.

---

# Preguntas de navegación

## ¿Cómo está mi organización ahora?

### Propósito

Comprender el estado actual del conocimiento representado sobre la organización.

### Instrumento principal

Observatorio.

### Debe permitir

- reconocer el Estado Sistémico vigente;
- comprender el nivel de Confianza disponible;
- reconocer incertidumbres relevantes;
- identificar elementos que requieren exploración;
- acceder al contexto necesario para interpretar el estado.

### No debe convertirse en

- un panel de gestión;
- un listado de funcionalidades;
- un plan de intervención;
- una explicación causal definitiva.

---

## ¿Qué estructuras están relacionadas con el comportamiento observado?

### Propósito

Comprender las configuraciones y relaciones significativas presentes en el conocimiento disponible.

### Instrumento principal

Instrumento de Patrones.

### Debe permitir

- explorar Patrones;
- comprender relaciones relevantes;
- relacionar Fragilidades y Capacidades;
- explorar Hipótesis relacionadas;
- acceder a las Evidencias disponibles.

### No debe convertirse en

- un sistema de causalidad automática;
- un generador de conclusiones;
- un sistema de recomendaciones.

---

## ¿Cómo ha evolucionado nuestra comprensión?

### Propósito

Comprender cómo ha cambiado el conocimiento representado a lo largo de la Trayectoria.

### Instrumento principal

Crónica.

### Debe permitir

- recorrer cambios de Estado;
- observar evolución de Hipótesis;
- reconocer incorporación de Evidencias;
- observar cambios en la Confianza;
- reconstruir la evolución del conocimiento.

### No debe

- reescribir la historia;
- convertir sucesión temporal en causalidad;
- interpretar acontecimientos más allá del conocimiento disponible.

---

## ¿En qué se fundamenta este conocimiento?

### Propósito

Comprender el fundamento del conocimiento representado.

### Instrumento principal

Evidencias.

### Debe permitir

- recorrer la trazabilidad disponible;
- identificar las Evidencias relacionadas;
- distinguir conocimiento sustentado de conocimiento insuficientemente sustentado;
- reconocer incertidumbre y ausencia de conocimiento.

### No constituye

- una fase final obligatoria;
- un destino exclusivo del recorrido.

Puede accederse a este instrumento desde cualquier punto compatible de la exploración.

---

## ¿Qué merece la pena comprender ahora?

### Propósito

Facilitar la exploración asistida del conocimiento disponible a partir del contexto en el que se encuentra el usuario.

### Instrumento principal

Donella.

### Debe permitir

- formular preguntas;
- profundizar en elementos del Modelo;
- localizar relaciones relevantes;
- contextualizar conocimiento ya representado;
- identificar áreas que requieren mayor comprensión.

### No debe

- constituir una fuente independiente de conocimiento;
- modificar el Modelo Vivo;
- presentar sus propias respuestas como conocimiento incorporado al Modelo;
- sustituir las Evidencias o la trazabilidad disponibles.

---

## ¿Cómo se relaciona el conocimiento disponible sobre la organización?

### Propósito

Comprender la estructura de relaciones existente en el conocimiento representado.

### Instrumento principal

Gemelo Organizacional.

### Debe permitir

- recorrer entidades;
- explorar Relaciones;
- recorrer Estados;
- explorar Trayectorias;
- comprender cómo se conecta el conocimiento disponible.

### No debe

- constituir un modelo alternativo;
- sustituir al Modelo Vivo;
- modificar el conocimiento representado.

---

# Relación entre preguntas e instrumentos

La correspondencia canónica es:

| Pregunta de comprensión | Instrumento |
|---|---|
| ¿Cómo está mi organización ahora? | Observatorio |
| ¿Qué estructuras están relacionadas con el comportamiento observado? | Instrumento de Patrones |
| ¿Cómo ha evolucionado nuestra comprensión? | Crónica |
| ¿En qué se fundamenta este conocimiento? | Evidencias |
| ¿Qué merece la pena comprender ahora? | Donella |
| ¿Cómo se relaciona el conocimiento disponible sobre la organización? | Gemelo Organizacional |

Esta correspondencia no implica un recorrido obligatorio.

Un instrumento puede ser accesible desde otro cuando la transición conserve el contexto y resulte pertinente para la pregunta que se está explorando.

---

# Flujo de navegación

La navegación no sigue una secuencia única.

El usuario puede desplazarse entre preguntas según la necesidad de comprensión que tenga en cada momento.

Dentro de una pregunta puede aumentar la profundidad de exploración.

El cambio entre preguntas constituye un cambio de objetivo de comprensión.

El cambio de profundidad constituye una ampliación de la comprensión de la misma pregunta.

---

# Transiciones

Toda transición deberá preservar, cuando resulte aplicable:

- el contexto;
- el elemento explorado;
- la pregunta de origen;
- el significado del conocimiento;
- la trazabilidad disponible;
- la referencia al Modelo Vivo.

Una transición puede cambiar la perspectiva de exploración.

No puede cambiar el conocimiento representado.

---

# Relación con el Flujo de Exploración

El Flujo de Exploración define cómo los instrumentos permiten ampliar la comprensión.

La Navegación define cómo se accede a esos instrumentos mediante preguntas.

Por tanto:

**Navegación → organiza preguntas y transiciones.**

**Flujo de Exploración → organiza la progresión de comprensión entre instrumentos.**

Ninguno sustituye al otro.

---

# Relación con la Experiencia Cognitiva

La Experiencia Cognitiva establece los principios que debe cumplir toda interacción.

La Navegación establece cómo se estructura el acceso mediante preguntas.

La Navegación no define:

- componentes;
- layouts;
- controles;
- animaciones;
- estilos visuales;
- comportamiento técnico de la interfaz.

---

# Restricciones

La navegación no:

- redefine conceptos del Canon;
- modifica el Modelo Vivo;
- genera conocimiento;
- interpreta la evidencia;
- convierte relaciones en causalidades;
- sustituye la Metodología;
- sustituye la Epistemología;
- organiza el Producto mediante objetos;
- impone un recorrido único;
- depende de una interfaz concreta;
- depende de una implementación técnica.

---

# Criterios de aceptación

Una implementación de la navegación se considera conforme únicamente cuando:

- toda navegación parte de una pregunta de comprensión;
- cada instrumento responde una única pregunta principal;
- las preguntas están diferenciadas entre sí;
- todos los instrumentos representan el mismo conocimiento;
- el contexto permanece continuo durante las transiciones;
- la exploración no modifica el conocimiento;
- la incertidumbre permanece visible cuando corresponde;
- la trazabilidad se conserva durante la exploración;
- los objetos no constituyen la estructura principal de navegación;
- la profundidad incrementa la comprensión;
- las transiciones no alteran el significado del conocimiento;
- ningún instrumento mantiene un modelo alternativo.

El incumplimiento de cualquiera de estos criterios implica que la implementación no es conforme con los principios del Producto.

---

# Gobierno

La evolución de este documento se encuentra regulada por el Sistema Normativo y el Gobierno del Canon.

Las modificaciones deberán limitarse a la organización de la navegación como responsabilidad propia de la capa Producto.

Las modificaciones que afecten al significado del conocimiento deberán realizarse previamente en las capas normativas correspondientes.

---

# Declaración

La navegación de ATÓMICA no conduce al usuario hacia funcionalidades.

Conduce al usuario hacia preguntas de comprensión.

Cada pregunta constituye un objetivo de exploración.

Cada instrumento proporciona una forma de explorar una pregunta sobre el mismo conocimiento.

La navegación constituye, por tanto, la estructura mediante la cual el Producto transforma el acceso al conocimiento representado en un recorrido de comprensión progresiva.
