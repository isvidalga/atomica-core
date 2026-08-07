# Módulos Backend

Estado: DESARROLLO

Versión: 1.0.0

Tipo: Desarrollo

Ubicación:

90_desarrollo/modulos_backend.md

---

# Propósito

Este documento define la organización funcional del backend de ATÓMICA.

Su finalidad consiste en establecer la separación de responsabilidades entre los distintos módulos que implementan el dominio y la plataforma.

No define tecnologías.

No define APIs.

No define la implementación.

---

# Principios

Cada módulo posee una única responsabilidad.

Los módulos se comunican exclusivamente mediante interfaces públicas.

No existen dependencias circulares.

El dominio nunca depende de la plataforma.

---

# Estructura

El backend se organiza en los siguientes módulos:

1. Autenticación

2. Organizaciones

3. Marco metodológico

4. Observaciones

5. Modelo Vivo

6. Evidencias

7. Hipótesis

8. Intervenciones

9. Credenciales

10. Benchmark

11. Backoffice

12. Plataforma

---

# Autenticación

Responsabilidad:

Gestionar la identidad de los usuarios.

Incluye:

- autenticación;
- autorización;
- sesiones;
- recuperación de acceso.

No contiene lógica del dominio.

---

# Organizaciones

Responsabilidad:

Gestionar las organizaciones y sus miembros.

Incluye:

- organizaciones;
- usuarios;
- pertenencias;
- roles;
- eventos de identidad.

---

# Marco metodológico

Responsabilidad:

Gestionar las versiones del marco metodológico.

Incluye:

- metodología;
- dimensiones;
- capacidades;
- preguntas;
- escalas;
- umbrales.

---

# Observaciones

Responsabilidad:

Registrar todas las observaciones realizadas sobre una organización.

Incluye:

- diagnóstico inicial;
- observaciones continuas;
- respuestas;
- origen;
- instrumento.

No calcula el Modelo Vivo.

---

# Modelo Vivo

Responsabilidad:

Construir y mantener el Modelo Vivo.

Incluye:

- creación del modelo;
- generación de Estados Sistémicos;
- trayectoria;
- estado vigente.

Nunca modifica observaciones.

---

# Evidencias

Responsabilidad:

Gestionar las evidencias asociadas al conocimiento.

Incluye:

- archivos;
- referencias;
- validación;
- confianza.

---

# Hipótesis

Responsabilidad:

Gestionar las hipótesis generadas por el sistema.

Incluye:

- creación;
- evolución;
- contradicciones;
- contraste.

---

# Intervenciones

Responsabilidad:

Gestionar las intervenciones sobre la organización.

Incluye:

- planificación;
- ejecución;
- seguimiento;
- evaluación.

---

# Credenciales

Responsabilidad:

Emitir y verificar credenciales.

Incluye:

- emisión;
- revocación;
- verificación;
- sellos.

---

# Benchmark

Responsabilidad:

Gestionar conocimiento agregado anonimizado.

Incluye:

- percentiles;
- comparativas;
- indicadores agregados.

Nunca modifica el Modelo Vivo.

---

# Backoffice

Responsabilidad:

Proporcionar herramientas internas para consultores y administradores.

Incluye:

- gestión de clientes;
- seguimiento de organizaciones;
- revisión de evidencias;
- soporte;
- administración de credenciales;
- métricas operativas.

No modifica directamente el Modelo Vivo.

---

# Plataforma

Responsabilidad:

Gestionar la infraestructura de la aplicación.

Incluye:

- suscripciones;
- pagos;
- configuración;
- auditoría;
- telemetría;
- conectores;
- notificaciones.

No implementa lógica del dominio.

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

Evidencias

↓

Hipótesis

↓

Intervenciones

↓

Credenciales

↓

Benchmark

Backoffice consume servicios del dominio.

Plataforma proporciona servicios transversales sin alterar el dominio.

---

# Restricciones

Ningún módulo podrá acceder directamente a las estructuras internas de otro módulo.

Toda interacción deberá realizarse mediante interfaces públicas.

Las reglas del dominio pertenecen exclusivamente a los módulos del dominio.

La plataforma no podrá contener lógica de negocio.
