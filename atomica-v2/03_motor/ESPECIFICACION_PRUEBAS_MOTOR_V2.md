documento: Especificación de Pruebas del Motor V2
version: 0.1.0
estado: CANDIDATO
capa: Motor
breadcrumb: atomica-core/atomica-v2/03_motor/ESPECIFICACION_PRUEBAS_MOTOR_V2.md
fecha_actualizacion: 2026-08-21
---

# ESPECIFICACIÓN DE PRUEBAS DEL MOTOR V2

## 1. Propósito

Garantizar que la implementación del Motor respeta las reglas metodológicas de ATÓMICA V2 y detectar regresiones antes de modificar una versión productiva.

El Motor debe ser:

- determinista;
- trazable;
- explicable;
- sensible a cambios estructurales;
- insensible a cambios irrelevantes;
- reproducible por versión.

---

# 2. Función principal de prueba

```text
evaluar(
  organización,
  observaciones,
  evidencias,
  versión_metodología,
  versión_calibración
)
→ lectura
```

La misma entrada con las mismas versiones debe producir el mismo resultado.

---

# 3. Propiedades de aceptación

## P1 — Determinismo

Misma entrada + misma metodología + misma calibración = mismo resultado.

## P2 — Invarianza

Cambios irrelevantes no cambian el Estado.

## P3 — Sensibilidad estructural

Cambios estructurales relevantes sí pueden cambiar la lectura.

## P4 — No doble conteo

Un fenómeno reconocido como configuración no vuelve a penalizarse por sus componentes para el mismo efecto.

## P5 — No compensación

Una fortaleza en una parte de la organización no elimina automáticamente una restricción crítica localizada.

## P6 — Incertidumbre

La ausencia de información no se transforma en fragilidad.

## P7 — Reproducibilidad

El resultado puede reconstruirse a partir de la entrada y las versiones vigentes.

## P8 — Integridad histórica

Las lecturas históricas no se modifican silenciosamente.

---

# 4. Casos adversariales

## T1 — Concentración alta + absorción alta

Entrada:

```text
concentración = alta
sustituibilidad = baja
absorción = alta
materialidad = alta
```

Resultado esperado:

```text
K01 = RELEVANTE
A01 = NO ACTIVO
```

a menos que la calibración establezca condiciones adicionales compatibles.

Debe evitarse que la alta concentración se convierta automáticamente en Estado crítico.

Resultado: **PASS** si se mantiene la separación entre dependencia y absorción.

---

## T2 — Concentración alta + absorción baja

Misma estructura, pero:

```text
absorción = baja
```

Resultado esperado:

```text
K01 = RELEVANTE o CRÍTICA
A01 = ACTIVO
```

El resultado debe ser igual o más restringido que T1 cuando todo lo demás permanezca constante.

Resultado: **PASS** si cambia debido al acoplamiento y no por acumulación de puntos.

---

## T3 — Misma persona crítica + distinta sustituibilidad

### T3-A

```text
conocimiento = crítico
decisión = crítica
relación = crítica
sustituibilidad = alta
```

### T3-B

```text
conocimiento = crítico
decisión = crítica
relación = crítica
sustituibilidad = baja
```

Resultado esperado:

```text
T3-B >= T3-A
```

en relevancia/intensidad de la restricción personal.

No se permite que la persona sea declarada crítica únicamente por su cargo.

Resultado: **PASS** si la sustituibilidad modifica estructuralmente la evaluación.

---

## T4 — Misma liquidez + distinta rigidez financiera

### T4-A

```text
liquidez = igual
deuda = baja
vencimientos = distribuidos
ciclo_caja = estable
```

### T4-B

```text
liquidez = igual
deuda = alta
vencimientos = concentrados
ciclo_caja = tensionado
```

Resultado esperado:

```text
K07_A < K07_B
```

La liquidez puntual no puede sustituir el análisis estructural de K07.

Resultado: **PASS** si el motor diferencia ambas estructuras.

---

## T5 — Mismo evento + distinta detección/respuesta

