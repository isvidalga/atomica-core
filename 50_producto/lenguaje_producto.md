# Lenguaje del Producto

Estado: CANÓNICO

Versión: 2.1.0

Tipo: Producto

Ubicación:

```text
50_producto/lenguaje_producto.md
```

---

# Propósito

Este documento establece las reglas mediante las cuales el Producto representa el conocimiento definido por el Canon.

Su finalidad consiste en garantizar que toda representación conserve el mismo significado con independencia del instrumento, la interfaz o la tecnología utilizada.

El Lenguaje del Producto regula la representación.

No regula el conocimiento representado.

---

# Alcance

Este documento es aplicable a todas las representaciones utilizadas por los instrumentos pertenecientes a la capa Producto.

Incluye:

* interfaces;
* vistas;
* representaciones gráficas;
* representaciones textuales;
* elementos interactivos cuando representen conocimiento.

No define:

* la Ontología;
* la Metodología;
* la Arquitectura;
* la implementación técnica;
* el diseño visual.

---

# Dependencias normativas

Este documento depende de:

* `00_canon/`
* `10_nucleo/`
* `20_epistemologia/`
* `30_ontologia/`
* `40_metodologia/`
* `50_producto/principios.md`
* `50_producto/modelo_vivo.md`
* `50_producto/experiencia_cognitiva.md`
* `50_producto/flujo_exploracion.md`
* `50_producto/navegacion.md`

En caso de conflicto prevalecen siempre las definiciones canónicas.

---

# Objetivo

El Lenguaje del Producto garantiza que todo conocimiento representado conserve el significado definido por el Canon.

La representación nunca:

* introduce conocimiento no sustentado;
* modifica el significado del conocimiento;
* oculta condiciones necesarias para interpretarlo;
* presenta como cierto aquello que el Modelo representa como incierto.

---

# Principios

## LP-001 · Conservación del significado

Toda representación mantiene el significado del conocimiento representado.

La representación nunca modifica su interpretación.

---

## LP-002 · Consistencia terminológica

Una misma entidad o concepto conserva su denominación y significado canónicos en todos los instrumentos.

Las diferencias de contexto o profundidad no autorizan cambios semánticos.

---

## LP-003 · Independencia de la representación

El conocimiento existe con independencia de su representación.

Las distintas representaciones muestran el mismo conocimiento desde diferentes perspectivas de exploración.

Nunca constituyen conocimientos alternativos.

---

## LP-004 · Neutralidad visual

Las decisiones visuales nunca alteran el significado del conocimiento.

El diseño comunica.

No añade interpretaciones que no estén sustentadas por el Modelo.

---

## LP-005 · Consistencia entre instrumentos

Toda representación sigue las mismas reglas semánticas en cualquier instrumento del Producto.

No pueden existir interpretaciones incompatibles de un mismo conocimiento.

---

## LP-006 · Trazabilidad

Cuando una representación dependa de conocimiento cuya fundamentación pueda explorarse, deberá conservarse el acceso a su trazabilidad correspondiente.

La representación no puede romper la relación entre conocimiento y fundamento.

---

# Niveles de representación

Toda representación podrá ofrecer distintos niveles de profundidad.

Cada nivel amplía la información contextual disponible para comprender el conocimiento.

Nunca modifica su significado.

Como referencia podrán existir:

* representación compacta;
* representación expandida;
* representación profunda.

La incorporación de nuevos niveles deberá preservar la continuidad semántica entre ellos.

---

# Contexto

Toda representación proporcionará el contexto necesario para interpretar correctamente el conocimiento mostrado.

Ningún elemento deberá representarse de forma que induzca una interpretación incompatible con su significado canónico.

Cuando el contexto necesario pertenezca a otro instrumento, la representación deberá permitir acceder a él sin perder la referencia del elemento que se estaba explorando.

---

# Relaciones

Las relaciones forman parte del conocimiento representado cuando pertenecen al Modelo.

Nunca constituyen únicamente mecanismos de navegación.

Cuando una representación utilice Relaciones definidas por el Canon, estas conservarán el mismo significado en cualquier instrumento.

La navegación puede utilizar dichas relaciones para facilitar la exploración, pero no modifica su significado.

---

# Continuidad

La representación debe mantener la continuidad semántica durante toda la exploración.

Las transiciones entre representaciones pueden cambiar:

* perspectiva;
* profundidad;
* contexto disponible;
* instrumento utilizado.

No pueden cambiar el significado del conocimiento representado.

---

# Incertidumbre

Cuando el conocimiento representado incorpore incertidumbre conforme al Sistema Normativo, la representación deberá conservar dicha condición.

