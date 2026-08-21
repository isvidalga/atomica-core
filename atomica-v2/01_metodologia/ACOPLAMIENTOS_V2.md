documento: Acoplamientos V2
version: 0.1.0
estado: CANDIDATO
capa: Metodologia
breadcrumb: atomica-core/atomica-v2/01_metodologia/ACOPLAMIENTOS_V2.md
fecha_actualizacion: 2026-08-21
---

# ACOPLAMIENTOS V2

## 1. Propósito

Los acoplamientos representan relaciones estructurales previamente catalogadas entre configuraciones y/o condiciones observadas.

Un acoplamiento:

- no es una nueva configuración;
- no es una puntuación;
- no es una penalización independiente;
- no puede ser descubierto libremente por la IA;
- solo puede activarse si se cumplen las condiciones definidas en este catálogo.

El propósito de un acoplamiento es modificar la interpretación estructural de una o más configuraciones cuando existe una relación metodológicamente definida.

---

# 2. Catálogo

El catálogo operativo V2 contiene seis acoplamientos:

| ID | Nombre |
|---|---|
| A01 | Dependencia ↔ absorción |
| A02 | Dependencia ↔ continuidad |
| A03 | Persona ↔ continuidad |
| A04 | Dependencia ↔ finanzas |
| A05 | Interdependencia ↔ propagación |
| A06 | Detección ↔ respuesta |

No existen otros acoplamientos productivos en V2.

---

# 3. Naturaleza del acoplamiento

Una configuración responde a:

> «¿Qué estructura existe?»

Un acoplamiento responde a:

> «¿Qué relación estructural existe entre configuraciones o condiciones ya observadas?»

Por tanto:

```text
Observaciones
    ↓
Configuraciones
    ↓
Acoplamientos
    ↓
Restricciones consolidadas
```

No:

```text
Observaciones
    ↓
IA descubre relaciones
    ↓
Estado
```

---

# 4. Regla absoluta de catálogo cerrado

El motor no puede crear nuevas relaciones metodológicas durante una evaluación.

Si una capa de interpretación, una IA o un consultor detecta una relación que no pertenece a A01–A06, esa relación puede registrarse como:

```text
hipotesis_metodologica
```

pero:

```text
efecto_sobre_estado = 0
```

hasta que sea estudiada, validada e incorporada en una nueva versión metodológica.

---

# 5. Estados de los acoplamientos

Un acoplamiento puede encontrarse en:

```text
POTENCIAL
DECLARADO
RELEVANTE
CRITICO
CONTRADICTORIO
```

No existen en la primera lectura:

```text
RESUELTO
DESACTUALIZADO
```

Estos pertenecen a la capa longitudinal.

---

# 6. Contrato general

Cada acoplamiento debe poder evaluarse mediante:

```text
entradas
    ↓
condiciones mínimas
    ↓
relación explícita
    ↓
materialidad
    ↓
relevancia
    ↓
criticidad
```

Los umbrales numéricos y contextuales concretos son:

**PENDIENTES DE VALIDACIÓN.**

---

# 7. A01 — Dependencia ↔ absorción

## 7.1 Propósito

Representar una situación en la que una dependencia material coexiste con una capacidad insuficiente de absorción frente a las consecuencias de su interrupción.

A01 existe para distinguir:

```text
dependencia + absorción suficiente
```

de:

```text
dependencia + absorción insuficiente
```

sin convertir la absorción insuficiente automáticamente en K07.

## 7.2 Configuraciones compatibles

Principalmente:

- K01 — Dependencia concentrada;
- K02 — Dependencia externa crítica.

La relación también puede operar cuando existe una dependencia material evaluable que todavía no haya alcanzado el estado máximo de una K compatible, siempre que las condiciones de A01 estén satisfechas.

## 7.3 Entradas requeridas

Como mínimo:

- dependencia material;
- capacidad de absorción;
- consecuencia de la interrupción.

La capacidad de absorción puede proceder de:

- capacidad financiera;
- capacidad operativa;
- capacidad de sustitución;
- capacidad temporal;
- capacidad de contingencia.

No debe interpretarse automáticamente como K07.

## 7.4 Condición mínima

```text
dependencia_material = TRUE
AND
absorcion_evaluable = TRUE
```

