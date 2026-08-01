# GOBIERNO DEL CANON

Estado: CANÓNICO

Versión: 2.0

Ubicación:

00_canon/gobierno_del_canon.md

---

# Propósito

Definir cómo un artefacto adquiere, ejerce, modifica y pierde autoridad dentro del Canon.

No define conceptos metodológicos.

No define conceptos del dominio.

No define la organización del repositorio.

---

# Alcance

Este documento gobierna todos los artefactos normativos definidos por `00_canon/sistema_normativo.md`.

Todo artefacto deberá cumplir estas reglas para adquirir, conservar, modificar o perder autoridad.

---

# Principios

## G-001 · La autoridad es explícita

La autoridad de un artefacto debe declararse explícitamente.

Ningún artefacto adquiere autoridad por su mera existencia.

---

## G-002 · Toda autoridad posee origen

Todo artefacto, excepto los Axiomas, deriva su autoridad de otro artefacto de igual o superior autoridad.

Los Axiomas constituyen el fundamento último del Canon.

---

## G-003 · La autoridad no puede circular

Ningún artefacto puede fundamentar directa o indirectamente la autoridad de sí mismo.

---

## G-004 · La autoridad prevalece sobre la cronología

En caso de conflicto nunca prevalece el documento más reciente.

Prevalece exclusivamente el artefacto con mayor autoridad.

---

## G-005 · La trazabilidad es obligatoria

Toda modificación debe conservar el historial documental.

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
2. aplicar el orden de autoridad definido en `sistema_normativo.md`;
3. comprobar si existe derogación explícita;
4. comprobar si existe sustitución explícita.

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

La cronología nunca constituye criterio de autoridad.

La ausencia de información obligatoria invalida la autoridad normativa del artefacto correspondiente.
