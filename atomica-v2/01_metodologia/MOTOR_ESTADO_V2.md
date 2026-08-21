documento: Motor de Estado V2
version: 0.1.0
estado: CANDIDATO
capa: Metodologia
breadcrumb: atomica-core/atomica-v2/01_metodologia/MOTOR_ESTADO_V2.md
fecha_actualizacion: 2026-08-21
---

# MOTOR DE ESTADO V2

## 1. Propósito

Este documento define la transición computable desde:

```text
Configuraciones K01–K10
        ↓
Acoplamientos A01–A06
        ↓
Restricciones
        ↓
Clusters de restricciones
        ↓
Intensidad
        ↓
Alcance
        ↓
Clasificación de Estado A–E / ND
```

El documento no define:

- la ontología general de ATÓMICA;
- las preguntas del diagnóstico;
- la interfaz;
- los informes;
- la memoria longitudinal;
- la evolución;
- la calibración empírica definitiva.

---

# 2. Principio fundamental

El Estado no se calcula mediante:

- media de configuraciones;
- suma de configuraciones;
- media de respuestas;
- peor configuración automática;
- cantidad de evidencias;
- cantidad de documentos;
- confianza;
- cobertura.

El Estado se determina mediante la **estructura consolidada de restricciones observadas**.

Regla fundamental:

> El motor puede elevar el Estado por estructura, nunca por cantidad.

---

# 3. Entradas

El motor recibe como mínimo:

```text
Organización
Observaciones
Evidencias
Resultados K01–K10
Resultados A01–A06
Versión metodológica
Versión de calibración
```

No recibe directamente del usuario:

- una puntuación de Estado;
- una clase A–E;
- una penalización;
- una opinión de la IA.

---

# 4. Salida

El motor produce:

```text
Estado
Restricciones consolidadas
Clusters
Configuraciones utilizadas
Acoplamientos utilizados
Confianza
Cobertura
Desconocimientos
Contradicciones
Trazabilidad
```

La salida visual puede transformarse posteriormente en:

```text
A
B
C
D
E
ND
```

---

# 5. Intensidad

La intensidad expresa la magnitud de la consecuencia de una restricción.

Escala:

```text
I1 — Baja
I2 — Moderada
I3 — Alta
I4 — Crítica
```

La intensidad:

- no es probabilidad;
- no es confianza;
- no es cobertura;
- no es alcance;
- no es una puntuación de Estado.

---

# 6. Definición de I1 — Baja

Una restricción es I1 cuando:

- existe una consecuencia material limitada;
- la organización puede absorberla o contenerla adecuadamente;
- no existe evidencia de una consecuencia severa.

I1 no significa:

> irrelevante.

Significa:

> la magnitud de la restricción es actualmente limitada.

---

# 7. Definición de I2 — Moderada

Una restricción es I2 cuando:

- existe una consecuencia material relevante;
- existe alguna limitación de absorción, sustitución o respuesta;
- la organización conserva capacidad suficiente para contenerla.

---

# 8. Definición de I3 — Alta

Una restricción es I3 cuando:

- la consecuencia es materialmente significativa;
- la exposición es relevante;
- la capacidad de absorción, sustitución, continuidad o respuesta es limitada.

I3 no implica por sí sola Estado D o E.

---

# 9. Definición de I4 — Crítica

Una restricción es I4 cuando:

- la consecuencia puede ser severa;
- la exposición es material;
- la capacidad de absorción, sustitución, continuidad o respuesta es insuficiente.

I4 no implica por sí sola Estado E.

Ejemplo:

```text
I4 + S1
```

puede seguir siendo una restricción local.

---

# 10. Alcance

El alcance describe hasta dónde llega materialmente una restricción.

Escala:

```text
S1 — Local
S2 — Funcional
S3 — Interfuncional
S4 — Organizacional
```

Alcance no equivale a gravedad.

---

# 11. Definición de S1 — Local

Una restricción es S1 cuando:

- su efecto material está contenido en un ámbito delimitado;
- no existe evidencia suficiente de propagación material fuera de ese ámbito.

Puede afectar:

- una persona;
- un activo;
- una relación;
- una ubicación;
- una capacidad concreta;
- una actividad.

La alta intensidad no convierte automáticamente S1 en S4.

---

# 12. Definición de S2 — Funcional

Una restricción es S2 cuando:

