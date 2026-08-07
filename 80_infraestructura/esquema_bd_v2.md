# Esquema BD v2

Estado: CANÓNICO

Versión: 1.0.0

Tipo: Infraestructura

Ubicación:

80_infraestructura/esquema_bd_v2.md

---

# Propósito

Este documento define la organización lógica de la Base de Datos de ATÓMICA.

No constituye una implementación SQL.

No define tecnologías.

No define motores de base de datos.

Su finalidad consiste en establecer la estructura de persistencia compatible con el Sistema Normativo.

---

# Alcance

Este documento regula:

- los módulos de persistencia;
- sus responsabilidades;
- las dependencias entre módulos.

No regula:

- tablas;
- columnas;
- índices;
- tipos de datos;
- consultas;
- optimizaciones.

---

# Principios

La Base de Datos se organiza por módulos funcionales.

Cada módulo posee una única responsabilidad.

Las dependencias entre módulos siguen una única dirección.

No podrán existir dependencias circulares.

---

# Organización

La Base de Datos se organiza en los siguientes módulos:

1. Marco metodológico

2. Organizaciones

3. Observaciones

4. Modelo Vivo

5. Evidencias

6. Hipótesis

7. Intervenciones

8. Credenciales

9. Conocimiento agregado

10. Plataforma

---

# Marco metodológico

Responsabilidad:

Persistir las definiciones versionadas del marco metodológico.

Incluye:

- dimensiones;
- capacidades;
- preguntas;
- escalas;
- umbrales;
- metodología vigente.

No contiene información de organizaciones.

---

# Organizaciones

Responsabilidad:

Persistir la identidad de cada organización.

Incluye:

- organización;
- usuarios;
- pertenencia;
- identidad organizacional.

---

# Observaciones

Responsabilidad:

Persistir todas las observaciones realizadas.

Incluye:

- diagnóstico inicial;
- observaciones posteriores;
- origen;
- instrumento;
- fecha.

Las observaciones nunca modifican directamente el Modelo Vivo.

---

# Modelo Vivo

Responsabilidad:

Persistir la evolución del conocimiento.

Incluye:

- Modelo Vivo;
- Estados Sistémicos;
- Trayectoria.

Los Estados son inmutables.

---

# Evidencias

Responsabilidad:

Persistir las evidencias asociadas a observaciones e hipótesis.

Las evidencias modifican la confianza.

Nunca modifican directamente un Estado Sistémico.

---

# Hipótesis

Responsabilidad:

Persistir las hipótesis y su evolución.

Incluye:

- ciclo de vida;
- contradicciones;
- relaciones con evidencias.

---

# Intervenciones

Responsabilidad:

Persistir las intervenciones realizadas sobre la organización.

Incluye:

- intervención;
- estado;
- seguimiento;
- resultado.

---

# Credenciales

Responsabilidad:

Persistir las credenciales emitidas por el producto.

La emisión depende del Modelo Vivo.

Las credenciales no modifican el Modelo.

---

# Conocimiento agregado

Responsabilidad:

Persistir conocimiento anonimizado utilizado para benchmarking.

Nunca retroalimenta el Modelo Vivo.

---

# Plataforma

Responsabilidad:

Persistir la información necesaria para el funcionamiento del producto.

Incluye:

- autenticación;
- suscripciones;
- auditoría;
- métricas;
- configuración.

No forma parte del dominio.

---

# Dependencias

Las dependencias permitidas son:

Marco metodológico

↓

Organizaciones

↓

Observaciones

↓

Modelo Vivo

↓

Hipótesis

↓

Intervenciones

↓

Credenciales

↓

Conocimiento agregado

Plataforma constituye un módulo transversal que no modifica el dominio.

---

# Restricciones

Toda implementación deberá respetar:

- separación entre módulos;
- independencia del dominio;
- inmutabilidad de los Estados;
- trazabilidad completa;
- versionado del marco metodológico.

---

# Relación con la implementación

La implementación física de la Base de Datos deberá derivarse exclusivamente de este documento.

Las tablas, índices y restricciones pertenecen a la documentación de desarrollo.

---

# Referencias

- Canon
- Ontología
- Metodología
- Modelo Vivo

# Esquema BD v2

Estado: CANÓNICO

Versión: 2.0.0

