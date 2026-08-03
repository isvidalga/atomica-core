# Navegación

Estado: CANÓNICO

Versión: 2.0.0

Tipo: Producto

Ubicación:

```text
50_producto/navegacion.md
```

---

# Propósito

Este documento establece la arquitectura de navegación de ATÓMICA.

La navegación organiza el acceso al conocimiento representado por el Producto.

No organiza funcionalidades.

No organiza módulos.

No organiza entidades del dominio.

No organiza componentes de la interfaz.

La navegación se construye exclusivamente a partir de preguntas de comprensión.

Su finalidad consiste en facilitar la construcción progresiva de conocimiento.

---

# Alcance

Este documento regula la organización de la navegación en todos los instrumentos del Producto.

Es aplicable a:

- menús;
- recorridos;
- flujos de exploración;
- cambios de contexto;
- jerarquías de navegación.

No define:

- la Ontología;
- la Metodología;
- el Modelo Vivo;
- la Arquitectura del Dominio;
- el diseño visual.

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

En caso de conflicto prevalecen siempre las definiciones canónicas.

---

# Objetivo

La navegación permite acceder al conocimiento siguiendo el mismo orden lógico en el que dicho conocimiento puede comprenderse.

El propósito de navegar no consiste en encontrar información.

Consiste en responder preguntas.

Cada recorrido incrementa la comprensión disponible.

Nunca incrementa únicamente la cantidad de información mostrada.

---

# Naturaleza

La navegación constituye un mecanismo de exploración del conocimiento.

No forma parte del Modelo Vivo.

No modifica el conocimiento representado.

No interpreta el conocimiento.

Únicamente organiza el acceso al mismo.

---

# Principios

## NAV-001 · La navegación se organiza por preguntas

Toda navegación parte de una necesidad de comprensión.

Los elementos del menú representan preguntas.

Nunca representan objetos del dominio.

---

## NAV-002 · Una pregunta por instrumento

Cada instrumento responde una única pregunta principal.

La navegación conecta preguntas.

No mezcla respuestas pertenecientes a distintos instrumentos.

---

## NAV-003 · El recorrido sigue la construcción de comprensión

La secuencia de navegación respeta el orden lógico necesario para comprender el conocimiento.

Cada pregunta presupone únicamente aquello que el usuario ya ha podido comprender.

---

## NAV-004 · La exploración nunca modifica el conocimiento

Ninguna acción de navegación altera el Modelo Vivo.

El recorrido únicamente modifica el nivel de comprensión alcanzado por el usuario.

---

## NAV-005 · El contexto permanece continuo

Durante toda la exploración el usuario conserva la referencia del conocimiento desde el que inició el recorrido.

La navegación nunca provoca pérdida de contexto.

---

## NAV-006 · La incertidumbre acompaña al conocimiento

Cuando una respuesta incorpore incertidumbre conforme al Sistema Normativo, dicha incertidumbre permanecerá visible durante toda la exploración.

Nunca podrá separarse del conocimiento representado.

---

## NAV-007 · Los objetos no organizan la navegación

Las entidades definidas por la Ontología constituyen conocimiento.

No constituyen elementos de navegación.

La navegación utiliza dicho conocimiento para responder preguntas.

Nunca organiza el producto alrededor de los objetos.

---

## NAV-008 · La profundidad es progresiva

Toda pregunta puede explorarse con distintos niveles de detalle.

La profundización amplía la comprensión.

Nunca cambia la pregunta que se está respondiendo.

---

# Arquitectura

Toda la navegación del producto deriva de un conjunto limitado y estable de preguntas.

Cada pregunta constituye un espacio de comprensión independiente.

Cada espacio utiliza el conocimiento definido por el Canon y mantenido por el Modelo Vivo.

La incorporación de nuevos instrumentos no modifica esta arquitectura.

Únicamente amplía las formas de responder una pregunta existente o incorpora una nueva pregunta cuando resulte necesario mediante evolución del Canon.

---

# Preguntas de navegación

## ¿Cómo estoy ahora?

