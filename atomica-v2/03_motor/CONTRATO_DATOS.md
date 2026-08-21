documento: Contrato de Datos V2
version: 0.1.0
estado: CANDIDATO
capa: Motor
breadcrumb: atomica-core/atomica-v2/03_motor/CONTRATO_DATOS_V2.md
fecha_actualizacion: 2026-08-21
---

# CONTRATO DE DATOS V2

## 1. Propósito

Define las entidades mínimas que conectan diagnóstico, Observaciones, Evidencias, Motor Metodológico, Estado, Memoria, Evolución, Auditoría y Producto.

La interfaz no contiene reglas metodológicas.

## 2. Arquitectura

```text
ENTRADAS
  ↓
OBSERVACIONES
  ↓
MOTOR V2
  ↓
LECTURA
  ↓
MEMORIA / EVOLUCIÓN
  ↓
PRODUCTO

AUDITORÍA
  ─────────────────────→
```

## 3. Entidades

El modelo mínimo contiene:

- Organización;
- Observación;
- Evidencia;
- Resultado de configuración;
- Resultado de acoplamiento;
- Lectura;
- Estado;
- Evolución;
- Decisión;
- Resultado posterior;
- Evento de auditoría;
- Versión metodológica;
- Versión de calibración;
- Replay.

## 4. Organización

```text
Organizacion {
  id
  nombre
  sector
  tramo_tamano
  contexto
  creado_en
  actualizado_en
}
```

`tramo_tamano` es un parámetro contextual, no una puntuación.

## 5. Observación

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

Una Observación es la unidad básica de entrada al Motor.

## 6. Estados de Observación

Como mínimo:

```text
VALIDA
INCIERTA
CONTRADICTORIA
SUPERADA
```

La implementación puede simplificar esta taxonomía sin alterar la semántica.

## 7. Fuente

Ejemplos:

```text
DECLARACION_DIRECCION
APORTACION_PERSONAS
DOCUMENTO
CONECTOR
DATO_SISTEMA
CONSULTOR
OTRA
```

La procedencia no convierte una declaración en un hecho.

## 8. Evidencia

```text
Evidencia {
  id
  organizacion_id
  tipo
  fuente
  referencia
  observada_en
  incorporada_en
  relevancia
  respalda[]
  contradice[]
  huella
}
```

La evidencia puede respaldar, contradecir o complementar. Su cantidad no aumenta automáticamente la severidad.

## 9. Resultado de configuración

```text
ResultadoConfiguracion {
  id
  configuracion_id
  estado
  intensidad_interna
  materialidad
  confianza
  referencias_observacion[]
  referencias_evidencia[]
  reglas_activadas[]
  reglas_no_satisfechas[]
  contexto
}
```

Los valores internos no son la clasificación visual del producto.

## 10. Configuraciones

El catálogo V2 contiene exactamente:

```text
K01 K02 K03 K04 K05 K06 K07 K08 K09 K10
```

No existen otras configuraciones productivas en V2.

## 11. Resultado de acoplamiento

```text
ResultadoAcoplamiento {
  id
  acoplamiento_id
  estado
  configuraciones_referenciadas[]
  intensidad_interna
  materialidad
  referencias_observacion[]
  referencias_evidencia[]
  reglas_activadas[]
}
```

Catálogo:

```text
A01 A02 A03 A04 A05 A06
```

## 12. Lectura

```text
Lectura {
  id
  organizacion_id
  creada_en
  observada_en
  version_metodologia
  version_calibracion
  configuraciones[]
  acoplamientos[]
  estado
  confianza
  cobertura
  desconocimientos[]
  contradicciones[]
  huella_entrada
  huella_salida
}
```

Una Lectura productiva es inmutable.

## 13. Estado

```text
Estado {
  clasificacion_global
  restricciones_locales[]
  restricciones_dominantes[]
  interacciones_sistemicas[]
  zonas_desconocidas[]
  confianza
  cobertura
}
```

El Estado conserva la heterogeneidad de la organización.

## 14. Clasificación ordinal

