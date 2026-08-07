# Manual técnico

Estado: ACTIVO

Versión: 1.0

---

# Propósito

Este documento proporciona la información necesaria para desarrollar, mantener y desplegar ATÓMICA.

No describe la metodología ni el producto.

Describe únicamente su implementación técnica.

---

# Arquitectura

La plataforma se divide en cuatro capas.

- Presentación
- Aplicación
- Dominio
- Infraestructura

Toda modificación deberá respetar esta separación.

---

# Repositorios

## atomica-core

Contiene el conocimiento canónico.

No contiene implementación.

---

## atomica-app

Contiene la implementación de la plataforma.

Todo desarrollo deberá ser coherente con atomica-core.

---

# Stack tecnológico

Frontend

- HTML
- CSS
- JavaScript

Backend

- Supabase
- PostgreSQL
- Edge Functions

Infraestructura

- Cloudflare

IA

- Anthropic

---

# Base de datos

El esquema oficial se encuentra en:

80_infraestructura/esquema_canonico_v2.md

Toda modificación deberá realizarse mediante migraciones.

Nunca manualmente.

---

# Flujo de desarrollo

1. Actualizar atomica-core.
2. Validar la decisión.
3. Implementar en atomica-app.
4. Verificar.
5. Documentar.
6. Commit.

Nunca en otro orden.

---

# Variables de entorno

Las credenciales nunca forman parte del repositorio.

Todas deberán definirse mediante variables de entorno.

---

# Convenciones

Consultar:

- convenciones_desarrollo.md
- definicion_terminado.md

---

# Despliegue

Todo despliegue deberá realizarse desde la rama principal aprobada.

Nunca desde ramas experimentales.

---

# Incorporación de nuevos desarrolladores

Antes de realizar el primer commit deberán leer:

- README.md
- backlog_v2.md
- convenciones_desarrollo.md
- definicion_terminado.md
- arquitectura_v2.md
- este documento

---

# Principio final

El conocimiento funcional pertenece a atomica-core.

La implementación pertenece a atomica-app.

Nunca deberán mezclarse.
