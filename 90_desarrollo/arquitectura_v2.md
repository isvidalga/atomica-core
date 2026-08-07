# Arquitectura v2

Estado: CANÓNICO

Versión: 1.0

---

# Propósito

Definir la arquitectura técnica de ATÓMICA v2.

Este documento constituye la referencia oficial para toda implementación.

---

# Repositorios

## atomica-core

Contiene el conocimiento del sistema.

No contiene implementación.

---

## atomica-app

Contiene la implementación.

No contiene decisiones metodológicas.

---

# Arquitectura

La plataforma se organiza en seis capas.

```
Usuario

↓

Frontend

↓

Aplicación

↓

Dominio

↓

Persistencia

↓

Infraestructura
```

Cada capa depende únicamente de la inmediatamente inferior.

---

# Frontend

Responsabilidades:

- navegación
- presentación
- interacción
- validación básica

Nunca:

- reglas del dominio
- cálculos del IFO
- decisiones metodológicas

---

# Aplicación

Coordina los casos de uso.

Ejemplos:

- iniciar diagnóstico
- finalizar diagnóstico
- generar informe
- emitir credencial

---

# Dominio

Contiene el conocimiento de negocio.

Incluye:

- capacidades
- fragilidades
- intervenciones
- cálculo del IFO
- reglas metodológicas

Es la capa más estable.

---

# Persistencia

Responsable de:

- lectura
- escritura
- consultas
- almacenamiento

No contiene reglas de negocio.

---

# Infraestructura

Incluye:

- Supabase
- PostgreSQL
- Edge Functions
- Cloudflare
- IA
- almacenamiento
- correo

Debe poder sustituirse sin modificar el dominio.

---

# Flujo

Usuario

↓

Frontend

↓

Caso de uso

↓

Dominio

↓

Persistencia

↓

Respuesta

---

# Dependencias

Las dependencias siempre apuntan hacia abajo.

Nunca hacia arriba.

Nunca entre módulos del mismo nivel sin contrato explícito.

---

# Principios

- dominio independiente
- infraestructura sustituible
- lógica centralizada
- mínima duplicidad
- máxima trazabilidad

---

# Regla final

Toda implementación deberá poder localizarse en una única capa arquitectónica.

Si una responsabilidad aparece en varias capas, la arquitectura está degradándose.
