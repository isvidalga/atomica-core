# Manual Founder

Estado: ACTIVO

Versión: 1.0

---

# Propósito

Este documento describe cómo administrar ATÓMICA desde la perspectiva del Founder.

No contiene aspectos técnicos de implementación.

No sustituye la metodología.

---

# Responsabilidades

El Founder es responsable de:

- evolución del producto
- estrategia
- modelo metodológico
- priorización del backlog
- validación funcional
- despliegues de producción

---

# Antes de aprobar una funcionalidad

Comprobar:

- resuelve un problema real;
- respeta el Canon;
- no duplica funcionalidad;
- no aumenta innecesariamente la complejidad;
- aporta valor al usuario.

---

# Priorización

Las tareas se priorizan siguiendo este orden:

1. Errores críticos.
2. Estabilidad.
3. Experiencia de usuario.
4. Funcionalidad.
5. Automatización.
6. Optimización.

---

# Cambios metodológicos

Todo cambio del Modelo deberá realizarse primero en atomica-core.

Nunca directamente en atomica-app.

---

# Desarrollo

Toda nueva funcionalidad deberá:

- existir en el backlog;
- tener alcance definido;
- cumplir la Definición de Terminado.

---

# Producción

Antes de cada despliegue verificar:

- migraciones ejecutadas;
- pruebas completadas;
- documentación actualizada;
- copia de seguridad disponible;
- versión etiquetada.

---

# Incidencias

Toda incidencia deberá clasificarse como:

- Crítica
- Alta
- Media
- Baja

Las incidencias críticas tendrán prioridad absoluta.

---

# Regla fundamental

Nunca aumentar la complejidad para incorporar una funcionalidad.

La simplicidad es un requisito del producto.