### Propósito

Comprender el estado vigente del conocimiento representado.

### Debe permitir

- comprender la situación actual;
- interpretar el nivel de confianza disponible;
- reconocer las principales incertidumbres;
- acceder al contexto necesario para interpretar el estado.

### No debe incorporar

- evolución histórica;
- propuestas de intervención;
- decisiones futuras.

---

## ¿Qué ha cambiado?

### Propósito

Comprender cómo ha evolucionado el conocimiento disponible.

### Debe permitir

- identificar cambios;
- comprender su continuidad;
- reconocer cambios relevantes;
- explorar la evolución del conocimiento.

### No debe incorporar

- recomendaciones;
- decisiones;
- priorizaciones.

---

## ¿Qué desconozco?

### Propósito

Comprender los límites del conocimiento disponible.

### Debe permitir

- identificar incertidumbre;
- reconocer ausencia de conocimiento;
- localizar información insuficiente;
- comprender las limitaciones actuales del modelo.

### No debe incorporar

- intervenciones;
- decisiones;
- conclusiones no respaldadas.

---

## ¿Qué opciones existen?

### Propósito

Explorar posibles actuaciones compatibles con el conocimiento disponible.

### Debe permitir

- comprender alternativas;
- conocer su fundamento;
- explorar las condiciones que las justifican;
- interpretar su incertidumbre.

### No debe presentar

- decisiones automáticas;
- acciones obligatorias;
- recomendaciones sin fundamento.

---

## ¿Estoy aprendiendo?

### Propósito

Comprender la evolución del conocimiento organizacional.

### Debe permitir

- reconocer conocimiento consolidado;
- identificar hipótesis confirmadas;
- identificar hipótesis pendientes;
- comprender la evolución de la capacidad de aprendizaje.

### No debe reducir el aprendizaje

- a indicadores;
- a puntuaciones;
- al valor del IFO.

---

# Flujo de navegación

La navegación progresa entre preguntas.

Dentro de cada pregunta el usuario puede aumentar el nivel de profundidad sin abandonar el contexto.

El cambio entre preguntas constituye un cambio de objetivo de comprensión.

El cambio de profundidad constituye únicamente una ampliación del conocimiento disponible.

---

# Transiciones

Toda transición deberá preservar:

- el contexto;
- la continuidad;
- el significado del conocimiento;
- la trazabilidad del recorrido.

Las transiciones nunca modificarán la interpretación del conocimiento representado.

---

# Restricciones

La navegación no:

- redefine conceptos del Canon;
- modifica el Modelo Vivo;
- interpreta la evidencia;
- sustituye la Metodología;
- organiza el producto mediante objetos;
- depende de una interfaz concreta;
- depende de una implementación técnica.

---

# Criterios de aceptación

Una implementación de la navegación se considera conforme únicamente cuando:

- toda navegación parte de una pregunta;
- cada instrumento responde una única pregunta principal;
- el contexto permanece continuo;
- la exploración no modifica el conocimiento;
- la incertidumbre permanece visible cuando corresponde;
- las transiciones conservan el significado del conocimiento;
- la navegación organiza preguntas y no objetos;
- la progresión incrementa la comprensión del usuario.

El incumplimiento de cualquiera de estos criterios implica que la implementación no es conforme con el Canon.

---

# Gobierno

La evolución de este documento se encuentra regulada por el Sistema Normativo y el Gobierno del Canon.

Las modificaciones deberán limitarse a la organización de la navegación como responsabilidad propia de la capa Producto.

Las modificaciones que afecten al significado del conocimiento deberán realizarse previamente en las capas normativas correspondientes.

---

# Declaración

La navegación de ATÓMICA no conduce al usuario hacia funcionalidades.

Conduce al usuario hacia comprensión.

Cada recorrido existe para responder una pregunta.

Cada respuesta amplía el conocimiento disponible.

La arquitectura de navegación constituye, por tanto, la estructura mediante la cual el Producto transforma conocimiento representado en comprensión utilizable.