## 7.5 Condición de relación

Debe existir una relación explícita entre:

```text
interrupción de la dependencia
        ↓
carga o consecuencia
        ↓
capacidad disponible de absorción
```

No basta con que existan simultáneamente una K de dependencia y una observación genérica de baja absorción.

## 7.6 Condición de materialidad

La consecuencia de la interrupción debe superar el umbral de materialidad contextual.

## 7.7 Condición de relevancia

A01 es relevante cuando:

```text
dependencia material
AND
consecuencia material
AND
absorcion insuficiente
```

## 7.8 Condición de criticidad

La criticidad requiere además que la insuficiencia de absorción deje materialmente comprometida la continuidad, la respuesta o la capacidad de adaptación.

## 7.9 Contexto

La evaluación debe considerar:

- tamaño;
- escala de operación;
- horizonte temporal;
- alternativas;
- capacidad de contingencia;
- contexto financiero/operativo cuando sea pertinente.

## 7.10 Evidencia

Puede utilizar:

- declaraciones;
- datos financieros;
- datos operativos;
- contratos;
- historial de incidentes;
- documentación.

La cantidad de documentos no incrementa la severidad.

## 7.11 Efecto sobre Estado

A01 no añade una penalización.

Puede:

- aumentar la intensidad de una restricción de dependencia;
- aumentar su alcance;
- convertir una restricción aislada en una estructura de absorción más relevante;

solo cuando las condiciones metodológicas lo justifican.

## 7.12 Qué NO puede hacer

A01 no puede:

- convertir automáticamente absorción baja en K07;
- activar una K inexistente;
- inferir insolvencia;
- crear una nueva relación;
- sumar su efecto al de K01/K02 como una penalización independiente;
- interpretar desconocimiento como absorción baja.

---

# 8. A02 — Dependencia ↔ continuidad

## 8.1 Propósito

Representar una dependencia material conectada explícitamente con un punto de continuidad de la organización.

## 8.2 Configuraciones compatibles

Principalmente:

- K01;
- K02;
- K06.

No es obligatorio que exista más de una de estas configuraciones.

## 8.3 Entradas requeridas

- dependencia;
- función/activo/ubicación de continuidad;
- consecuencia de interrupción.

## 8.4 Condición mínima

Debe existir una relación explícita:

```text
si X falla
    ↓
Y pierde capacidad material de continuar
```

## 8.5 Condición de materialidad

La pérdida debe producir:

- interrupción material;
- retraso material;
- degradación material;
- pérdida relevante de capacidad.

## 8.6 Condición de relevancia

A02 es relevante cuando la dependencia constituye una restricción material de continuidad.

## 8.7 Condición de criticidad

Requiere:

```text
dependencia crítica
AND
punto de continuidad esencial
AND
alternativa insuficiente
```

según el contexto.

## 8.8 Contexto

Debe considerar:

- naturaleza de la función;
- tiempo de recuperación;
- sustitución;
- redundancia;
- escala organizativa.

## 8.9 Evidencia

Debe poder sostenerse la relación entre:

```text
dependencia
→
punto de continuidad
```

La mera coexistencia de K02 y K06 no activa A02.

## 8.10 Efecto sobre Estado

A02 puede ampliar principalmente el alcance:

```text
LOCAL
→
FUNCIONAL
→
INTERFUNCIONAL
```

cuando exista evidencia suficiente.

No suma puntos.

## 8.11 Qué NO puede hacer

A02 no puede:

- crear una ruta de propagación inexistente;
- asumir que toda dependencia afecta continuidad;
- elevar automáticamente intensidad;
- crear A05;
- convertir una dependencia en crítica por simple coexistencia.

---

# 9. A03 — Persona ↔ continuidad

## 9.1 Propósito

Representar una convergencia entre dependencia personal y un punto de continuidad.

## 9.2 Configuraciones compatibles

Principalmente:

- K03;
- K04;
- K05.

La relación debe referirse a la misma persona y a la misma estructura funcional cuando corresponda.

## 9.3 Entradas requeridas

- persona;
- función o capacidad crítica;
- consecuencia de ausencia;
- sustituibilidad.

## 9.4 Condición mínima

Debe existir:

```text
persona identificable
AND
funcion crítica
AND
consecuencia material de ausencia
```

## 9.5 Condición de relación

Debe poder demostrarse:

```text
persona
    ↓
funcion crítica
    ↓
continuidad
```

No basta con que la persona tenga autoridad o importancia.

## 9.6 Condición de relevancia

La persona constituye un punto de continuidad cuando:

```text
funcion material
AND
sustitucion insuficiente
AND
consecuencia material
```

## 9.7 Condición de criticidad

La relación puede ser crítica cuando:

- la función es esencial;
- la sustitución es insuficiente;
- la ausencia produce una consecuencia severa;
- el alcance es significativo.

## 9.8 Contexto

Debe considerar:

- tamaño;
- redundancia;
- distribución de responsabilidades;
- documentación;
- profundidad organizativa.

## 9.9 Evidencia

Debe poder sostener tanto la función como la consecuencia de ausencia.

## 9.10 Efecto sobre Estado

A03 puede consolidar:

- continuidad humana;
- conocimiento;
- decisión;

cuando forman parte de la misma estructura.

Puede ayudar a evitar doble conteo entre K03, K04 y K05.

## 9.11 Qué NO puede hacer

A03 no puede:

- convertir al CEO automáticamente en punto crítico;
- inferir dependencia por cargo;
- duplicar K03/K04/K05;
- convertir una persona importante en una restricción sistémica sin alcance suficiente.

---

# 10. A04 — Dependencia ↔ finanzas

## 10.1 Propósito

Representar una dependencia económica/material cuya perturbación interactúa directamente con una restricción financiera ya identificada.

## 10.2 Configuraciones compatibles

Principalmente:

- K01;
- K02;
- K07.

## 10.3 Entradas requeridas

- dependencia económica/material;
- consecuencia económica;
- rigidez financiera;
- relación explícita entre ambas.

## 10.4 Condición mínima

No basta:

```text
K01 + K07
```

o:

```text
K02 + K07
```

Debe existir una relación explícita.

## 10.5 Condición de relación

Ejemplo válido:

```text
dependencia X
    ↓
pérdida de ingresos
    ↓
reducción de caja
    ↓
vencimientos no absorbibles
```

La relación debe estar sustentada.

## 10.6 Condición de materialidad

La consecuencia económica debe ser material.

## 10.7 Condición de relevancia

```text
dependencia económica
AND
rigidez financiera relevante
AND
relación material demostrada
```

## 10.8 Condición de criticidad

La combinación es crítica cuando la dependencia y la rigidez financiera generan conjuntamente una restricción severa de absorción o continuidad.

## 10.9 Contexto

Debe considerar:

- estructura de ingresos;
- concentración;
- margen;
- liquidez;
- vencimientos;
- financiación disponible;
- ciclo de caja;
- tamaño y sector cuando corresponda.

## 10.10 Evidencia

Debe sostener tanto la dependencia como el vínculo económico.

La coincidencia temporal por sí sola no demuestra relación.

## 10.11 Efecto sobre Estado

A04 puede:

- aumentar intensidad de una restricción consolidada;
- ampliar su alcance;
- crear un `ConstraintCluster`.

Nunca:

```text
K01 + K07 + A04
=
tres penalizaciones
```

## 10.12 Qué NO puede hacer

A04 no puede:

- diagnosticar insolvencia;
- sustituir K07;
- activarse por simple coexistencia;
- inventar una relación económica;
- convertirse en un índice financiero autónomo.

---

# 11. A05 — Interdependencia ↔ propagación

## 11.1 Propósito

Representar una ruta explícita mediante la cual una perturbación puede propagarse entre funciones, activos o componentes.

## 11.2 Configuraciones compatibles

Principalmente:

- K08;
- K02;
- K06;

cuando exista una ruta explícita compatible con el catálogo.

## 11.3 Entradas requeridas

- origen;
- destino;
- dependencia;
- ruta;
- consecuencia intermedia;
- consecuencia final.

## 11.4 Condición mínima

Debe existir una ruta:

```text
A
↓
B
↓
C
```

donde la perturbación pueda transmitirse de forma material.

## 11.5 Condición de materialidad

Debe existir impacto material fuera del punto inicial.

## 11.6 Condición de relevancia