Tipo: Infraestructura

Ubicación:

```text
80_infraestructura/esquema_bd_v2.md
```

---

# Propósito

Este documento define el modelo lógico de persistencia de ATÓMICA.

Es la especificación que deberá implementarse en PostgreSQL/Supabase.

No define el dominio.

No modifica el Canon.

No sustituye al Diccionario de Datos.

---

# Alcance

Este documento especifica:

* entidades persistentes;
* relaciones;
* claves primarias;
* claves foráneas;
* dependencias entre módulos;
* orden de creación del esquema.

No especifica:

* tipos detallados;
* RLS;
* índices;
* SQL;
* migraciones.

---

# Módulos

```
1. Marco metodológico
2. Organizaciones
3. Observaciones
4. Modelo Vivo
5. Evidencias
6. Hipótesis
7. Intervenciones
8. Credenciales
9. Conocimiento agregado
10. Plataforma
```

## Módulo 1 · Marco metodológico

### Entidades

```text
marcos_metodologicos
│
├── dimensiones
│
├── capacidades
│
├── preguntas
│
├── tipos_observacion
│
├── tipos_evidencia
│
├── tipos_hipotesis
│
├── tipos_intervencion
│
└── sellos
```

---

### Relaciones

```text
marcos_metodologicos
│
├── 1:N dimensiones
│
├── 1:N capacidades
│        │
│        └── 1:N preguntas
│
├── 1:N tipos_observacion
│
├── 1:N tipos_evidencia
│
├── 1:N tipos_hipotesis
│
├── 1:N tipos_intervencion
│
└── 1:N sellos
```

---

### Responsabilidad

El módulo constituye la única fuente normativa de referencia para:

* metodología;
* dimensiones;
* capacidades;
* preguntas;
* catálogos;
* umbrales;
* versiones.

Todo Estado Sistémico referencia una única versión del marco metodológico.

---

### Dependencias

No depende de ningún otro módulo.

Todos los demás módulos dependen, directa o indirectamente, del Marco metodológico.

---

### Restricciones

El contenido es versionado.

Los registros históricos nunca se modifican.

Toda nueva metodología genera una nueva versión del marco.

No se reutilizan identificadores entre versiones.

---

### Utilizado por

* Organizaciones
* Observaciones
* Modelo Vivo
* Evidencias
* Hipótesis
* Intervenciones
* Credenciales
* Conocimiento agregado

---

## Módulo 2 · Organizaciones

### Entidades

```text
organizaciones
│
├── organizaciones_usuarios
│
├── rupturas_identidad
│
└── historial_organizacion
```

---

### Relaciones

```text
organizaciones
│
├── 1:N organizaciones_usuarios
│
├── 1:N rupturas_identidad
│
└── 1:N historial_organizacion
```

---

### Responsabilidad

El módulo gestiona la identidad persistente de las organizaciones.

No almacena observaciones.

No almacena conocimiento.

No contiene Estados Sistémicos.

Su responsabilidad finaliza donde comienza la observación.

---

### Dependencias

Depende de:

* Marco metodológico

Es utilizado por:

* Observaciones
* Modelo Vivo
* Evidencias
* Hipótesis
* Intervenciones
* Credenciales
* Plataforma

---

### Restricciones

Toda organización posee un identificador permanente.

Las rupturas de identidad generan una nueva continuidad organizacional conforme a las reglas definidas por el Canon.

Las organizaciones nunca se eliminan físicamente.

Toda pertenencia de usuarios se gestiona mediante `organizaciones_usuarios`.

---

### Cardinalidades

```text
Organización
        │
        ├────< Usuarios
        │
        ├────< Rupturas de identidad
        │
        └────< Historial organizacional
```

---

## Módulo 3 · Observaciones

### Entidades

```text
observaciones
│
├── respuestas
│
├── instrumentos_observacion
│
└── fuentes_observacion
```

---

### Relaciones

```text
instrumentos_observacion
            │
            └────< observaciones
                        │
                        ├────< respuestas
                        │
                        └────> fuentes_observacion
```

---

### Responsabilidad

El módulo registra todas las observaciones realizadas sobre una organización.

Toda observación constituye un hecho registrado.

La observación no interpreta.

La observación no calcula.

