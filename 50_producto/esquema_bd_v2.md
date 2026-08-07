# Esquema BD v2

Estado: BORRADOR

Ubicación:

50_producto/esquema_bd_v2.md

---

# Propósito

Definir el esquema canónico de persistencia de ATÓMICA.

Este documento constituye la fuente de verdad para el diseño de la base de datos.

No define la implementación en Supabase.

No contiene SQL.

No contiene detalles de infraestructura.

---

# Principios

La base de datos representa el Modelo Vivo.

No representa la interfaz.

No representa la lógica de aplicación.

El diagnóstico inicial es una observación.

El Estado Sistémico es inmutable.

Toda evolución crea un nuevo Estado.

Toda información pertenece a un agregado.

---

# Módulos

## 1. Marco metodológico

Tablas previstas

- marcos
- versiones_marco
- dimensiones
- capacidades
- preguntas
- reglas_evaluacion
- umbrales_ifo

---

## 2. Identidad

Tablas previstas

- organizaciones
- usuarios_organizacion
- eventos_identidad

---

## 3. Observación

Tablas previstas

- observaciones
- diagnosticos
- respuestas
- instrumentos
- procedencias

---

## 4. Modelo Vivo

Tablas previstas

- modelos
- estados
- trayectorias
- indicadores
- patrones_detectados

---

## 5. Evidencia

Tablas previstas

- evidencias
- archivos_evidencia
- validaciones
- confianzas

---

## 6. Inteligencia

Tablas previstas

- hipotesis
- contradicciones
- explicaciones

---

## 7. Intervención

Tablas previstas

- intervenciones
- acciones
- seguimientos

---

## 8. Certificación

Tablas previstas

- esquemas_certificacion
- sellos
- credenciales

---

## 9. Benchmark

Tablas previstas

- datasets
- benchmarks
- percentiles

---

## 10. Plataforma

Tablas previstas

- suscripciones
- planes
- eventos_uso
- notificaciones
- api_keys

---

## 11. IA

Tablas previstas

- conversaciones
- mensajes
- uso_llm

---

# Infraestructura

No forma parte del esquema de dominio.

Incluye:

- Storage
- Edge Functions
- Jobs
- Webhooks
- Conectores
- Colas

---

# Relaciones entre módulos

Marco metodológico

↓

Observación

↓

Modelo Vivo

↓

Inteligencia

↓

Intervención

↓

Certificación

↓

Benchmark

Identidad es transversal a todos los módulos.

Evidencia actúa como eje ortogonal del Modelo Vivo.

Plataforma e IA consumen el dominio, pero no lo modifican.

---

# Próximo documento

Cada tabla se desarrollará en un documento específico indicando:

- propósito
- responsabilidad
- atributos
- claves
- relaciones
- restricciones
- índices
- políticas RLS
- dependencias
- migración desde v1
