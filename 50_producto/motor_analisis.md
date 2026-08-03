# Motor de Análisis

Estado: CANÓNICO

Versión: 2.0.0

Tipo: Producto

Ubicación:

```text
50_producto/motor_analisis.md
```

---

# Propósito

Este documento define el Motor de Análisis de ATÓMICA como el componente del Producto responsable de transformar conocimiento disponible en comprensión estructurada.

Su finalidad consiste en organizar el conocimiento representado para facilitar su interpretación y reducir la incertidumbre necesaria para la toma de decisiones.

El Motor de Análisis no produce conocimiento nuevo.

No modifica el conocimiento existente.

No toma decisiones.

---

# Alcance

Este documento regula exclusivamente las responsabilidades del Motor de Análisis como componente de la capa Producto.

No define:

- la Ontología;
- la Metodología;
- el Motor de Inferencia;
- el Modelo Vivo;
- la Arquitectura del Dominio;
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
- `50_producto/motor_inferencia.md`

En caso de conflicto prevalecen siempre las definiciones canónicas.

---

# Objetivo

El Motor de Análisis organiza el conocimiento disponible para facilitar su comprensión.

Su función consiste en construir contexto.

No genera inferencias.

No representa conocimiento.

No interpreta el conocimiento en nombre del usuario.

Su resultado consiste en facilitar una comprensión más completa del conocimiento disponible.

---

# Naturaleza

El Motor de Análisis constituye un componente interno del Producto.

Opera exclusivamente sobre conocimiento previamente disponible.

No modifica dicho conocimiento.

No ejecuta inferencias.

No constituye un sistema experto.

No constituye un motor de decisión.

Su responsabilidad consiste únicamente en analizar conocimiento ya existente.

---

# Responsabilidad

Corresponde al Motor de Análisis:

- organizar el conocimiento disponible;
- identificar relaciones relevantes;
- contextualizar el conocimiento representado;
- facilitar distintas perspectivas de análisis;
- hacer explícita la incertidumbre presente;
- mantener la trazabilidad del análisis realizado.

No le corresponde:

- producir conocimiento nuevo;
- sustituir el juicio del usuario;
- representar el conocimiento;
- ejecutar la metodología.

---

# Principios

## MAN-001 · El análisis parte de conocimiento existente

Todo análisis utiliza exclusivamente conocimiento previamente disponible.

Nunca genera conocimiento nuevo.

---

## MAN-002 · El análisis preserva el significado

El análisis reorganiza el conocimiento.

Nunca modifica su significado.

---

## MAN-003 · El análisis es contextual

Toda interpretación incorpora el contexto necesario para comprender el conocimiento representado.

No existen análisis aislados del contexto.

---

## MAN-004 · El análisis es trazable

Todo resultado deberá poder reconstruirse completamente.

La explicación nunca finalizará en el propio Motor de Análisis.

---

## MAN-005 · La incertidumbre permanece visible

Todo análisis conservará la incertidumbre asociada al conocimiento utilizado.

Nunca podrá eliminarse durante el proceso analítico.

---

## MAN-006 · El análisis no sustituye el juicio

El Motor facilita comprensión.

La decisión permanece siempre en manos del usuario.

---

# Entradas

El Motor de Análisis utiliza exclusivamente conocimiento disponible conforme al Sistema Normativo.

Las fuentes concretas pertenecen a la arquitectura del Producto.

Toda entrada deberá conservar:

- origen;
- contexto;
- trazabilidad;
- temporalidad.

---

# Proceso de análisis

El Motor de Análisis organiza el conocimiento siguiendo una secuencia lógica de comprensión.

Como regla general, el análisis comprende:

1. identificación del conocimiento relevante;
2. contextualización;
3. identificación de relaciones;
4. organización de perspectivas compatibles;
5. identificación de incertidumbres;
6. construcción del contexto necesario para la interpretación.

La implementación concreta pertenece a la arquitectura del Producto.

---

# Salidas

El Motor de Análisis produce análisis.

Los análisis podrán incluir:

- contexto;
- relaciones relevantes;
- perspectivas compatibles;
- elementos de incertidumbre;
- limitaciones del conocimiento;
- alternativas de interpretación;
- necesidades de información adicional.

Las salidas del Motor de Análisis nunca constituyen:

- decisiones;
- órdenes;
- recomendaciones obligatorias;
- conocimiento inferido.

---

# Integración con el Motor de Inferencia

El Motor de Inferencia produce conocimiento.

El Motor de Análisis utiliza dicho conocimiento.

Ambos componentes poseen responsabilidades independientes.

El Motor de Análisis nunca sustituye al Motor de Inferencia.

---

# Integración con el Modelo Vivo

El Modelo Vivo mantiene operativo el conocimiento.

El Motor de Análisis consume dicho conocimiento para construir contexto analítico.

El análisis no modifica el Modelo Vivo.

---

# Integración con el Producto

Los instrumentos del Producto pueden utilizar el Motor de Análisis para ampliar la comprensión del conocimiento representado.

La responsabilidad del Motor finaliza cuando proporciona el análisis correspondiente.

La representación del resultado pertenece al instrumento que lo consume.

---

# Explicabilidad

Todo análisis deberá ser compatible con las reglas de explicabilidad definidas por el Sistema Normativo.

Cada conclusión deberá poder reconstruirse mediante la cadena completa de conocimiento utilizada.

El análisis nunca podrá convertirse en una caja negra.

---

# Tratamiento de incertidumbre

Cuando el conocimiento disponible resulte insuficiente, el Motor de Análisis deberá hacerlo explícito.

El resultado distinguirá claramente entre:

- conocimiento disponible;
- conocimiento inferido;
- incertidumbre existente;
- información necesaria para reducir dicha incertidumbre.

---

# Tratamiento de conflictos

Cuando existan interpretaciones compatibles pero contradictorias, el Motor de Análisis:

- identificará el conflicto;
- conservará las interpretaciones compatibles;
- hará visible la evidencia que sustenta cada una;
- evitará resolver la contradicción sin conocimiento adicional.

La existencia de conflicto constituye información relevante para el usuario.

---

# Restricciones

El Motor de Análisis no:

- redefine conceptos del Canon;
- modifica la Ontología;
- ejecuta la Metodología;
- produce conocimiento inferido;
- modifica el Modelo Vivo;
- sustituye el juicio humano;
- elimina incertidumbre;
- genera conocimiento no trazable.

---

# Criterios de aceptación

Una implementación del Motor de Análisis se considera conforme únicamente cuando:

- todo análisis parte de conocimiento disponible;
- el análisis conserva el significado del conocimiento;
- toda interpretación es completamente trazable;
- la incertidumbre permanece visible;
- el análisis mantiene el contexto necesario;
- los conflictos permanecen explícitos cuando existen;
- el análisis no modifica el Modelo Vivo;
- el Motor no sustituye la decisión del usuario.

El incumplimiento de cualquiera de estos criterios implica que la implementación no es conforme con el Canon.

---

# Gobierno

La evolución de este documento se encuentra regulada por el Sistema Normativo y el Gobierno del Canon.

Toda modificación deberá limitarse a las responsabilidades del Motor de Análisis como componente de la capa Producto.

Las modificaciones que afecten a la generación del conocimiento deberán realizarse previamente en la Metodología o en el Motor de Inferencia.

---

# Declaración

El Motor de Análisis no produce conocimiento.

No representa conocimiento.

No decide.

Su responsabilidad consiste exclusivamente en organizar el conocimiento disponible para facilitar su comprensión, preservando en todo momento su significado, su trazabilidad y su incertidumbre conforme al Sistema Normativo.