La observación no modifica directamente el Modelo Vivo.

---

### Dependencias

Depende de:

* Marco metodológico
* Organizaciones

Es utilizado por:

* Modelo Vivo
* Evidencias
* Hipótesis

---

### Restricciones

Toda observación pertenece a una única organización.

Toda observación referencia un único instrumento.

Toda respuesta pertenece a una única observación.

Una observación nunca cambia de organización.

Las observaciones son permanentes.

No se eliminan físicamente.

---

### Cardinalidades

```text
Organización
      │
      └────< Observaciones
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
 Respuestas          Instrumento
                    │
                    ▼
                 Fuente
```

---

## Módulo 4 · Modelo Vivo

### Entidades

```text
modelos_vivos
│
├── estados_sistemicos
│
└── trayectorias
```

---

### Relaciones

```text
modelos_vivos
      │
      ├──── 1:N estados_sistemicos
      │
      └──── 1:1 trayectorias

trayectorias
      │
      └──── 1:N estados_sistemicos
```

---

### Responsabilidad

El módulo mantiene la representación operacional de la organización.

No almacena observaciones.

No almacena evidencias.

No interpreta hipótesis.

Su única responsabilidad consiste en mantener la secuencia de Estados Sistémicos que conforman el Modelo Vivo.

---

### Dependencias

Depende de:

* Marco metodológico
* Organizaciones
* Observaciones

Es utilizado por:

* Evidencias
* Hipótesis
* Intervenciones
* Credenciales
* Conocimiento agregado
* Plataforma

---

### Restricciones

Existe un único Modelo Vivo por organización.

Cada Estado Sistémico pertenece a un único Modelo Vivo.

Los Estados Sistémicos son inmutables.

Toda actualización genera un nuevo Estado Sistémico.

La Trayectoria constituye la secuencia ordenada de Estados Sistémicos.

Nunca existen dos Estados vigentes simultáneamente para una misma organización.

---

### Cardinalidades

```text
Organización
      │
      └──── 1:1 Modelo Vivo
                    │
        ┌───────────┴────────────┐
        ▼                        ▼
 Trayectoria           Estados Sistémicos
                               │
                               └──── N
```

---

## Módulo 5 · Evidencias

### Entidades

```text
evidencias
│
├── tipos_evidencia
│
├── soportes_evidencia
│
└── vinculaciones_evidencia
```

---

### Relaciones

```text
tipos_evidencia
        │
        └────< evidencias
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
soportes_evidencia    vinculaciones_evidencia
```

---

### Responsabilidad

El módulo gestiona las evidencias que respaldan el conocimiento disponible sobre una organización.

Las evidencias incrementan o reducen la confianza.

Nunca modifican directamente el Estado Sistémico.

Nunca sustituyen una observación.

---

### Dependencias

Depende de:

* Marco metodológico
* Organizaciones
* Observaciones
* Modelo Vivo

Es utilizado por:

* Hipótesis
* Intervenciones

---

### Restricciones

Toda evidencia pertenece a una única organización.

Toda evidencia posee un único tipo.

Una evidencia puede respaldar múltiples elementos del Modelo Vivo mediante vinculaciones.

Las evidencias mantienen trazabilidad completa durante todo su ciclo de vida.

La eliminación física queda prohibida.

---

### Cardinalidades

```text
Organización
      │
      └────< Evidencias
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
 Soportes          Vinculaciones
```

---

## Módulo 6 · Hipótesis

### Entidades

```text
hipotesis
│
├── estados_hipotesis
│
├── contradicciones
│
└── relaciones_hipotesis
```

---

### Relaciones

```text
estados_hipotesis
        │
        └────< hipotesis
                    │
        ├───────────┼────────────┐
        ▼           ▼            ▼
Contradicciones  Evidencias  Relaciones_hipotesis
```

---

### Responsabilidad

El módulo gestiona las hipótesis formuladas sobre el comportamiento organizacional.

Las hipótesis representan conocimiento provisional.

Pueden fortalecerse, debilitarse o invalidarse.

Nunca modifican directamente el Modelo Vivo.

---

### Dependencias

Depende de:

* Marco metodológico
* Organizaciones
* Observaciones
* Modelo Vivo
* Evidencias

Es utilizado por:

* Intervenciones

---

### Restricciones