La propagación debe afectar más de una función o componente material.

## 11.7 Condición de criticidad

La propagación puede ser crítica cuando:

- el alcance es amplio;
- la contención es insuficiente;
- la continuidad organizacional queda comprometida.

## 11.8 Contexto

Debe considerar:

- redundancia;
- contención;
- número de componentes;
- dependencia entre nodos;
- velocidad de propagación.

## 11.9 Evidencia

La ruta debe ser explícita.

Puede proceder de:

- procesos;
- arquitectura operativa;
- datos históricos;
- episodios;
- documentación.

No se permite inferencia libre.

## 11.10 Efecto sobre Estado

A05 puede aumentar el alcance:

```text
S2 → S3
```

o:

```text
S3 → S4
```

cuando las condiciones de alcance están satisfechas.

No añade una penalización separada.

## 11.11 Qué NO puede hacer

A05 no puede:

- inferir propagación por mera proximidad;
- crear rutas inexistentes;
- elevar la intensidad solo por multiplicidad de nodos;
- convertir cualquier interdependencia en criticidad.

---

# 12. A06 — Detección ↔ respuesta

## 12.1 Propósito

Representar una secuencia temporal en la que la detección tardía reduce la ventana de respuesta y contribuye a una respuesta insuficiente.

## 12.2 Configuraciones compatibles

- K09;
- K10.

## 12.3 Condición mínima

Debe existir:

```text
evento
AND
deteccion tardia
AND
respuesta insuficiente
```

referidos al mismo episodio o a una secuencia causal suficientemente justificada.

## 12.4 Condición temporal

La detección debe considerarse tardía respecto de un momento de referencia metodológicamente definido.

La referencia no puede depender de una simple impresión subjetiva.

## 12.5 Condición de materialidad

La reducción de la ventana de respuesta debe haber producido o podido producir una consecuencia material.

## 12.6 Condición de relevancia

Debe existir la secuencia:

```text
evento
    ↓
detección tardía
    ↓
ventana de respuesta reducida
    ↓
respuesta insuficiente
```

## 12.7 Condición de criticidad

Requiere evidencia comportamental suficiente y consecuencia material severa.

Una declaración genérica no basta para una clasificación crítica.

## 12.8 Contexto

Debe considerar:

- naturaleza del evento;
- velocidad del evento;
- medios de detección disponibles;
- tiempo disponible;
- recursos de respuesta.

## 12.9 Evidencia

Preferencia por evidencia de episodios reales.

Las declaraciones pueden producir estados potenciales o declarados.

## 12.10 Efecto sobre Estado

A06 consolida K09 y K10 en una restricción adaptativa.

Puede modificar:

- intensidad;
- alcance;

cuando la evidencia lo sustente.

## 12.11 Qué NO puede hacer

A06 no puede activarse:

```text
K09 del episodio A
+
K10 del episodio B
```

sin una relación metodológicamente válida.

No puede inferir:

> la organización carece de capacidad de adaptación

a partir de una única declaración.

---

# 13. Reglas transversales de acoplamiento

## 13.1 No coexistencia automática

Dos configuraciones compatibles no activan automáticamente un acoplamiento.

```text
K01 + K07
≠
A04
```

si no existe la relación requerida.

## 13.2 No doble conteo

Un acoplamiento no es una penalización adicional.

```text
K01
+
K07
+
A04
```

se interpreta como una estructura consolidada.

## 13.3 No descubrimiento libre

El motor no puede generar:

```text
A07
A08
...
```

durante la ejecución.

## 13.4 No compensación

Una fortaleza en otra zona no elimina un acoplamiento material existente.

## 13.5 No causalidad automática

La coexistencia temporal o estadística de dos configuraciones no demuestra causalidad.

La relación debe estar expresamente definida por el catálogo o sustentada según las condiciones del acoplamiento.

---

# 14. Relación con las restricciones

Un acoplamiento puede producir tres efectos metodológicos:

### 14.1 Consolidación

Dos o más restricciones pasan a formar una estructura común.

### 14.2 Cambio de alcance

Una relación puede extender una restricción:

```text
S1 → S2
S2 → S3
S3 → S4
```

solo cuando las condiciones están satisfechas.

### 14.3 Cambio de intensidad