- afecta materialmente una función relevante para la organización;
- la consecuencia permanece principalmente contenida en dicha función;
- no existe evidencia suficiente de propagación interfuncional.

La función debe ser material para esa organización concreta.

No existe una lista universal de funciones igualmente importantes para todas las organizaciones.

---

# 13. Definición de S3 — Interfuncional

Una restricción es S3 cuando:

- afecta materialmente a más de una función;
- o existe una ruta explícita de propagación material entre funciones.

Ejemplo:

```text
Dependencia
    ↓
Operaciones
    ↓
Ventas
```

La mera relación conceptual entre funciones no basta.

Debe existir:

- impacto material compartido;
- o ruta explícita de propagación mediante reglas permitidas.

---

# 14. Definición de S4 — Organizacional

Una restricción es S4 cuando:

- afecta varias funciones materiales;
- existe propagación o interdependencia material;
- la restricción condiciona una capacidad esencial de la organización.

Capacidades esenciales pueden incluir, según el contexto:

- continuidad;
- funcionamiento operativo;
- generación de ingresos;
- capacidad financiera;
- capacidad de decisión;
- capacidad de adaptación.

S4 no significa automáticamente E.

---

# 15. Regla de mayor alcance sostenible

El motor utiliza el mayor alcance que pueda sostenerse con las condiciones y evidencias disponibles.

No puede utilizar un alcance hipotético.

No puede hacer:

```text
S1
→ "probablemente S4"
```

sin reglas y evidencia suficientes.

---

# 16. Restricción

Una restricción es la representación consolidada del efecto material de una o más configuraciones.

Estructura conceptual:

```text
Restriccion {
    tipo
    intensidad
    alcance
    configuraciones[]
    acoplamientos[]
    confianza
    cobertura
    evidencias[]
}
```

---

# 17. Tipos de restricción

Las configuraciones pueden proyectarse principalmente sobre:

```text
Continuidad
Sustitución
Decisión
Conocimiento
Absorción
Propagación
Detección
Respuesta
```

Estas etiquetas no constituyen nuevas dimensiones del producto.

Son categorías internas del motor.

---

# 18. Regla de solapamiento

Dos configuraciones pueden identificar el mismo fenómeno estructural.

En ese caso:

> sus efectos no se suman.

Ejemplo:

```text
K03
K04
K05
```

cuando proceden de la misma persona y la misma estructura:

```text
Persona X
 ├── conocimiento
 ├── decisión
 └── relación
```

deben consolidarse.

---

# 19. Regla de independencia

Si dos restricciones no están unidas por:

- una relación catalogada;
- una ruta de propagación explícita;
- una estructura común identificable mediante las reglas;

permanecen independientes.

Ejemplo:

```text
R1
R2
R3
```

no se convierten en una sola restricción únicamente porque existan simultáneamente.

---

# 20. ConstraintCluster

A efectos de implementación, un conjunto de restricciones conectadas se representa como:

```text
ConstraintCluster
```

No es una nueva categoría metodológica.

Es una entidad técnica para representar una estructura reconocida.

Ejemplo:

```text
K01
+
K07
+
A04
→
Cluster
```

---

# 21. Creación de Cluster

Se crea o actualiza un Cluster cuando:

```text
configuración válida
+
acoplamiento válido
+
condiciones del acoplamiento satisfechas
```

No se crea por:

- semejanza semántica;
- cantidad de K;
- opinión del LLM;
- proximidad temporal sin relación metodológica.

---

# 22. Efecto de los acoplamientos

Un acoplamiento puede:

1. consolidar restricciones;
2. aumentar el alcance;
3. aumentar la intensidad consolidada cuando la regla lo permita.

Un acoplamiento nunca es una penalización independiente.

---

# 23. A01 en el Estado

A01:

```text
Dependencia ↔ absorción
```

puede hacer que una restricción de dependencia tenga mayor intensidad o alcance cuando la capacidad de absorción sea insuficiente y la relación esté demostrada.

No puede transformar automáticamente:

```text
absorción baja
→
K07
```

---

# 24. A02 en el Estado

A02:

```text
Dependencia ↔ continuidad
```

puede ampliar el alcance de una restricción cuando la dependencia está conectada con un punto material de continuidad.

Puede producir:

```text
S1 → S2
S2 → S3
```

cuando las condiciones se cumplen.

---

# 25. A03 en el Estado

A03:

```text
Persona ↔ continuidad
```