Toda hipótesis pertenece a una única organización.

Toda hipótesis mantiene un único estado vigente.

Las contradicciones nunca eliminan una hipótesis.

Únicamente modifican su nivel de confianza o provocan su revisión.

Toda hipótesis conserva su historial completo.

---

### Cardinalidades

```text
Organización
      │
      └────< Hipótesis
                   │
        ┌──────────┼───────────┐
        ▼          ▼           ▼
   Estados   Contradicciones   Relaciones
```

---

## Módulo 7 · Intervenciones

### Entidades

```text
intervenciones
│
├── estados_intervencion
│
├── acciones_intervencion
│
└── resultados_intervencion
```

---

### Relaciones

```text
estados_intervencion
          │
          └────< intervenciones
                      │
          ├───────────┴────────────┐
          ▼                        ▼
acciones_intervencion   resultados_intervencion
```

---

### Responsabilidad

El módulo gestiona las intervenciones realizadas sobre una organización.

Las intervenciones representan actuaciones planificadas o ejecutadas.

No modifican directamente el Modelo Vivo.

Sus efectos únicamente podrán reflejarse mediante nuevas observaciones.

---

### Dependencias

Depende de:

* Marco metodológico
* Organizaciones
* Modelo Vivo
* Hipótesis

Es utilizado por:

* Credenciales

---

### Restricciones

Toda intervención pertenece a una única organización.

Toda intervención mantiene un único estado vigente.

Las acciones pertenecen a una única intervención.

Los resultados nunca modifican registros históricos.

Toda intervención conserva su historial completo.

---

### Cardinalidades

```text
Organización
      │
      └────< Intervenciones
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
    Estados      Acciones    Resultados
```
---

## Módulo 8 · Credenciales

### Entidades

```text
credenciales
│
├── sellos_emitidos
│
├── verificaciones
│
└── revocaciones
```

---

### Relaciones

```text
credenciales
      │
      ├────< sellos_emitidos
      │
      ├────< verificaciones
      │
      └────< revocaciones
```

---

### Responsabilidad

El módulo gestiona la emisión, verificación, vigencia y revocación de las credenciales emitidas por ATÓMICA.

Las credenciales constituyen artefactos derivados del Modelo Vivo.

No generan conocimiento.

No modifican el Estado Sistémico.

---

### Dependencias

Depende de:

* Marco metodológico
* Organizaciones
* Modelo Vivo
* Intervenciones

Es utilizado por:

* Plataforma

---

### Restricciones

Toda credencial pertenece a una única organización.

Toda credencial se emite conforme a un único sello.

Una credencial puede verificarse múltiples veces.

Toda revocación conserva su trazabilidad.

Las credenciales nunca modifican el Modelo Vivo.

---

### Cardinalidades

```text
Organización
      │
      └────< Credenciales
                    │
        ┌───────────┼────────────┐
        ▼           ▼            ▼
 Sellos emitidos Verificaciones Revocaciones
```

---

## Módulo 9 · Conocimiento agregado

### Entidades

```text
conocimiento_agregado
│
├── cohortes
│
├── indicadores_agregados
│
└── series_agregadas
```

---

### Relaciones

```text
conocimiento_agregado
          │
          ├────< cohortes
          │
          ├────< indicadores_agregados
          │
          └────< series_agregadas
```

---

### Responsabilidad

El módulo gestiona el conocimiento agregado obtenido a partir del conjunto de organizaciones.

Su finalidad consiste en producir información estadística y comparativa.

No representa organizaciones individuales.

No forma parte del Modelo Vivo.

---

### Dependencias

Depende de:

* Modelo Vivo

Es utilizado por:

* Plataforma

---

### Restricciones

Toda la información almacenada es agregada.

No podrá existir ninguna referencia que permita identificar una organización concreta.

No podrán establecerse dependencias desde este módulo hacia el Modelo Vivo.

El flujo de información será exclusivamente unidireccional.

---

### Cardinalidades

```text
Modelo Vivo
      │
      └────► Conocimiento agregado
                    │
        ┌───────────┼────────────┐
        ▼           ▼            ▼
    Cohortes  Indicadores   Series
```

---

## Módulo 10 · Plataforma

### Entidades

