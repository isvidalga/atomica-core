documento: Resultados de Pruebas del Motor V2
version: 0.1.0
estado: EJECUCION CONCEPTUAL
capa: Motor
breadcrumb: atomica-core/atomica-v2/03_motor/RESULTADOS_PRUEBAS_MOTOR_V2.md
fecha_actualizacion: 2026-08-22
---

# RESULTADOS DE PRUEBAS DEL MOTOR V2

## 1. Propósito

Registrar la ejecución conceptual de los seis casos adversariales principales antes de implementar el motor en código.

Esta ejecución verifica la coherencia entre:

- CONFIGURACIONES_V2.md;
- ACOPLAMIENTOS_V2.md;
- MOTOR_ESTADO_V2.md;
- ESPECIFICACION_PRUEBAS_MOTOR_V2.md.

No sustituye los tests automatizados.

---

# 2. Hallazgo previo al ensayo

Antes de ejecutar T1–T6 se detectó una contradicción real en la especificación de pruebas.

La versión anterior de T12 indicaba:

```text
I3/S4 + absorción insuficiente + capacidad esencial comprometida + evidencia suficiente → E
```

Pero MOTOR_ESTADO_V2 establece que E requiere:

```text
I4 AND S4 AND E1 AND E2 AND E3 AND E4
```

Por tanto, T12 no podía exigir E.

**Corrección aplicada:**

```text
I3/S4 + condiciones críticas → D
```

La condición E queda reservada a I4/S4 con E1–E4.

Estado del hallazgo: **CORREGIDO**.

---

# 3. Criterio de lectura

Se considera PASS cuando el comportamiento esperado se desprende de reglas explícitas del motor y no de una interpretación libre.

Se considera FAIL cuando:

- el motor contradice una regla cerrada;
- aparece doble conteo;
- un acoplamiento se comporta como penalización independiente;
- la ausencia de información se convierte en fragilidad;
- una diferencia estructural no produce ninguna diferencia cuando debería producirla;
- una diferencia irrelevante produce una diferencia de Estado.

---

# 4. T1 — Concentración alta + absorción alta

## Entrada

```text
concentración = alta
sustituibilidad = baja
absorción = alta
materialidad = alta
```

## Resultado esperado

```text
K01 = RELEVANTE o CRÍTICA según calibración
A01 = NO ACTIVO
```

La dependencia puede ser material, pero la alta absorción impide activar A01 bajo las reglas actuales.

## Resultado del motor

```text
K01 = RELEVANTE
A01 = NO ACTIVO
Restricción = dependencia localizada
No se genera penalización adicional por absorción
```

## Fallo

Ninguno detectado.

## Corrección

No procede.

## Veredicto

**PASS**

---

# 5. T2 — Concentración alta + absorción baja

## Entrada

Igual que T1, sustituyendo:

```text
absorción = baja
```

## Resultado esperado

```text
K01 = RELEVANTE/CRÍTICA
A01 = ACTIVO
```

El resultado debe ser más restrictivo que T1 sin sumar penalizaciones independientes.

## Resultado del motor

```text
K01 = RELEVANTE
A01 = ACTIVO
Cluster = dependencia + absorción
```

La estructura pasa de una dependencia con capacidad de absorción a una dependencia acoplada a baja absorción.

## Fallo

Ninguno conceptual.

## Corrección

No procede.

## Veredicto

**PASS**

---

# 6. T3 — Misma persona crítica + distinta sustituibilidad

## T3-A

```text
conocimiento = crítico
decisión = crítica
relación = crítica
sustituibilidad = alta
```

## T3-B

```text
conocimiento = crítico
decisión = crítica
relación = crítica
sustituibilidad = baja
```

## Resultado esperado

```text
T3-B > T3-A
```

La baja sustituibilidad debe modificar la estructura de la restricción.

## Resultado del motor

```text
T3-A = persona relevante, sin K03 crítica
T3-B = K03 crítica/relevante según calibración
A03 = puede activarse cuando además existe continuidad material
```