puede consolidar K03/K04/K05 cuando proceden de la misma estructura personal y de continuidad.

No genera una tercera penalización.

---

# 26. A04 en el Estado

A04:

```text
Dependencia ↔ finanzas
```

requiere una relación económica/material explícita.

Ejemplo:

```text
Dependencia
    ↓
Ingresos
    ↓
Caja
    ↓
Rigidez financiera
```

Puede generar un Cluster con mayor alcance y/o intensidad.

No equivale a:

```text
K01 + K07 + A04
```

como suma.

---

# 27. A05 en el Estado

A05:

```text
Interdependencia ↔ propagación
```

puede extender:

```text
S2 → S3
S3 → S4
```

cuando la ruta está suficientemente sustentada.

El alcance aumenta por estructura, no por número de nodos.

---

# 28. A06 en el Estado

A06:

```text
Detección ↔ respuesta
```

consolida K09 y K10 cuando pertenecen al mismo episodio o a una secuencia causal metodológicamente válida.

Puede modificar la intensidad y/o alcance de la restricción adaptativa.

No puede inferir una incapacidad general de adaptación a partir de una declaración aislada.

---

# 29. No doble conteo

Una observación puede participar en una configuración.

No puede producir simultáneamente:

```text
efecto individual
+
efecto completo de la configuración
```

sobre el mismo fenómeno.

---

# 30. No compensación

Una fortaleza en una parte de la organización no elimina automáticamente una restricción en otra.

Ejemplo:

```text
Finanzas robustas
+
Persona crítica
```

no produce:

```text
"todo está bien"
```

Pero tampoco:

```text
"toda la organización es crítica"
```

La restricción permanece localizada salvo que el alcance demuestre lo contrario.

---

# 31. No acumulación por cantidad

No se permite:

```text
B + B + B = D
```

si las tres restricciones son independientes.

La cantidad de problemas no genera una nueva severidad.

Solo una estructura reconocida puede elevar el Estado.

---

# 32. Dominancia estructural

Si un Cluster o una restricción independiente satisface por sí mismo una clase superior, las restricciones inferiores no lo compensan.

Ejemplo:

```text
D + C + B
→
D
```

si D está metodológicamente sustentado.

Esto no significa:

> "tomar el peor valor".

Significa:

> una restricción suficiente no queda anulada por otras restricciones menores.

---

# 33. Clasificación ordinal del Estado

La representación visual utiliza:

```text
A — ROBUSTO
B — ESTABLE
C — CONDICIONADO
D — RESTRINGIDO
E — CRÍTICO
ND — NO DETERMINADO
```

La semántica final de las etiquetas queda pendiente de validación de producto y piloto.

ND no forma parte de la escala A–E.

Es una condición epistemológica separada.

---

# 34. Clasificación base

La matriz de trabajo es:

| Intensidad | S1 | S2 | S3 | S4 |
|---|---|---|---|---|
| I1 | A | B | B | C |
| I2 | B | C | C | D |
| I3 | C | C | D | D* |
| I4 | C | D | D | D* |

La matriz es una regla de clasificación base.

No produce E automáticamente.

---

# 35. Condiciones de E — Crítico

Para E deben cumplirse:

```text
E1 — materialidad crítica
E2 — alcance organizacional
E3 — absorción/continuidad insuficiente
E4 — evidencia suficiente
```

Formalmente:

```text
E = E1 AND E2 AND E3 AND E4
```

---

# 36. E1 — Materialidad crítica

Debe existir una consecuencia crítica para una capacidad esencial.

No basta:

- valor monetario elevado;
- importancia subjetiva;
- preocupación de dirección.

---

# 37. E2 — Alcance organizacional

La estructura debe alcanzar S4 o satisfacer una condición explícita equivalente definida por el método.

Una restricción I4/S1 no es automáticamente E.

---

# 38. E3 — Absorción o continuidad insuficiente

Debe existir evidencia de que la organización no dispone de capacidad suficiente para absorber o contener la consecuencia crítica.

Puede incluir:

- sustitución insuficiente;
- capacidad de contingencia insuficiente;
- absorción financiera insuficiente;
- imposibilidad de mantener continuidad.

---

# 39. E4 — Evidencia suficiente

La clasificación E requiere evidencia suficiente para sostener:

- materialidad;
- alcance;
- insuficiencia de absorción/continuidad.

Una declaración aislada no basta cuando las reglas exigen evidencia adicional.