```text
plataformas
│
├── usuarios
│
├── organizaciones_usuarios
│
├── sesiones
│
├── eventos_uso
│
├── notificaciones
│
├── preferencias_usuario
│
└── auditoria
```

---

### Relaciones

```text
usuarios
    │
    ├────< organizaciones_usuarios
    │
    ├────< sesiones
    │
    ├────< preferencias_usuario
    │
    ├────< eventos_uso
    │
    └────< auditoria
```

---

### Responsabilidad

El módulo gestiona los servicios transversales necesarios para el funcionamiento de la plataforma.

No forma parte del dominio organizacional.

No genera conocimiento.

No participa en el cálculo del Modelo Vivo.

Su finalidad consiste exclusivamente en proporcionar soporte operativo al resto de módulos.

---

### Dependencias

Depende de:

* Organizaciones

Es utilizado por:

* Todos los módulos funcionales.

---

### Restricciones

La autenticación se delega en el proveedor de identidad.

Los usuarios de la plataforma son independientes de las organizaciones.

La pertenencia a una organización se gestiona mediante `organizaciones_usuarios`.

Los eventos de uso pertenecen exclusivamente a la analítica del producto.

Los registros de auditoría son inmutables.

---

### Cardinalidades

```text
Usuario
   │
   ├────< Organizaciones_Usuarios >──── Organización
   │
   ├────< Sesiones
   │
   ├────< Eventos de uso
   │
   ├────< Preferencias
   │
   └────< Auditoría
```

---

# Grafo de dependencias

## Dependencias entre módulos

                    ┌──────────────────────┐
                    │ 1. Marco metodológico│
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ 2. Organizaciones    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ 3. Observaciones     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ 4. Modelo Vivo       │
                    └──────┬──────┬────────┘
                           │      │
                 ┌─────────┘      └─────────┐
                 ▼                          ▼
      ┌──────────────────┐        ┌──────────────────┐
      │5. Evidencias      │        │9. Conocimiento   │
      └─────────┬─────────┘        │   agregado       │
                │                  └──────────────────┘
                ▼
      ┌──────────────────┐
      │6. Hipótesis       │
      └─────────┬─────────┘
                ▼
      ┌──────────────────┐
      │7. Intervenciones  │
      └─────────┬─────────┘
                ▼
      ┌──────────────────┐
      │8. Credenciales    │
      └─────────┬─────────┘
                ▼
      ┌──────────────────┐
      │10. Plataforma     │
      └──────────────────┘

---

## Principios

Las dependencias forman un grafo dirigido acíclico (DAG).

No podrán existir dependencias circulares entre módulos.

Cada módulo únicamente podrá depender de módulos situados por debajo en el grafo.

Las dependencias deberán mantenerse estables durante toda la evolución del sistema.

Toda modificación del grafo requerirá la actualización del presente documento.

---

## Restricciones

El Conocimiento agregado recibe información exclusivamente desde el Modelo Vivo.

Nunca alimenta nuevamente al Modelo Vivo.

Las Evidencias nunca modifican directamente el Estado Sistémico.

Las Hipótesis nunca modifican directamente el Estado Sistémico.

Las Intervenciones producen nuevas observaciones, nunca modificaciones directas del Modelo Vivo.

La Plataforma constituye un módulo transversal y no participa en la generación del conocimiento.

---

# Dependencias prohibidas

No podrán existir dependencias desde:

* Conocimiento agregado hacia Modelo Vivo.
* Plataforma hacia Metodología.
* Evidencias hacia Hipótesis.
* Credenciales hacia Intervenciones.

---

# Orden de creación

## Fase 1

Marco metodológico

## Fase 2

Organizaciones

## Fase 3

Observaciones

## Fase 4

Modelo Vivo

## Fase 5

Evidencias

## Fase 6

Hipótesis

## Fase 7

Intervenciones

## Fase 8

Credenciales

## Fase 9

Conocimiento agregado

## Fase 10

Plataforma

---

# Correspondencia

Cada entidad definida en este documento deberá estar desarrollada íntegramente en:

```
80_infraestructura/diccionario_datos_bd_v2.md
```

No podrán existir entidades en uno de los documentos que no existan en el otro.

---

# Implementación

La implementación SQL deberá reproducir exactamente este esquema.

Cualquier diferencia entre el código y este documento constituye una no conformidad.