La presentación puede utilizar una clasificación A–E y una condición separada `NO DETERMINADO`.

La clasificación ordinal es una representación del Estado, no un sustituto del Estado metodológico.

## 15. Confianza

```text
Confianza {
  nivel
  fundamentos[]
}
```

No se deriva simplemente del número de documentos.

## 16. Cobertura

```text
Cobertura {
  nivel
  alcance_observado
  alcance_faltante
}
```

Cobertura responde a cuánto de lo relevante ha podido observarse.

## 17. Desconocimiento

```text
Desconocimiento {
  constructo
  motivo
  materialidad
  configuraciones_afectadas[]
}
```

La ausencia de información no equivale a fragilidad.

## 18. Contradicción

```text
Contradiccion {
  observaciones[]
  constructo
  materialidad
  pendiente_resolucion
}
```

Una contradicción material no se resuelve promediando.

## 19. Evolución

```text
Evolucion {
  id
  organizacion_id
  lectura_anterior
  lectura_posterior
  cambio_estado
  cambios_configuracion[]
  cambios_acoplamiento[]
  cambios_epistemicos[]
  cambios_cobertura[]
  cambios_evidencia[]
  interpretacion
}
```

## 20. Decisión

```text
Decision {
  id
  organizacion_id
  creada_en
  actor
  lectura_id
  descripcion
  justificacion
  configuraciones_relacionadas[]
}
```

ATÓMICA registra la decisión; no se atribuye la decisión.

## 21. Resultado posterior

```text
ResultadoPosterior {
  id
  decision_id
  observado_en
  descripcion
  resultado
  evidencias[]
  materialidad
}
```

No implica causalidad automática.

## 22. Evento de auditoría

```text
EventoAuditoria {
  id
  marca_temporal
  actor
  tipo_actor
  accion
  tipo_objeto
  objeto_id
  version_anterior
  version_nueva
  metadatos
  huella
  huella_anterior
}
```

El uso de encadenamiento criptográfico queda PENDIENTE DE VALIDACIÓN técnica y jurídica.

## 23. Versión metodológica

```text
VersionMetodologia {
  id
  version
  estado
  publicada_en
  huella_reglas
  huella_catalogo
}
```

Estados:

```text
BORRADOR
PRUEBAS
VALIDADA
PRODUCCION
RETIRADA
```

## 24. Versión de calibración

```text
VersionCalibracion {
  id
  version_metodologia
  contexto
  parametros
  estado_validacion
  creada_en
}
```

## 25. Replay

```text
Replay {
  id
  lectura_origen
  version_metodologia
  version_calibracion
  ejecutado_en
  ejecutado_por
  resultado
  diferencias[]
  finalidad
}
```

Un Replay nunca sustituye una Lectura histórica.

## 26. Contratos de integridad

El sistema debe rechazar:

- configuración inexistente;
- acoplamiento inexistente;
- regla inexistente;
- lectura sin versión metodológica;
- lectura sin versión de calibración;
- Replay tratado como lectura productiva;
- modificación histórica silenciosa;
- Estado sin trazabilidad.

## 27. Explicabilidad

Todo resultado relevante debe reconstruirse:

```text
Resultado
↓
Reglas
↓
Observaciones
↓
Evidencias
↓
Versión metodológica
↓
Calibración
```

No basta con almacenar `K03 = CRITICA`.

## 28. Reproducibilidad

Una lectura debe ser reproducible con las observaciones, evidencias, versión metodológica, versión de calibración y parámetros pertinentes que estaban disponibles en el momento.

## 29. Separación producto / método

- El Motor calcula.
- La Memoria conserva.
- La Evolución compara.
- El Informe comunica.
- El Observatorio presenta.
- La Consola Metodológica evalúa el comportamiento del método.

Ninguna interfaz debe contener reglas metodológicas ocultas.

## 30. Estado

CANDIDATO.

Pendiente:

- normalización definitiva de campos;
- esquema SQL;
- restricciones de integridad;
- estrategia de almacenamiento;
- validación jurídica de trazabilidad y conservación.
