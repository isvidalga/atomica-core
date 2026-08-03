# GOBIERNO DEL CANON

Estado: CANÓNICO

Versión: 2.1.0

Ubicación:

00_canon/gobierno_del_canon.md

---

# Propósito

Definir cómo un artefacto adquiere, ejerce, modifica y pierde autoridad dentro del Canon.

Regular el ejercicio de la autoridad definida por el Sistema Normativo.

No define conceptos metodológicos.

No define conceptos del dominio.

No define la organización del repositorio.

No modifica el Sistema Normativo.

---

# Alcance

Este documento gobierna todos los artefactos normativos definidos por `00_canon/sistema_normativo.md`.

Todo artefacto deberá cumplir estas reglas para adquirir, conservar, modificar o perder autoridad.

---

# Principios

## G-001 · La autoridad es explícita

La autoridad de un artefacto deberá declararse explícitamente.

Ningún artefacto adquiere autoridad por su mera existencia.

---

## G-002 · Toda autoridad posee origen

Todo artefacto deberá poder justificar documentalmente el origen de su autoridad conforme al Sistema Normativo.

---

## G-003 · La autoridad no puede circular

Ningún artefacto podrá fundamentar directa o indirectamente la autoridad de sí mismo.

---

## G-004 · La autoridad prevalece sobre la cronología

En caso de conflicto nunca prevalecerá el documento más reciente.

Prevalecerá exclusivamente el artefacto con mayor autoridad.

---

## G-005 · La trazabilidad es obligatoria

Toda modificación deberá conservar íntegramente el historial documental.

---

## G-006 · Todo artefacto posee un tipo

Todo artefacto deberá declarar explícitamente su tipo normativo.

---

## G-007 · Todo artefacto posee un estado

Todo artefacto deberá declarar un estado válido para su tipo.

---

# Autoridad

La autoridad de un artefacto viene determinada exclusivamente por:

- su tipo normativo;
- su estado;
- su origen declarado.

Ningún otro criterio genera autoridad.

La autoridad únicamente podrá ejercerse mientras dichas condiciones permanezcan válidas.

---

# Dependencias

Un artefacto únicamente podrá depender de:

- un artefacto de mayor autoridad; o
- un artefacto del mismo nivel cuando la dependencia no altere su autoridad.

Nunca podrá depender de un artefacto inferior.

---

# Conflictos

Cuando dos artefactos entren en conflicto se aplicará el siguiente procedimiento:

1. verificar el tipo normativo;
2. aplicar el orden de autoridad definido en `00_canon/sistema_normativo.md`;
3. comprobar si existe derogación explícita;
4. comprobar si existe sustitución explícita;
5. comprobar la trazabilidad de la autoridad.

Si el conflicto persiste:

el conflicto permanecerá abierto.

Nunca podrá resolverse mediante interpretación.

---

# Derogación

Ningún artefacto queda derogado por omisión.

Toda derogación deberá declararse explícitamente.

Toda derogación deberá identificar:

- el artefacto derogado;
- el artefacto que lo sustituye;
- la fecha;
- la versión.

---

# Sustitución

Un artefacto sustituido deberá pasar al estado OBSOLETO cuando dicho estado exista para su tipo.

La sustitución nunca elimina el historial.

---

# Responsabilidad

Todo artefacto posee una única responsabilidad.

Si un artefacto acumula responsabilidades distintas deberá dividirse.

---

# Restricciones

La autoridad pertenece al artefacto.

El documento únicamente representa dicho artefacto.

La cronología nunca constituye un criterio de autoridad.

La ausencia de información obligatoria invalida la autoridad normativa del artefacto correspondiente.

Ningún documento podrá ejercer una autoridad distinta de la permitida por el Sistema Normativo.

---

# Relaciones

Depende de:

- `00_canon/sistema_normativo.md`

Gobierna:

- el ejercicio de la autoridad de todos los artefactos normativos del Canon.

---

# Responsabilidad

Este documento regula exclusivamente el ejercicio de la autoridad definida por el Sistema Normativo.

No crea nuevos tipos normativos.

No modifica la jerarquía normativa.

No constituye una fuente independiente de autoridad.
