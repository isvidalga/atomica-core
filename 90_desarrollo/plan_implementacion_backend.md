# Plan de implementación Backend v2

Estado: DESARROLLO

Versión: 1.0.0

Tipo: Desarrollo

Ubicación:

90_desarrollo/plan_implementacion_backend.md

---

# Objetivo

Implementar el backend de ATÓMICA conforme al Canon y a la arquitectura v2.

Cada fase deberá dejar un sistema funcional y verificable.

---

# Fase 1 · Base de datos

## Objetivo

Implementar el esquema físico.

### Entregables

- schema.sql
- índices
- restricciones
- RLS
- funciones SQL
- datos iniciales

---

# Fase 2 · API de dominio

## Objetivo

Exponer el dominio mediante servicios.

### Módulos

- organizaciones
- observaciones
- modelo vivo
- evidencias
- hipótesis
- intervenciones
- credenciales
- benchmark

---

# Fase 3 · Edge Functions

## Objetivo

Implementar la lógica que no pertenece a SQL.

### Incluye

- Donella
- checkout
- notificaciones
- conectores

---

# Fase 4 · Backoffice

## Objetivo

Implementar el panel interno.

### Incluye

- organizaciones
- consultores
- incidencias
- evidencias
- credenciales
- benchmark
- métricas

---

# Fase 5 · API pública

## Objetivo

Exponer servicios para terceros.

### Incluye

- autenticación
- API Keys
- límites
- documentación
- versionado

---

# Fase 6 · Integración frontend

## Objetivo

Conectar todas las pantallas con v2.

Eliminar definitivamente la lógica heredada de v1.

---

# Fase 7 · Validación

## Verificaciones

- integridad
- rendimiento
- seguridad
- RLS
- migración
- pruebas funcionales

---

# Finalización

El backend se considerará terminado cuando:

- todo el dominio funcione sobre v2;
- no exista código dependiente de v1;
- todas las pruebas sean satisfactorias;
- la documentación permanezca sincronizada con la implementación.
