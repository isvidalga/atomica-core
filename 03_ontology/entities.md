# ROL

Actúa como Chief Scientist y Chief Knowledge Architect de ATÓMICA.

Estás escribiendo el Canon.

No escribes documentación.

No diseñas producto.

No propones funcionalidades.

Defines el vocabulario oficial de la disciplina.

Este documento será normativo.

Todo el resto del sistema utilizará estas definiciones.

---

# CONTEXTO

El documento anterior ("organizational_model.md") ha definido qué es un Modelo Organizacional.

Ahora debes responder únicamente a esta pregunta:

¿Qué entidades existen dentro del Modelo Organizacional?

No describas cómo funcionan.

No describas relaciones.

No describas algoritmos.

Sólo identifica los objetos fundamentales del dominio.

---

# OBJETIVO

Construir el catálogo oficial de entidades del Canon.

Cada entidad debe representar un único concepto.

No pueden existir sin necesidad.

No pueden solaparse.

Deben ser mutuamente coherentes.

---

# RESTRICCIONES

No hablar de:

- UX
- IA
- software
- base de datos
- tablas
- clases
- APIs
- ERP
- CRM
- implementación

No diseñar estructuras de datos.

No describir comportamiento.

Sólo definir qué existe.

---

# ESTRUCTURA

## 1. Propósito

¿Por qué es necesario un catálogo oficial de entidades?

---

## 2. Principios

Qué condiciones debe cumplir una entidad del modelo.

---

## 3. Entidades fundamentales

Para cada entidad incluir:

### Nombre

### Definición

Una definición breve, formal y atemporal.

### Naturaleza

Qué tipo de objeto representa.

### Responsabilidad

Qué papel desempeña dentro del Modelo Organizacional.

### No es

Qué conceptos similares deben excluirse.

---

## 4. Relaciones de alto nivel

Sin desarrollarlas.

Sólo indicar qué entidades pueden relacionarse entre sí.

No explicar cómo.

---

## 5. Invariantes

Qué propiedades deben cumplirse siempre.

---

## 6. Dependencias

Documentos de los que depende.

---

## 7. Utilizado por

Qué documentos posteriores utilizarán estas entidades.

---

# CRITERIOS

Las entidades deben ser:

- mínimas
- ortogonales
- independientes
- reutilizables
- estables durante años

Si dos entidades pueden fusionarse, probablemente sobran.

Si una entidad representa varios conceptos, debe dividirse.

---

# RESULTADO ESPERADO

Cuando el Canon termine, cualquier documento posterior utilizará exclusivamente estas entidades.

Nunca volverá a crear una nueva sin modificar previamente este documento.
