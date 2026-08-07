# Catálogo de servicios del backend

Estado: DESARROLLO

Versión: 1.0.0

Tipo: Desarrollo

Ubicación:

90_desarrollo/catalogo_servicios_backend.md

---

# Propósito

Definir los servicios públicos que implementa el backend.

Constituyen el único contrato entre el frontend y el dominio.

El frontend nunca accederá directamente a la Base de Datos.

---

# Organización

Los servicios se agrupan por módulos.

---

# Organizaciones

## Crear organización

Responsabilidad:

Registrar una nueva organización.

---

## Obtener organización

Responsabilidad:

Recuperar la información de una organización.

---

## Actualizar organización

Responsabilidad:

Modificar la información autorizada.

---

## Gestionar miembros

Responsabilidad:

Administrar usuarios, roles y pertenencias.

---

# Observaciones

## Crear observación

Registrar una nueva observación.

---

## Registrar respuestas

Persistir las respuestas de una observación.

---

## Finalizar observación

Cerrar una observación y desencadenar el cálculo del Modelo Vivo.

---

## Consultar observaciones

Recuperar el historial de observaciones.

---

# Modelo Vivo

## Obtener Modelo Vivo

Recuperar el estado vigente.

---

## Obtener trayectoria

Recuperar la evolución histórica.

---

## Obtener Estado Sistémico

Consultar un estado concreto.

---

# Evidencias

## Registrar evidencia

---

## Validar evidencia

---

## Consultar evidencias

---

## Eliminar evidencia

---

# Hipótesis

## Listar hipótesis

---

## Consultar hipótesis

---

## Contrastar hipótesis

---

# Intervenciones

## Crear intervención

---

## Actualizar intervención

---

## Finalizar intervención

---

# Credenciales

## Emitir credencial

---

## Revocar credencial

---

## Verificar credencial

---

# Benchmark

## Obtener percentiles

---

## Obtener comparativas

---

# Backoffice

## Gestión de organizaciones

---

## Gestión de consultores

---

## Gestión documental

---

## Métricas

---

# Plataforma

## Suscripciones

---

## Pagos

---

## Conectores

---

## Notificaciones

---

## Auditoría

---

# Restricciones

Toda funcionalidad nueva deberá implementarse mediante un servicio definido en este catálogo.

No podrán existir llamadas directas del frontend a tablas o vistas.
