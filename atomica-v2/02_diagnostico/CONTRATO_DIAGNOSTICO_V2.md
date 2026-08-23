documento: Contrato de Diagnóstico V2
version: 0.1.0
estado: CANDIDATO
capa: Diagnostico
breadcrumb: atomica-core/atomica-v2/02_diagnostico/CONTRATO_DIAGNOSTICO_V2.md
fecha_actualizacion: 2026-08-23
---

# CONTRATO DE DIAGNÓSTICO V2

## 1. Propósito

Este documento define únicamente la interfaz entre el Diagnóstico V2 y el Motor V2.

No redefine:

- la arquitectura del diagnóstico;
- el catálogo completo de preguntas;
- los gates ya decididos;
- los mecanismos condicionales;
- las reglas K01–K10;
- los acoplamientos A01–A06;
- el Estado;
- la interfaz del producto.

Su función es garantizar que el diagnóstico produzca Observaciones estructuradas que el Motor pueda consumir de forma determinista y trazable.

---

## 2. Arquitectura de frontera

```text
Perfil de organización
        ↓
Diagnóstico híbrido V2
        ↓
Core + Gates + mecanismos condicionales
        ↓
Respuestas / declaraciones
        ↓
Normalización
        ↓
Observaciones
        ↓
Evidencias asociadas
        ↓
Motor V2
```

El Motor no recibe respuestas de interfaz directamente.

Recibe Observaciones estructuradas.

---

## 3. Principio fundamental

Una respuesta del diagnóstico no es automáticamente un hecho.

La cadena epistemológica es:

```text
respuesta
↓
Observación estructurada
↓
estado epistemológico
↓
Configuración
↓
Estado
```

La procedencia y el estado epistemológico deben conservarse.

---

## 4. Unidad de salida

La unidad mínima producida por el diagnóstico es:

```text
Observacion
```

El contrato de datos V2 define su estructura como:

```text
Observacion {
    id
    organizacion_id
    constructo
    valor
    unidad
    aplicabilidad
    materialidad
    tipo_fuente
    fuente_id
    observada_en
    creada_en
    confianza
    estado
    referencias_evidencia[]
}
```

El diagnóstico debe producir datos compatibles con este contrato.

---

## 5. Identidad de la observación

Cada Observación debe tener un identificador único dentro de la organización y de la ejecución correspondiente.

El identificador no debe depender del orden de las preguntas.

Cambiar el orden de presentación del diagnóstico no debe cambiar la identidad semántica del constructo observado.

---

## 6. Constructo

`constructo` identifica qué se ha observado.

Debe utilizar un identificador metodológico estable.

El diagnóstico no puede crear constructos nuevos durante una ejecución.

Si una respuesta no puede mapearse a un constructo existente:

```text
NO_MAPEADA
```

Debe quedar registrada para revisión y no producir efecto metodológico.

---

## 7. Valor

`valor` representa el contenido observado en forma estructurada.

Puede ser:

- booleano;
- categórico;
- ordinal;
- numérico;
- textual normalizado;
- estructura compuesta;
- desconocido.

El tipo concreto debe venir definido por el constructo.

No se permite convertir automáticamente una ausencia de respuesta en un valor negativo.

---

## 8. Unidad

`unidad` especifica la unidad física, temporal, monetaria o semántica del valor cuando sea necesario.

Ejemplos:

```text
porcentaje
meses
euros
personas
booleano
categoria
```

No debe utilizarse para introducir reglas metodológicas.

---

## 9. Aplicabilidad

La aplicabilidad distingue como mínimo:

```text
APLICABLE
NO_APLICABLE
DESCONOCIDA
```

Reglas:

```text
NO_APLICABLE ≠ 0
NO_APLICABLE ≠ negativo
DESCONOCIDA ≠ negativo
```

Una pregunta que no corresponde a la organización no debe penalizar al Estado.

---

## 10. Materialidad

Cuando el diagnóstico pueda establecerla de forma válida, la Observación puede incluir una valoración de materialidad.

La ausencia de una valoración de materialidad no equivale a materialidad alta ni baja.

La materialidad definitiva debe ser interpretada por las reglas metodológicas correspondientes.

---

## 11. Fuente

Las Observaciones procedentes del diagnóstico inicial deben conservar su fuente.

Como mínimo:

