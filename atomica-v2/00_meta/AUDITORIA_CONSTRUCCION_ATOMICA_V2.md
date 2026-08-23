documento: Auditoría de construcción ATÓMICA V2
version: 0.1.0
estado: CANÓNICO DE TRABAJO
capa: Meta
breadcrumb: atomica-core/atomica-v2/00_meta/AUDITORIA_CONSTRUCCION_ATOMICA_V2.md
fecha_actualizacion: 2026-08-23
---

# AUDITORÍA DE CONSTRUCCIÓN ATÓMICA V2

## 1. Propósito

Registrar el estado real del corpus entregado para iniciar la implementación del Motor V2, sin reabrir decisiones metodológicas ya cerradas.

## 2. Corpus recibido

El ZIP contiene actualmente:

```text
atomica-v2/
├── 01_metodologia/
│   ├── CONFIGURACIONES_V2.md
│   ├── ACOPLAMIENTOS_V2.md
│   └── MOTOR_ESTADO_V2.md
├── 03_motor/
│   ├── CONTRATO_DATOS.md
│   ├── ESPECIFICACION_PRUEBAS_MOTOR_V2.md
│   └── RESULTADOS_PRUEBAS_MOTOR_V2.md
└── 04_memoria/
    └── MEMORIA_EVOLUCION.md
```

No hay código de implementación en el ZIP.

No hay todavía una carpeta `02_diagnostico/`.

## 3. Decisiones que NO se reabren

Quedan fuera de esta auditoría:

- catálogo K01–K10;
- catálogo A01–A06;
- modelo de restricciones y clusters;
- no doble conteo;
- no compensación;
- escala ordinal A–E + ND;
- separación Estado / Confianza / Cobertura;
- memoria longitudinal;
- E11/E12;
- Replay;
- trazabilidad;
- abandono del IFO numérico.

## 4. Hallazgos de construcción

### H01 — No existe implementación del motor

Estado: BLOQUEANTE PARA EJECUCIÓN, NO PARA METODOLOGÍA.

El corpus contiene especificación, contrato y pruebas, pero ningún código ejecutable.

Acción:

Construir el motor a partir del contrato y de los tests existentes.

### H02 — Falta `02_diagnostico/`

Estado: PENDIENTE.

No se debe inventar una nueva arquitectura diagnóstica. La carpeta debe contener únicamente los contratos V2 necesarios para producir Observaciones a partir del diagnóstico híbrido ya definido.

Acción:

Antes de implementar la interfaz completa, localizar/recuperar la especificación diagnóstica V2 existente. Si no existe en el corpus, crear solo el contrato mínimo de salida del diagnóstico hacia `Observacion`.

### H03 — Inconsistencia de nombres de archivo

Los archivos físicos son:

```text
03_motor/CONTRATO_DATOS.md
04_memoria/MEMORIA_EVOLUCION.md
```

pero sus breadcrumbs declaran:

```text
CONTRATO_DATOS_V2.md
MEMORIA_EVOLUCION_V2.md
```

Estado: CORREGIR ANTES DE CONGELAR REPOSITORIO.

Acción:

Renombrar físicamente a:

```text
03_motor/CONTRATO_DATOS_V2.md
04_memoria/MEMORIA_EVOLUCION_V2.md
```

sin modificar contenido por este motivo.

### H04 — Diferencia entre API pública y entradas internas del State Engine

`ESPECIFICACION_PRUEBAS_MOTOR_V2.md` define una función pública:

```text
evaluar(
  organización,
  observaciones,
  evidencias,
  versión_metodología,
  versión_calibración
) → lectura
```

`MOTOR_ESTADO_V2.md` enumera además Resultados K01–K10 y A01–A06 entre las entradas del motor.

Esto no es una contradicción metodológica.

Resolución:

```text
API pública
    ↓
evaluar(organización, observaciones, evidencias, versiones)
    ↓
Evaluador K
    ↓
Evaluador A
    ↓
State Engine
    ↓
Lectura
```

Los resultados K/A son entradas internas del componente de Estado, no necesariamente parámetros de la API pública.

Estado: CERRADO COMO DECISIÓN DE ARQUITECTURA DE SOFTWARE.

### H05 — Calibración

Los valores cuantitativos definitivos no están cerrados.

Estado: PENDIENTE DE VALIDACIÓN.

No introducir números arbitrarios para aparentar cierre.

El motor debe consumir `version_calibracion` como configuración versionada.

### H06 — Forma organizativa

El contrato actual de `Organizacion` contiene:

```text
id
nombre
sector
tramo_tamano
contexto
```

No existe un campo explícito `forma_organizativa`.

Estado: PENDIENTE DE VALIDACIÓN.

No añadirlo automáticamente. Primero debe comprobarse si el diagnóstico/perfil ya representa este dato dentro de `contexto` o mediante otro contrato existente.

### H07 — Tests conceptuales frente a tests ejecutables

`RESULTADOS_PRUEBAS_MOTOR_V2.md` registra resultados conceptuales de los casos adversariales.

Estado: NO EQUIVALE A VALIDACIÓN DEL CÓDIGO.

Acción:

Los mismos casos deben convertirse en tests automatizados y sus resultados quedar separados de los resultados conceptuales históricos.

## 5. Contrato ejecutable de referencia

La implementación debe seguir esta secuencia:

```text
Organización
Observaciones
Evidencias
Versión metodología
Versión calibración
        ↓
Evaluador K01–K10
        ↓
Evaluador A01–A06
        ↓
Consolidación de restricciones
        ↓
Clusters
        ↓
Intensidad + Alcance
        ↓
Clasificación A–E / ND
        ↓
Confianza + Cobertura
        ↓
Trazabilidad
        ↓
Lectura inmutable
```

## 6. Invariantes obligatorios

El código debe impedir como mínimo:

```text
N/A → fragilidad
UNKNOWN → fragilidad
contradicción → promedio
más documentos → más severidad automáticamente
cantidad de K → severidad automáticamente
cantidad de A → severidad automáticamente
LLM → creación de reglas metodológicas
K no catalogada → producción
A no catalogado → producción
```

Y debe garantizar:

```text
misma entrada + mismas versiones = mismo resultado
cambio documental irrelevante = mismo Estado
cambio estructural relevante = posibilidad de cambio
Lectura histórica = inmutable
Replay = reproducible
```

## 7. Estado de cierre

### CERRADO

- metodología estructural;
- K01–K10;
- A01–A06;
- modelo de Estado;
- escala A–E / ND;
- memoria y evolución;
- trazabilidad conceptual;
- contrato conceptual de datos;
- especificación conceptual de pruebas.

### PENDIENTE DE VALIDACIÓN

- calibración numérica;
- umbrales de determinabilidad/cobertura;
- forma organizativa si no está resuelta por el contexto existente;
- comportamiento en organizaciones reales.

### SIGUIENTE FASE

Implementación.

## 8. Regla de trabajo desde este punto

No crear nuevos documentos metodológicos salvo que la implementación descubra una contradicción real.

No ampliar K/A.

No recuperar IFO numérico.

No introducir nuevas dimensiones.

No utilizar una IA para decidir reglas metodológicas.

La implementación debe demostrar que el corpus actual puede ejecutarse de forma determinista, trazable y reproducible.