La forma concreta de mostrar la incertidumbre pertenece al instrumento.

La obligación de no ocultarla pertenece al Lenguaje del Producto.

Una simplificación visual nunca podrá transformar una hipótesis en hecho ni una estimación en certeza.

---

# Temporalidad

Cuando el conocimiento posea una dimensión temporal definida por el Canon, la representación deberá conservar la información temporal necesaria para interpretarlo correctamente.

Cuando el significado dependa de la evolución del conocimiento, no deberá presentarse un estado aislado de forma que pueda confundirse con la totalidad de la trayectoria.

La representación temporal detallada corresponde al instrumento que tenga esa responsabilidad.

---

# Explicabilidad

Toda representación utilizada por el Producto deberá ser compatible con las reglas de explicabilidad definidas por el Sistema Normativo.

Cuando resulte necesario para comprender una representación, deberá poder reconstruirse:

* qué conocimiento se representa;
* de dónde procede;
* qué fundamento posee;
* qué nivel de incertidumbre mantiene;
* en qué contexto debe interpretarse.

La representación nunca deberá impedir la reconstrucción del conocimiento representado.

---

# Organización de la información

Toda representación organizará el conocimiento siguiendo una estructura lógica y coherente con la pregunta que responde el instrumento.

Como referencia general:

1. contexto;
2. conocimiento representado;
3. relaciones relevantes;
4. fundamento disponible;
5. profundidad adicional.

Esta secuencia no constituye una estructura obligatoria de interfaz.

Cada instrumento podrá adaptarla a su pregunta principal.

Las acciones o intervenciones no forman parte de esta jerarquía por el mero hecho de estar disponibles en el Producto.

Cuando una intervención constituya conocimiento representado por el Modelo, deberá conservar su propio fundamento, contexto e incertidumbre.

---

# Relación con la Experiencia Cognitiva

El Lenguaje del Producto establece cómo debe conservarse el significado durante la representación.

La Experiencia Cognitiva establece cómo debe organizarse la interacción para facilitar la comprensión.

Por tanto:

* el Lenguaje preserva el significado;
* la Experiencia Cognitiva facilita la comprensión;
* la Navegación organiza el acceso mediante preguntas;
* el Flujo de Exploración organiza la progresión entre instrumentos.

Ninguno de estos documentos sustituye a los demás.

---

# Relación con el Modelo Vivo

El Modelo Vivo constituye la referencia del conocimiento organizacional representado por el Producto.

El Lenguaje del Producto no crea una representación alternativa del conocimiento.

Toda representación deberá poder remitirse al conocimiento mantenido por el Modelo Vivo.

Las diferencias entre instrumentos corresponden a la perspectiva y profundidad de exploración, no al contenido del conocimiento.

---

# Restricciones

El Lenguaje del Producto no:

* redefine conceptos del Canon;
* modifica la Ontología;
* interpreta la evidencia;
* establece reglas metodológicas;
* introduce conocimiento no sustentado;
* transforma incertidumbre en certeza;
* elimina información necesaria para interpretar el conocimiento;
* altera el significado mediante decisiones visuales;
* depende de una tecnología concreta;
* depende de un diseño visual específico;
* crea modelos alternativos;
* utiliza la navegación para modificar el significado de las relaciones.

---

# Criterios de aceptación

Una implementación del Lenguaje del Producto se considera conforme únicamente cuando:

* toda representación conserva el significado del conocimiento;
* existe consistencia semántica entre instrumentos;
* la terminología permanece alineada con el Canon;
* la representación mantiene el contexto necesario;
* las relaciones conservan su significado;
* la incertidumbre se representa cuando corresponde;
* la evolución temporal puede comprenderse cuando resulta relevante;
* la trazabilidad permanece accesible cuando resulta necesaria;
* la representación es compatible con las reglas de explicabilidad;
* ninguna decisión visual altera el significado del conocimiento;
* ningún instrumento crea un modelo alternativo.

El incumplimiento de cualquiera de estos criterios implica que la implementación no es conforme con el Lenguaje del Producto.

---

# Gobierno

La evolución de este documento se encuentra regulada por el Sistema Normativo y el Gobierno del Canon.

Toda modificación deberá limitarse a las reglas de representación propias de la capa Producto.

Las modificaciones que afecten al significado del conocimiento deberán realizarse previamente en las capas normativas correspondientes.

---

# Declaración

El Producto no crea conocimiento.

El Producto no modifica el conocimiento.

El Producto representa el conocimiento definido por el Canon y mantenido por el Modelo Vivo.

El Lenguaje del Producto garantiza que dicha representación permanezca semánticamente estable, trazable y coherente durante toda la experiencia de exploración.