```text
DECLARACION_DIRECCION
```

Podrán existir otras fuentes en futuras fases:

```text
APORTACION_PERSONAS
DOCUMENTO
CONECTOR
DATO_SISTEMA
CONSULTOR
OTRA
```

La procedencia no convierte una declaración en un hecho.

---

## 12. Estado epistemológico de la Observación

Como mínimo:

```text
VALIDA
INCIERTA
CONTRADICTORIA
SUPERADA
```

La implementación puede simplificar la representación interna siempre que conserve la semántica.

La primera lectura puede generar Observaciones declaradas aunque no exista evidencia externa.

---

## 13. Desconocimiento

Una respuesta desconocida debe poder representarse explícitamente.

No puede traducirse a:

```text
0
bajo
negativo
frágil
```

Debe permanecer como desconocimiento.

---

## 14. N/A

Cuando un mecanismo o pregunta no sea aplicable a una organización:

```text
aplicabilidad = NO_APLICABLE
```

La condición no se incorpora como observación negativa.

El diagnóstico debe conservar la razón de la no aplicabilidad cuando sea relevante para trazabilidad.

---

## 15. Contradicciones

Si dos respuestas o fuentes producen observaciones materialmente incompatibles sobre el mismo constructo:

```text
estado = CONTRADICTORIA
```

El diagnóstico no debe resolver la contradicción mediante promedio.

La resolución pertenece a la capa epistemológica/metodológica correspondiente.

---

## 16. Perfil de organización

El diagnóstico debe conocer el contexto mínimo de la organización antes de activar los mecanismos condicionales.

Como mínimo:

```text
organizacion_id
sector
tramo_tamano
contexto
```

Si el perfil dispone de información adicional sobre la forma organizativa, puede incorporarla al `contexto` hasta que exista un contrato específico.

No se añade aquí un campo metodológico nuevo por anticipación.

---

## 17. Unidad de análisis

Cada ejecución diagnóstica debe referirse a una única unidad organizativa declarada.

El diagnóstico no debe mezclar implícitamente:

- matriz;
- filial;
- consolidado;
- sedes;
- unidades operativas diferentes.

Cuando la información recogida se refiera a una unidad distinta de la declarada, la Observación debe quedar marcada para revisión y no debe utilizarse como si perteneciera a la unidad correcta.

---

## 18. Diagnóstico híbrido

El diagnóstico V2 puede contener:

```text
CORE
↓
GATE
↓
MECANISMO CONDICIONAL
↓
PREGUNTA ADICIONAL
```

La lógica de navegación es responsabilidad del Diagnóstico.

El Motor no conoce:

- qué pregunta se mostró;
- qué pregunta se omitió;
- qué ruta de navegación siguió el usuario;

salvo las Observaciones resultantes y su trazabilidad.

---

## 19. Principio de mínimo informativo

El diagnóstico debe producir únicamente las Observaciones necesarias para la lectura actual.

No debe solicitar información adicional únicamente para aumentar artificialmente:

- Confianza;
- Cobertura;
- severidad;
- número de documentos.

Las preguntas condicionales deben activarse porque una regla metodológica las necesita.

---

## 20. Terminación del diagnóstico

El diagnóstico termina cuando:

1. se ha satisfecho el Core obligatorio;
2. se han evaluado los Gates correspondientes;
3. se han ejecutado los mecanismos condicionales aplicables;
4. no queda una condición diagnóstica obligatoria pendiente;
5. toda información desconocida relevante ha quedado representada explícitamente.

No existe un número fijo obligatorio de preguntas.

La longitud depende de la estructura de la organización y de las ramas activadas.

---

## 21. Variabilidad de longitud

El diagnóstico puede producir un número diferente de interacciones en organizaciones distintas.

Una organización sencilla puede requerir menos interacciones que una organización compleja.

La variabilidad no modifica la semántica del Motor.

---

## 22. Guardado de respuestas

Aunque el diagnóstico pueda ser interactivo y adaptativo, las respuestas y Observaciones producidas deben poder reconstruirse posteriormente.

El sistema debe conservar:

```text
sesion_diagnostico
organizacion_id
version_diagnostico
fecha_inicio
fecha_fin
respuestas
observaciones_producidas
```

La sesión no sustituye a la Lectura.

---

## 23. Versionado