En determinados casos, la relación puede justificar una mayor intensidad consolidada.

Este efecto debe estar explicitado por el acoplamiento correspondiente.

Nunca se calcula mediante suma de puntos.

---

# 15. A01 y A04

Aunque ambos relacionan dependencia y capacidad de absorción, no deben confundirse.

### A01

Dependencia ↔ capacidad de absorción.

La absorción puede ser:

- operativa;
- financiera;
- temporal;
- de sustitución;
- de contingencia.

### A04

Dependencia económica/material ↔ rigidez financiera.

A04 requiere una relación económica explícita con K07.

Por tanto:

```text
A01 puede existir sin K07.
A04 requiere una estructura financiera compatible con K07.
```

Esta distinción evita duplicidad conceptual.

---

# 16. A03 y K03/K04/K05

A03 tiene una función de consolidación.

Cuando:

```text
K03
K04
K05
```

proceden de una misma persona y misma estructura subyacente:

```text
A03
```

puede consolidar el efecto.

No se suman tres restricciones independientes.

---

# 17. A05 y K08

K08 identifica la existencia de una configuración de propagación.

A05 expresa la relación estructural que permite extender una restricción a través de componentes.

K08 responde:

> existe una interdependencia propagadora.

A05 responde:

> esta relación de propagación conecta efectivamente estas estructuras.

El resultado conjunto puede ampliar el alcance.

---

# 18. A06 y K09/K10

K09 y K10 pueden existir separadamente.

A06 exige que ambas condiciones formen una secuencia temporal coherente.

Por tanto:

```text
K09 ≠ A06
K10 ≠ A06
K09 + K10 ≠ automáticamente A06
```

La relación temporal debe estar sustentada.

---

# 19. Casos de prueba obligatorios

Cada acoplamiento debe tener como mínimo:

- caso positivo;
- caso negativo;
- caso límite;
- evidencia insuficiente;
- contradicción;
- variación contextual.

---

# 20. Casos adversariales específicos

## A01

```text
K01 + absorción alta
→ A01 NO ACTIVO

K01 + absorción baja
→ A01 ACTIVO
```

## A02

```text
K02
+
sin punto de continuidad explícito
→ A02 NO ACTIVO

K02
+
punto de continuidad explícito
→ A02 ACTIVO
```

## A03

```text
K03
+
persona
+
función de continuidad
→ A03 ACTIVO
```

pero:

```text
persona importante
sin función crítica demostrada
→ A03 NO ACTIVO
```

## A04

```text
K01 + K07
sin relación económica
→ A04 NO ACTIVO

K01 + K07
con relación económica demostrada
→ A04 ACTIVO
```

## A05

```text
dependencia
sin ruta de propagación
→ A05 NO ACTIVO

dependencia
+
ruta explícita
→ A05 ACTIVO
```

## A06

```text
K09 episodio A
+
K10 episodio B
→ A06 NO ACTIVO

K09 + K10
mismo episodio
→ A06 ACTIVO
```

---

# 21. Estado de este catálogo

## CERRADO

- seis IDs;
- catálogo cerrado;
- prohibición de descubrimiento libre;
- no doble conteo;
- no compensación;
- distinción entre coexistencia y relación;
- separación A01/A04;
- función consolidante de A03;
- función de propagación de A05;
- condición temporal de A06.

## PENDIENTE DE VALIDACIÓN

- umbrales;
- intensidad exacta;
- alcance exacto;
- materialidad cuantitativa;
- calibración por tamaño/contexto;
- sensibilidad de A01/A04;
- reglas de promoción a E.

## VALIDAR EN CÓDIGO

- determinismo;
- independencia del orden;
- imposibilidad de generar A07+;
- no doble conteo;
- trazabilidad de cada activación;
- replay.

## VALIDAR EN PILOTO

- utilidad de los acoplamientos para explicar cambios reales;
- frecuencia de activación;
- falsos positivos;
- falsos negativos;
- comprensión por consultores y dirección.

---

# 22. Regla final

> Un acoplamiento solo puede afectar al Estado cuando la relación que representa está expresamente definida, sus condiciones se satisfacen y existe evidencia suficiente para sostener su materialidad.

La ausencia de una relación en el catálogo no es una autorización para inferirla.
