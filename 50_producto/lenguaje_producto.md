# Lenguaje del Producto

Estado: CANÓNICO

Versión: 2.0.0

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

- interfaces;
- vistas;
- componentes;
- representaciones gráficas;
- representaciones textuales;
- elementos interactivos.

No define:

- la Ontología;
- la Metodología;
- la Arquitectura;
- la implementación técnica;
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

En caso de conflicto prevalecen siempre las definiciones canónicas.

---

# Objetivo

El Lenguaje del Producto garantiza que todo conocimiento representado conserve exactamente el significado definido por el Canon.

La representación nunca introduce significado adicional.

Nunca modifica el significado existente.

Nunca elimina información necesaria para interpretar correctamente el conocimiento.

---

# Principios

## LP-001 · Conservación del significado

Toda representación mantiene íntegramente el significado del conocimiento representado.

La representación nunca modifica su interpretación.

---

## LP-002 · Unicidad semántica

Una misma entidad conserva siempre:

- el mismo significado;
- la misma terminología;
- las mismas propiedades;
- las mismas reglas de representación.

Con independencia del instrumento donde aparezca.

---

## LP-003 · Independencia de la representación

El conocimiento existe con independencia de su representación.

Las distintas formas de representación muestran el mismo conocimiento.

Nunca representan conocimientos diferentes.

---

## LP-004 · Neutralidad visual

Las decisiones visuales nunca alteran el significado del conocimiento.

El diseño comunica.

No interpreta.

---

## LP-005 · Consistencia

Toda representación sigue las mismas reglas semánticas en cualquier punto del producto.

No pueden existir interpretaciones incompatibles de un mismo elemento.

---

# Niveles de representación

Toda representación podrá ofrecer distintos niveles de profundidad.

Cada nivel amplía la información disponible.

Nunca modifica el significado.

Como mínimo podrán existir:

- representación compacta;
- representación expandida;
- representación profunda.

La incorporación de nuevos niveles deberá preservar la continuidad semántica entre ellos.

---

# Contexto

Toda representación proporciona el contexto mínimo necesario para interpretar correctamente el conocimiento mostrado.

Ningún elemento se representa de forma que pueda inducir interpretaciones ambiguas.

Cuando el contexto pertenezca a otro instrumento, la representación facilitará el acceso al mismo.

---

# Relaciones

Las relaciones forman parte del conocimiento representado.

Nunca constituyen únicamente mecanismos de navegación.

Cuando una representación dependa de relaciones definidas por el Canon, dichas relaciones conservarán el mismo significado en cualquier instrumento.

---

# Continuidad

La representación mantiene continuidad durante toda la exploración.

El usuario conserva en todo momento el contexto desde el que inició el recorrido.

Las transiciones entre representaciones amplían el conocimiento disponible.

Nunca alteran su significado.

---

# Incertidumbre

Cuando el conocimiento representado incorpore incertidumbre conforme al Sistema Normativo, la representación deberá hacer visible dicha condición.

La forma concreta de representación pertenece a cada instrumento.

La obligación de conservar la incertidumbre pertenece al Lenguaje del Producto.

---

# Temporalidad

Cuando el conocimiento posea dimensión temporal definida por el Canon, la representación deberá permitir comprender dicha evolución.

La representación nunca presenta un estado aislado cuando su interpretación dependa de la evolución temporal.

---

# Explicabilidad

Toda representación utilizada por el Producto deberá ser compatible con las reglas de explicabilidad definidas por el Sistema Normativo.

La representación nunca impedirá reconstruir el recorrido del conocimiento.

---

# Organización de la información

Toda representación organiza el conocimiento siguiendo una estructura lógica y consistente.

Como regla general, la secuencia de representación será:

1. propósito;
2. conocimiento representado;
3. contexto;
4. relaciones relevantes;
5. explicación disponible;
6. acciones permitidas.

Cada instrumento podrá adaptar dicha secuencia cuando resulte necesario, siempre que preserve la coherencia semántica.

---

# Coherencia entre instrumentos

El mismo conocimiento deberá representarse de forma coherente en todos los instrumentos del producto.

Las diferencias entre instrumentos pertenecen exclusivamente a:

- el nivel de detalle;
- la forma de exploración;
- el contexto presentado.

Nunca al significado del conocimiento.

---

# Restricciones

El Lenguaje del Producto no:

- redefine conceptos del Canon;
- modifica la Ontología;
- interpreta la evidencia;
- establece reglas metodológicas;
- introduce significado nuevo;
- elimina información necesaria para interpretar el conocimiento;
- depende de una tecnología concreta;
- depende de un diseño visual específico.

---

# Criterios de aceptación

Una implementación del Lenguaje del Producto se considera conforme únicamente cuando:

- toda representación conserva el significado del conocimiento;
- existe consistencia semántica entre instrumentos;
- la representación mantiene el contexto necesario;
- las relaciones conservan su significado;
- la incertidumbre se representa cuando corresponde;
- la evolución temporal puede comprenderse cuando resulta relevante;
- la representación es compatible con las reglas de explicabilidad;
- ninguna decisión visual altera el significado del conocimiento.

El incumplimiento de cualquiera de estos criterios implica que la implementación no es conforme con el Canon.

---

# Gobierno

La evolución de este documento se encuentra regulada por el Sistema Normativo y el Gobierno del Canon.

Toda modificación deberá limitarse a las reglas de representación propias de la capa Producto.

Las modificaciones que afecten al significado del conocimiento deberán realizarse previamente en las capas normativas correspondientes.

---

# Declaración

El Producto no crea conocimiento.

El Producto no interpreta el conocimiento.

El Producto representa el conocimiento definido por el Canon y mantenido operativo mediante el Modelo Vivo.

El Lenguaje del Producto garantiza que dicha representación permanezca consistente, coherente y semánticamente estable en todo ATÓMICA.