Toda sesión productiva debe conservar:

```text
version_diagnostico
version_metodologia
version_calibracion
```

El diagnóstico puede evolucionar entre versiones.

Una sesión histórica no se reinterpreta silenciosamente con una versión posterior.

---

## 24. Relación con Evidencia

Una respuesta declarativa puede producir una Observación sin Evidencia externa.

Una Evidencia posterior puede:

- respaldarla;
- contradecirla;
- complementarla;
- aumentar la base de conocimiento.

La incorporación de Evidencia no debe alterar retrospectivamente el contenido original de la respuesta.

---

## 25. Relación con K01–K10

El diagnóstico no determina por sí mismo:

```text
K01 = CRITICA
K02 = RELEVANTE
...
```

Produce Observaciones.

El Evaluador K transforma las Observaciones en resultados de configuración según el catálogo cerrado.

---

## 26. Relación con A01–A06

El diagnóstico no crea acoplamientos.

Puede producir Observaciones que posteriormente permitan activar A01–A06.

No existe:

```text
respuesta del usuario
→ nuevo acoplamiento
```

---

## 27. Primera lectura

El diagnóstico puede producir información suficiente para una primera Lectura.

La primera Lectura puede contener:

- Observaciones;
- Configuraciones;
- Acoplamientos;
- Restricciones;
- Estado;
- Confianza;
- Cobertura;
- Desconocimientos;
- Contradicciones.

No puede generar por sí sola:

- RESUELTA;
- DESACTUALIZADA;
- MEJORA;
- DETERIORO;
- APRENDIZAJE LONGITUDINAL.

---

## 28. Pruebas de contrato

El diagnóstico debe superar como mínimo:

### D1 — Mismo contenido, distinto orden

La misma información presentada en distinto orden debe producir las mismas Observaciones semánticas.

### D2 — N/A

Una condición no aplicable no produce una observación negativa.

### D3 — Desconocimiento

Una respuesta desconocida produce desconocimiento explícito.

### D4 — Pregunta condicional

Una pregunta que no se activa no puede producir una Observación ficticia.

### D5 — Pregunta condicional activada

Cuando un Gate la activa y existe respuesta, debe producir la Observación correspondiente.

### D6 — Unidad organizativa

Una respuesta referida a otra entidad no se incorpora silenciosamente a la Lectura actual.

### D7 — Versión

La misma sesión bajo la misma versión de diagnóstico produce las mismas Observaciones.

### D8 — Reanudación

Interrumpir y reanudar el diagnóstico no cambia las Observaciones resultantes.

---

## 29. Qué NO puede hacer

El contrato de Diagnóstico V2 no puede:

- calcular Estado;
- calcular A–E;
- crear K11/K12;
- crear A07/A08;
- decidir criticidad fuera de reglas K;
- transformar desconocimiento en fragilidad;
- transformar N/A en cero;
- aumentar severidad por número de preguntas;
- aumentar severidad por número de documentos;
- decidir causalidad;
- modificar la metodología durante una sesión.

---

## 30. Estado documental

### CERRADO

- Observación como unidad de salida;
- separación diagnóstico/motor;
- N/A;
- desconocimiento;
- contradicción;
- versionado;
- unidad de análisis;
- carácter híbrido/adaptativo;
- prohibición de calcular Estado desde el diagnóstico.

### PENDIENTE DE VALIDACIÓN

- catálogo definitivo de preguntas V2;
- Core definitivo;
- Gates definitivos;
- mecanismos condicionales definitivos;
- reglas exactas de terminación;
- tratamiento final de forma organizativa si requiere campo específico.

### VALIDAR EN CÓDIGO

- determinismo;
- reanudación;
- invariancia al orden;
- activación condicional;
- integridad de Observaciones;
- versionado.

### VALIDAR EN PILOTO

- comprensión de preguntas;
- tiempo real de diagnóstico;
- frecuencia de ramas;
- abandono;
- suficiencia de Observaciones para el Motor.

---

## 31. Criterio de congelación

Este documento puede pasar a FROZEN cuando el catálogo de preguntas, Core, Gates y mecanismos condicionales V2 hayan sido incorporados a documentos canónicos sin contradicción con este contrato.

Mientras esos elementos no estén recuperados/consolidados, este documento permanece CANDIDATO.