### T5-A

```text
evento = material
detección = temprana
respuesta = suficiente
```

### T5-B

```text
evento = material
detección = tardía
respuesta = insuficiente
```

Resultado esperado:

```text
A06_A = NO ACTIVO
A06_B = ACTIVO
```

K09/K10 y A06 requieren evidencia suficiente para estados altos.

Resultado: **PASS** si el comportamiento se distingue sin inventar evidencia.

---

## T6 — Mismas configuraciones + distinto acoplamiento

### T6-A

```text
K01
K07
```

sin relación material suficiente para A04.

### T6-B

```text
K01
K07
A04
```

con relación económica explícita.

Resultado esperado:

```text
Estado_A puede diferir de Estado_B
```

si el acoplamiento modifica materialmente la estructura.

No se permite:

```text
K01 + K07 + A04 = tres penalizaciones
```

Resultado: **PASS**.

---

# 5. T7 — Tres configuraciones independientes

```text
K04 = I2/S1
K06 = I2/S2
K07 = I1/S2
```

Sin acoplamientos ni rutas de propagación.

No se permite elevar Estado únicamente por recuento:

```text
K04 + K06 + K07 ≠ mayor severidad por cantidad
```

Resultado: **PASS** si las restricciones permanecen independientes.

---

# 6. T8 — Varias K derivadas de una misma estructura

Ejemplo:

```text
misma persona
↓
conocimiento crítico
↓
decisión crítica
↓
relación crítica
↓
baja sustituibilidad
```

Pueden activarse K03, K04 y K05, pero si proceden de la misma estructura no se contabilizan como tres restricciones independientes.

Resultado: **PASS** si se consolida el efecto sin doble conteo.

---

# 7. T9 — Tres restricciones independientes no conectadas

```text
K04 = I2/S1
K06 = I2/S1
K07 = I2/S1
```

Sin relaciones catalogadas.

Resultado esperado: permanecen independientes.

No se permite:

```text
3 restricciones independientes → D/E
```

por acumulación.

Resultado: **PASS**.

---

# 8. T10 — Tres configuraciones conectadas

Se utiliza únicamente el catálogo cerrado de acoplamientos.

```text
K02
↓ A02
K06
```

y:

```text
K02
↓ A05
K08
```

con condiciones materiales y rutas explícitas de continuidad/propagación.

Resultado esperado:

```text
K02 + K06 + K08
→ Cluster conectado
```

El Cluster puede tener mayor alcance que cada configuración aislada cuando las reglas del acoplamiento lo permiten.

No se admite inventar una relación K04 → K06 → K07, porque el catálogo A01–A06 no contiene esas relaciones.

Resultado: **PASS** si el cambio procede de estructura y no de recuento.

---

# 9. T11 — I3/S4 con absorción suficiente

```text
intensidad = I3
alcance = S4
absorción = suficiente
```

Resultado esperado:

```text
D
```

No E automáticamente.

---

# 10. T12 — I3/S4 con absorción insuficiente

```text
intensidad = I3
alcance = S4
capacidad esencial comprometida
absorción = insuficiente
evidencia = suficiente
```

Resultado esperado:

```text
D
```

I3/S4 no puede producir E automáticamente. E exige I4/S4 y las condiciones E1–E4 definidas en MOTOR_ESTADO_V2.md.

---

# 11. T13 — I4/S3 sin alcance organizacional demostrado

```text
intensidad = I4
alcance = S3
```

Sin evidencia suficiente de afectación organizacional.

Resultado esperado:

```text
D
```

No E automático.

---

# 12. T14 — I4/S4 con condiciones críticas

```text
intensidad = I4
alcance = S4
capacidad esencial comprometida
absorción insuficiente
evidencia suficiente
```

Resultado esperado:

```text
E
```

---

# 13. T15 — D + D + D independientes

Tres clusters D sin relación catalogada.

Resultado esperado:

```text
D
```

No E por acumulación.

---

# 14. T16 — Corrección de una condición crítica

