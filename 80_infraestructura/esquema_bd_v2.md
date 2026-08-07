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