---

# Orden de implementación

## Principio

El esquema físico deberá implementarse respetando el orden de dependencias definido por el Grafo de Dependencias.

Ninguna entidad podrá depender de otra que todavía no exista.

---

## Fase 1 · Marco metodológico

Implementar:

* tablas de referencia;
* catálogos;
* versiones metodológicas;
* parámetros de cálculo.

No presenta dependencias.

---

## Fase 2 · Organizaciones

Implementar:

* organizaciones;
* usuarios de organización;
* pertenencias;
* rupturas de identidad.

Depende exclusivamente del Marco metodológico.

---

## Fase 3 · Observaciones

Implementar:

* observaciones;
* instrumentos;
* respuestas;
* fuentes de observación.

Depende de:

* Marco metodológico;
* Organizaciones.

---

## Fase 4 · Modelo Vivo

Implementar:

* modelos vivos;
* estados sistémicos;
* trayectorias.

Depende de:

* Marco metodológico;
* Organizaciones;
* Observaciones.

---

## Fase 5 · Evidencias

Implementar:

* evidencias;
* soportes;
* vinculaciones.

Depende de:

* Modelo Vivo.

---

## Fase 6 · Hipótesis

Implementar:

* hipótesis;
* contradicciones;
* estados.

Depende de:

* Evidencias.

---

## Fase 7 · Intervenciones

Implementar:

* intervenciones;
* acciones;
* resultados.

Depende de:

* Hipótesis.

---

## Fase 8 · Credenciales

Implementar:

* credenciales;
* sellos;
* verificaciones.

Depende de:

* Intervenciones.

---

## Fase 9 · Conocimiento agregado

Implementar:

* cohortes;
* indicadores;
* series agregadas.

Depende exclusivamente del Modelo Vivo.

---

## Fase 10 · Plataforma

Implementar:

* usuarios;
* sesiones;
* auditoría;
* preferencias;
* notificaciones;
* eventos de uso.

Este módulo podrá desarrollarse en paralelo siempre que se respeten las dependencias funcionales con Organizaciones.

---

# Criterios de aceptación

El esquema se considerará conforme únicamente cuando:

* todas las dependencias respeten el DAG definido;
* no existan ciclos de dependencias;
* todas las claves foráneas sean coherentes con el modelo de dominio;
* cada módulo pueda evolucionar de forma independiente;
* el Modelo Vivo permanezca aislado del Conocimiento agregado;
* ninguna entidad del dominio dependa de la Plataforma.

---

# Restricciones globales

## RG-001 · Inmutabilidad

Las entidades históricas no podrán modificarse una vez consolidadas.

Toda evolución se representará mediante nuevos registros.

---

## RG-002 · Trazabilidad

Toda información persistida deberá conservar su origen.

Ningún dato podrá existir sin procedencia verificable.

---

## RG-003 · Versionado

Toda información dependiente de la metodología deberá referenciar explícitamente la versión metodológica utilizada.

Nunca se reinterpretarán datos históricos utilizando versiones posteriores del marco metodológico.

---

## RG-004 · Aislamiento organizacional

Toda entidad perteneciente al dominio estará asociada a una única organización.

No podrá existir contaminación entre organizaciones.

---

## RG-005 · Integridad referencial

Todas las relaciones entre entidades deberán implementarse mediante claves foráneas explícitas.

No se admitirán referencias implícitas.

---

## RG-006 · Eliminación

Las entidades del dominio no se eliminarán físicamente salvo obligación legal expresa.

La eliminación lógica será la estrategia por defecto.

---

## RG-007 · Seguridad

Toda operación sobre datos estará protegida mediante políticas RLS.

Las políticas formarán parte del esquema físico y nunca del dominio.

---

## RG-008 · Auditoría

Toda modificación relevante deberá quedar registrada.

Los registros de auditoría serán inmutables.

---

## RG-009 · Identificadores

Todas las entidades utilizarán UUID como clave primaria.

Las claves naturales podrán existir como identificadores de negocio, pero nunca sustituirán a la clave primaria.

---

## RG-010 · Independencia tecnológica

Las restricciones definidas en este documento pertenecen al modelo lógico.

Su implementación física podrá variar siempre que preserve exactamente el mismo comportamiento.