Una lectura produce E.

Una nueva evidencia material demuestra que una condición crítica ya no se satisface.

El siguiente cálculo puede pasar a D u otra clase compatible.

La lectura histórica E permanece inmutable.

Resultado: **PASS** si la nueva lectura cambia sin reescribir la histórica.

---

# 15. Regresión documental

## R1 — Orden

Las mismas observaciones en distinto orden producen el mismo resultado.

## R2 — Redacción

Cuando textos distintos se normalizan a la misma Observación estructurada, producen el mismo resultado.

## R3 — Evidencia irrelevante

Documentación que no cambia ninguna condición metodológica no modifica el Estado.

## R4 — Evidencia contradictoria

Una contradicción material debe producir estado CONTRADICTORIO o una resolución explícita. Nunca se promedia.

## R5 — N/A

```text
N/A ≠ 0
```

## R6 — Desconocimiento

```text
DESCONOCIDO ≠ FRAGILIDAD
```

## R7 — Igual estructura, más documentación

El Estado permanece igual si la documentación no aporta información material nueva.

## R8 — Igual estructura, nueva evidencia material

Puede cambiar el Estado si cambia una condición metodológica material.

## R9 — Misma K, distinta estructura

La misma configuración nominal puede producir distinta intensidad/alcance cuando cambian las condiciones que la constituyen.

## R10 — Mismo fenómeno, distinto contexto

El resultado puede variar solo si la calibración contextual explícita así lo establece.

---

# 16. Pruebas longitudinales

## L1 — Persistencia

Una configuración que permanece bajo los criterios temporales establecidos puede clasificarse como persistente.

## L2 — Emergencia

Una configuración ausente o desconocida en una lectura y relevante posteriormente puede clasificarse como emergente.

No implica automáticamente deterioro.

## L3 — Mejora

Requiere cambio estructural y evidencia suficiente.

## L4 — Cambio epistemológico

Mejor información sin cambio estructural no se clasifica como mejora organizativa.

## L5 — Resolución

Una configuración pasa a RESUELTA solo con evidencia suficiente de que ya no se satisfacen sus condiciones.

## L6 — Desactualización

La pérdida de vigencia de evidencia no equivale a resolución.

---

# 17. Pruebas de Replay

Una lectura histórica debe poder ejecutarse con una versión posterior del método.

El resultado original no se modifica.

Debe conservarse:

- resultado original;
- resultado Replay;
- versión original;
- versión Replay;
- diferencias;
- finalidad.

---

# 18. Pruebas de auditoría

Debe poder reconstruirse:

1. qué información estaba disponible;
2. qué información faltaba;
3. qué reglas estaban vigentes;
4. qué resultado produjo el Motor;
5. qué información se mostró al usuario;
6. qué decisión registró el usuario;
7. qué ocurrió posteriormente;
8. qué modificaciones metodológicas se produjeron después.

---

# 19. Prueba de decisión

Una decisión del CEO debe permanecer identificada como decisión del CEO.

No puede transformarse retrospectivamente en recomendación o decisión de ATÓMICA.

---

# 20. Prueba de integridad histórica

Intentar modificar una Lectura histórica debe:

- bloquearse; o
- producir una corrección/versionado explícito;
- generar el Evento de Auditoría correspondiente.

---

# 21. Prueba de IA

La IA no puede:

- crear K11/K12;
- crear A07/A08;
- modificar umbrales;
- modificar reglas;
- inventar relaciones;
- cambiar el Estado por criterio libre.

Puede producir una propuesta metodológica para E11/E12.

---

# 22. Criterio de aprobación

Una versión del Motor no pasa a producción si falla cualquiera de estas categorías críticas:

- determinismo;
- doble conteo;
- N/A;
- desconocimiento;
- contradicción;
- invariancia documental;
- sensibilidad estructural;
- integridad histórica;
- versionado;
- Replay.

---

# 23. Estado del documento

CANDIDATO.

Debe ejecutarse contra una implementación real antes de pasar a FROZEN.
