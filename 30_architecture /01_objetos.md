# 01 · Objetos Fundamentales

Estado: RFC-001 (Draft)

Versión: 0.1

---

Breadcrumb

Architecture

↓

Objetos

---

# Propósito

Definir los objetos que forman el universo interno de ATÓMICA.

Un objeto representa una entidad persistente con identidad propia.

No representa una pantalla.

No representa una tabla.

No representa una API.

Representa un concepto estable del dominio organizacional.

---

# Principios

Un objeto:

- posee identidad;
- posee estado;
- evoluciona;
- mantiene trazabilidad;
- puede relacionarse con otros objetos.

---

# Catálogo inicial

## Organización

Representa el sistema observado.

No es una empresa jurídica.

Es la unidad organizacional sobre la que se construye conocimiento.

Atributos principales

- Identificador
- Nombre
- Contexto
- Sector
- Tamaño
- Fecha de creación
- Estado del modelo

---

## Persona

Individuo que participa en la organización.

Puede generar:

- observaciones
- evidencias
- afirmaciones
- decisiones

Nunca representa "la verdad".

Representa una perspectiva.

---

## Equipo

Conjunto de personas con responsabilidad compartida.

---

## Documento

Fuente documental.

Ejemplos:

- memoria
- auditoría
- política
- procedimiento
- acta

El documento nunca constituye conocimiento por sí mismo.

Es únicamente una fuente.

---

## Evidencia

Elemento verificable extraído de una fuente.

Una evidencia puede apoyar múltiples afirmaciones.

La evidencia nunca interpreta.

Describe.

---

## Evento

Todo cambio registrado dentro del sistema.

Ejemplos

- nuevo diagnóstico
- incorporación de evidencia
- cambio organizativo
- modificación documental

Los eventos construyen la memoria temporal.

---

## Observación

Información obtenida mediante cualquier mecanismo.

Puede proceder de:

- cuestionario
- documento
- usuario
- integración
- IA

Una observación aún no constituye una afirmación.

---

## Afirmación

Proposición sobre la organización.

Debe disponer de:

- origen
- confianza
- evidencia
- fecha

Puede ser:

- confirmada
- cuestionada
- refutada

---

## Hipótesis

Afirmación provisional sin evidencia suficiente.

Debe poder evolucionar hacia:

- afirmación
- descarte

Nunca permanece indefinidamente.

---

## Incertidumbre

Representa conocimiento incompleto.

No es ausencia de datos.

Es una propiedad explícita del modelo.

---

## Capacidad

Elemento estable que describe una competencia organizacional.

Ejemplos:

- adaptación
- aprendizaje
- gobernanza
- coordinación

Las capacidades evolucionan mediante eventos.

---

## Riesgo

Posibilidad de deterioro futuro.

No representa un hecho.

Representa una expectativa.

Debe derivarse del estado del modelo.

---

## Indicador

Representación cuantitativa.

Ejemplos

- IFO
- Radar
- Índices derivados

Los indicadores nunca constituyen conocimiento.

Son únicamente vistas.

---

## Modelo Organizacional

Objeto raíz.

Integra:

- capacidades
- evidencias
- eventos
- afirmaciones
- incertidumbres
- relaciones

Todos los productos de ATÓMICA derivan de este objeto.

---

# Objetos derivados (futuro)

Benchmark

Predicción

Escenarios

Simulación

Gemelo organizacional

No forman parte del núcleo inicial.

---

# Regla arquitectónica

Todo nuevo desarrollo deberá responder previamente:

¿Qué objeto modifica?

Si la respuesta es "ninguno",

la funcionalidad probablemente pertenece a la interfaz y no al modelo.