---

# 40. D — Restringido

D representa:

> una estructura de restricciones material con alcance interfuncional u organizacional, sin que todavía se sostengan todas las condiciones para E.

D puede existir con:

```text
I2/S4
I3/S3
I3/S4
I4/S3
```

según las condiciones específicas del Cluster y la calibración.

---

# 41. C — Condicionado

C representa:

> una restricción material que condiciona una parte relevante de la organización, sin existir evidencia suficiente de restricción estructural amplia.

Puede corresponder, según contexto, a:

```text
I2/S2
I2/S3
I3/S1
I3/S2
I4/S1
```

---

# 42. B — Estable

B representa:

> restricciones presentes pero limitadas, localizadas o suficientemente absorbibles.

No significa perfección.

---

# 43. A — Robusto

A representa:

> ausencia de una restricción material suficiente para condicionar el Estado observado, con cobertura suficiente para sostener esta afirmación.

No significa:

> riesgo inexistente.

No significa:

> empresa excelente.

No significa:

> empresa sin fragilidad futura.

---

# 44. ND — No determinado

ND se utiliza cuando la información disponible no permite sostener una clasificación responsable.

Puede deberse a:

- desconocimientos críticos;
- contradicciones materiales;
- cobertura insuficiente;
- ausencia de información esencial.

ND no es el nivel peor.

ND significa:

> no podemos determinarlo con suficiente base.

---

# 45. Regla de incertidumbre

La incertidumbre no puede transformarse en severidad.

```text
UNKNOWN
≠
LOW
≠
CRITICAL
```

La falta de información puede impedir una clasificación, produciendo ND.

---

# 46. Regla de contradicción

Si una contradicción material afecta una condición esencial del Estado:

```text
contradicción
→ reevaluación
```

No se promedia.

El sistema puede producir ND si la clasificación ya no puede sostenerse.

---

# 47. Confianza

La Confianza se mantiene separada del Estado.

Ejemplo válido:

```text
Estado = C
Confianza = Alta
Cobertura = Parcial
```

No existe contradicción.

---

# 48. Cobertura

La Cobertura se mantiene separada del Estado.

Más cobertura:

```text
puede aumentar la calidad de la lectura
```

pero no:

```text
aumentar automáticamente la severidad
```

---

# 49. Evolución

El Motor de Estado V2 no determina automáticamente:

- mejora;
- deterioro;
- persistencia;
- resolución.

Estas propiedades pertenecen a Memoria/Evolución.

El Motor produce la lectura actual.

La comparación temporal se realiza fuera del cálculo de primera lectura.

---

# 50. Primera lectura

Una primera lectura puede producir:

- configuraciones;
- acoplamientos;
- restricciones;
- Estado;
- Confianza;
- Cobertura;
- desconocimientos;
- contradicciones.

No puede afirmar:

- resuelto;
- desactualizado;
- aprendizaje;
- deterioro;
- mejora;
- causalidad temporal.

---

# 51. Determinismo

Para:

```text
mismas observaciones
+
misma versión metodológica
+
misma calibración
```

el resultado debe ser idéntico.

---

# 52. Invariancia al orden

Cambiar el orden de las Observaciones no puede cambiar:

- configuraciones;
- acoplamientos;
- restricciones;
- Estado.

---

# 53. Invariancia documental

Añadir evidencia redundante o irrelevante no debe cambiar el Estado.

Puede cambiar:

- Confianza;
- Cobertura;

si esas nuevas evidencias lo justifican.

---

# 54. Sensibilidad estructural

Cambiar una condición material debe poder cambiar:

- estado de configuración;
- intensidad;
- alcance;
- acoplamiento;
- Estado.

cuando las condiciones lo justifiquen.

---

# 55. Seguridad metodológica frente a IA

La IA puede:

- extraer observaciones;
- normalizar información;
- detectar contradicciones;
- explicar resultados;
- proponer hipótesis para E11/E12.

La IA no puede:

- crear K11;
- crear A07;
- modificar reglas;
- modificar umbrales;
- decidir que una nueva relación afecta al Estado;
- recalcular históricamente sin versión;
- alterar una Reading.

---

# 56. Trazabilidad

Toda clasificación debe poder reconstruirse:

```text
Estado
↓
restricción
↓
Cluster
↓
K/A
↓
reglas activadas
↓
Observaciones
↓
Evidencias
↓
versión metodológica
↓
versión de calibración
```

