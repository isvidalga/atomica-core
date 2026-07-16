# 04 · Eventos

**Estado:** RFC-001 (Draft)
**Versión:** 0.1
**Última revisión:** Julio 2026

---

# Breadcrumb

atomica-core/
└── 30_architecture/
    └── 04_eventos.md

---

# Propósito

Definir el concepto de Evento como la unidad mínima de cambio dentro del Modelo Organizacional.

ATÓMICA no registra únicamente estados.

Registra cómo esos estados cambian.

Todo cambio observado deberá representarse mediante uno o varios Eventos.

---

# Definición

Un Evento representa un hecho ocurrido en un instante determinado que modifica, directa o indirectamente, el conocimiento que ATÓMICA posee sobre una organización.

Un Evento no es una interpretación.

Un Evento describe únicamente que algo ha ocurrido.

La interpretación pertenece al Motor Epistémico.

---

# Principios

Todo Evento:

- ocurre en un momento concreto;
- posee procedencia verificable;
- puede modificar uno o varios objetos;
- puede generar nuevas evidencias;
- nunca desaparece del histórico.

Los Eventos son inmutables.

Si un Evento fue registrado incorrectamente, no se modifica.

Se genera un nuevo Evento que corrige al anterior.

---

# Objetivos

Los Eventos permiten:

- construir memoria organizacional;
- comprender la evolución temporal;
- reconstruir cualquier estado pasado;
- explicar por qué el Modelo Organizacional cambió;
- mantener trazabilidad completa.

---

# Estructura mínima

Todo Evento deberá contener como mínimo:

- Identificador único
- Fecha y hora
- Organización
- Tipo de Evento
- Procedencia
- Actor (si existe)
- Objetos afectados
- Evidencias asociadas
- Nivel de confianza
- Estado

---

# Clasificación

## 1. Eventos Organizativos

Cambios producidos dentro de la organización.

Ejemplos:

- incorporación de personal;
- salida de un directivo;
- creación de un departamento;
- adquisición;
- apertura de un mercado.

---

## 2. Eventos Estratégicos

Decisiones que alteran la dirección de la organización.

Ejemplos:

- cambio de estrategia;
- nueva línea de negocio;
- internacionalización;
- inversión relevante;
- cambio del modelo de negocio.

---

## 3. Eventos Operativos

Cambios que afectan al funcionamiento diario.

Ejemplos:

- nuevo procedimiento;
- modificación de un proceso;
- implantación de una herramienta;
- automatización.

---

## 4. Eventos Documentales

Cambios relacionados con documentación.

Ejemplos:

- incorporación de una memoria;
- nueva política;
- informe de auditoría;
- certificación.

---

## 5. Eventos Epistemológicos

Cambios en el conocimiento del sistema.

No cambia necesariamente la empresa.

Cambia lo que ATÓMICA sabe sobre ella.

Ejemplos:

- nueva evidencia;
- hipótesis confirmada;
- hipótesis descartada;
- afirmación refutada;
- reducción de incertidumbre;
- incremento de confianza.

---

## 6. Eventos del Sistema

Cambios generados por ATÓMICA.

Ejemplos:

- nuevo diagnóstico;
- recalibración del modelo;
- actualización del IFO;
- regeneración del Observatorio.

---

# Ciclo de vida

Todo Evento atraviesa las siguientes fases:

Detectado

↓

Registrado

↓

Relacionado

↓

Procesado

↓

Archivado

El Evento nunca desaparece.

---

# Relación con otros objetos

Un Evento puede:

- generar Observaciones;
- modificar Capacidades;
- activar Riesgos;
- crear Evidencias;
- invalidar Hipótesis;
- aumentar o disminuir Incertidumbre;
- modificar el Estado del Modelo Organizacional.

---

# Invariantes

Un Evento nunca:

- interpreta;
- juzga;
- elimina información previa;
- sustituye Evidencias;
- modifica el pasado.

El pasado únicamente puede ampliarse mediante nuevos Eventos.

---

# Temporalidad

ATÓMICA no almacena únicamente el estado actual.

Almacena la secuencia completa de Eventos que explica dicho estado.

Gracias a ello será posible reconstruir cualquier momento histórico del Modelo Organizacional.

---

# Importancia arquitectónica

Los Eventos constituyen la dimensión temporal de ATÓMICA.

Sin Eventos únicamente existiría una representación estática.

Con Eventos aparece:

- evolución;
- memoria;
- aprendizaje;
- adaptación.

Toda inteligencia futura dependerá de esta secuencia temporal.

---

# Decisiones arquitectónicas

DA-001

Los Eventos son inmutables.

Nunca se editan.

Siempre se generan nuevos Eventos.

---

DA-002

El tiempo se representa mediante Eventos.

Nunca mediante sobrescritura de estados.

---

DA-003

Todo cambio observable deberá quedar representado por al menos un Evento.

---

# Relación con el resto de documentos

01_objetos.md

Define qué objetos pueden cambiar.

02_relaciones.md

Define cómo se relacionan dichos objetos.

03_estados.md

Define el ciclo de vida de cada objeto.

04_eventos.md

Explica cómo evolucionan los objetos a lo largo del tiempo.

05_modelo_organizacional.md

Integra todos los cambios producidos por los Eventos para representar el estado dinámico de la organización.
