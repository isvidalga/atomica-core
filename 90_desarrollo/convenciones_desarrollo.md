# Convenciones de desarrollo

Estado: CANÓNICO

Versión: 1.0

---

# Propósito

Este documento define las normas obligatorias para el desarrollo de ATÓMICA v2.

Su finalidad es garantizar un código uniforme, mantenible y comprensible.

---

# Principios

- Simplicidad antes que complejidad.
- Una única implementación para cada responsabilidad.
- No duplicar lógica.
- No introducir dependencias innecesarias.
- El código debe ser legible antes que ingenioso.

---

# Arquitectura

Todo desarrollo deberá respetar la separación entre:

- Dominio
- Aplicación
- Infraestructura
- Presentación

Ninguna capa podrá acceder directamente a otra que no le corresponda.

---

# Base de datos

- Nunca modificar la base manualmente.
- Todo cambio deberá realizarse mediante migraciones.
- No almacenar datos derivados.
- Toda tabla deberá tener RLS definida.
- Toda relación deberá estar justificada.

---

# Frontend

- Componentes pequeños.
- Una responsabilidad por componente.
- Sin lógica de negocio en las vistas.
- Sin consultas SQL incrustadas.
- Sin datos simulados.

---

# Backend

- Funciones pequeñas.
- Validación de entrada obligatoria.
- Gestión de errores obligatoria.
- Logging en operaciones críticas.

---

# API

- Nombres consistentes.
- JSON como formato único.
- Versionado explícito.
- Errores normalizados.

---

# Git

Cada commit deberá:

- resolver una única tarea
- compilar
- no romper funcionalidades existentes

---

# Documentación

Toda modificación relevante deberá actualizar la documentación correspondiente antes del cierre de la tarea.

---

# Prohibido

- Código muerto.
- Código comentado.
- TODO.
- FIXME.
- Duplicidades.
- Valores hardcodeados sin justificación.
- Funciones excesivamente largas.
- Archivos sin uso.

---

# Revisión

Antes de cerrar una tarea deberá comprobarse el cumplimiento de este documento y de `definicion_terminado.md`.