---

# 57. Auditoría

El motor debe generar referencias suficientes para reconstruir:

- qué se observó;
- qué no se observó;
- qué reglas se aplicaron;
- qué versión estaba vigente;
- qué resultado se produjo.

El sistema no puede borrar silenciosamente una lectura histórica.

---

# 58. Calibración

Los siguientes elementos quedan parametrizables:

- umbrales de concentración;
- sustituibilidad;
- materialidad;
- intensidad;
- alcance;
- absorción;
- contexto/tamaño;
- temporalidad de K09/K10.

Los parámetros deben pertenecer a una VersionCalibracion.

No deben quedar ocultos dentro del código.

---

# 59. Validación

La calibración deberá validarse mediante:

- casos adversariales;
- pruebas sintéticas;
- casos reales;
- pilotos;
- análisis de sensibilidad;
- análisis por tamaño/contexto.

El razonamiento conceptual no sustituye la validación empírica.

---

# 60. Tests obligatorios

El Motor de Estado V2 debe superar como mínimo:

### Adversariales

- concentración alta + absorción alta;
- concentración alta + absorción baja;
- misma persona crítica + distinta sustituibilidad;
- misma liquidez + distinta rigidez;
- mismo evento + distinta detección;
- mismas configuraciones + distinto acoplamiento.

### Integridad

- no doble conteo;
- N/A;
- desconocimiento;
- contradicción;
- invariancia al orden;
- invariancia documental;
- determinismo;
- replay;
- versionado.

---

# 61. Tests de consolidación

### T7 — Tres restricciones independientes

```text
R1 = I2/S1
R2 = I2/S2
R3 = I1/S2
```

Sin relaciones catalogadas:

```text
no se agregan por cantidad
```

### T8 — Tres configuraciones de una misma estructura

```text
K03 + K04 + K05
```

si proceden de la misma persona y estructura:

```text
una restricción consolidada
```

### T9 — Tres restricciones conectadas

Si existe una relación catalogada que conecta las estructuras:

```text
Cluster
→ reevaluación de intensidad y alcance
```

---

# 62. Tests D/E

### T10

```text
I3/S4
+
absorción suficiente
→ D
```

### T11

```text
I3/S4
+
absorción insuficiente
+
capacidad esencial comprometida
+
evidencia suficiente
→ E
```

### T12

```text
I4/S3
sin evidencia organizacional suficiente
→ D
```

### T13

```text
I4/S4
+
E1
+
E2
+
E3
+
E4
→ E
```

---

# 63. Resultado del motor

La salida mínima conceptual es:

```text
{
  estado,
  restricciones,
  clusters,
  configuraciones,
  acoplamientos,
  confianza,
  cobertura,
  desconocimientos,
  contradicciones,
  trazabilidad
}
```

El esquema exacto de implementación queda en:

```text
03_motor/CONTRATO_DATOS_V2.md
```

---

# 64. Relación con el producto

El CEO no ve esta estructura completa.

El Observatorio puede reducirla a:

```text
C
CONDICIONADO
↓
```

más:

```text
cambio principal
confianza
cobertura
```

La profundidad se abre progresivamente.

---

# 65. Regla de diseño

La complejidad del motor debe quedar debajo de la interfaz.

El CEO no debe tener que entender:

- K01;
- A04;
- I3;
- S3;
- Cluster.

Salvo cuando quiera profundizar.

---

# 66. Estado del documento

## CERRADO CONCEPTUALMENTE

- transición Configuración → Restricción;
- Intensidad I1–I4;
- Alcance S1–S4;
- consolidación;
- ConstraintCluster;
- no doble conteo;
- no compensación;
- no acumulación por cantidad;
- A–E;
- ND;
- condiciones de E;
- separación Estado/Confianza/Cobertura;
- determinismo;
- trazabilidad.

## PENDIENTE DE VALIDACIÓN

- umbrales;
- calibración contextual;
- criterios cuantitativos de materialidad;
- frontera precisa en casos límite;
- semántica final de A–E.

## VALIDAR EN CÓDIGO

- determinismo;
- invariancia de orden;
- invariancia documental;
- integridad de clusters;
- no doble conteo;
- replay;
- trazabilidad.

## VALIDAR EN PILOTO

- distribución A–E;
- comprensión de la clasificación;
- sensibilidad a cambios reales;
- estabilidad temporal;
- utilidad para dirección.

---