El cargo por sí solo no activa K03.

## Fallo

Ninguno.

## Corrección

No procede.

## Veredicto

**PASS**

---

# 7. T4 — Misma liquidez + distinta rigidez financiera

## T4-A

```text
liquidez = igual
deuda = baja
vencimientos = distribuidos
ciclo_caja = estable
```

## T4-B

```text
liquidez = igual
deuda = alta
vencimientos = concentrados
ciclo_caja = tensionado
```

## Resultado esperado

```text
K07-A < K07-B
```

La liquidez puntual no determina por sí sola la rigidez financiera.

## Resultado del motor

```text
T4-A = K07 no crítica / baja según calibración
T4-B = K07 relevante o crítica según calibración
```

## Fallo

Ninguno conceptual.

## Corrección

No procede.

## Veredicto

**PASS**

---

# 8. T5 — Mismo evento + distinta detección/respuesta

## T5-A

```text
evento = material
detección = temprana
respuesta = suficiente
```

## T5-B

```text
evento = material
detección = tardía
respuesta = insuficiente
```

## Resultado esperado

```text
A06-A = NO ACTIVO
A06-B = ACTIVO
```

K09/K10 no deben alcanzar estados críticos sin evidencia suficiente de comportamiento.

## Resultado del motor

```text
T5-A = K09/K10 no relevantes; A06 no activo
T5-B = K09 + K10 potencialmente relevantes; A06 activo si la evidencia del episodio satisface la regla
```

## Fallo

Ninguno.

## Corrección

No procede.

## Veredicto

**PASS CONDICIONADO**

La implementación deberá impedir que una declaración genérica del CEO se convierta por sí sola en K09/K10 críticas.

---

# 9. T6 — Mismas configuraciones + distinto acoplamiento

## T6-A

```text
K01
K07
A04 = no activo
```

## T6-B

```text
K01
K07
A04 = activo
relación económica explícita
```

## Resultado esperado

```text
Estado-A puede diferir de Estado-B
```

Solo si el acoplamiento modifica materialmente intensidad y/o alcance.

## Resultado del motor

```text
T6-A = dos restricciones independientes
T6-B = Cluster dependencia-finanzas
```

El acoplamiento cambia la estructura sin contarse como tercera penalización.

## Fallo

Ninguno conceptual.

## Corrección

No procede.

## Veredicto

**PASS**

---

# 10. Resultado agregado T1–T6

| Caso | Resultado | Estado |
|---|---|---|
| T1 | esperado | PASS |
| T2 | esperado | PASS |
| T3 | esperado | PASS |
| T4 | esperado | PASS |
| T5 | esperado con condición de evidencia | PASS CONDICIONADO |
| T6 | esperado | PASS |

Resultado preliminar:

```text
5 PASS
1 PASS CONDICIONADO
0 FAIL
```

---

# 11. Qué NO demuestra esta ejecución

T1–T6 no demuestran todavía que:

- la calibración numérica sea correcta;
- A–E tenga una distribución adecuada;
- los umbrales funcionen en empresas reales;
- el motor sea estadísticamente fiable;
- el modelo sea válido longitudinalmente.

Demuestran únicamente que la arquitectura actual puede distinguir las estructuras adversariales definidas sin introducir contradicciones conceptuales evidentes.

---

# 12. Siguiente bloque obligatorio

Ejecutar T7–T16, especialmente:

1. independencia de restricciones;
2. consolidación K03/K04/K05;
3. propagación;
4. frontera D/E;
5. D + D + D sin acumulación;
6. corrección de una condición crítica;
7. Replay;
8. integridad histórica.

Después de T7–T16 se podrá decidir si:

```text
MOTOR_ESTADO_V2 = CERRADO
```

o si existe algún FAIL que obligue a modificarlo.

---

# 13. Estado del documento

**EJECUCION CONCEPTUAL**

No sustituye la ejecución automatizada sobre código.
