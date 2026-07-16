# 02 · Relaciones

Estado: RFC-001 (Draft)

Versión: 0.1

---

## Breadcrumb

Architecture

↓

Relaciones

---

# Propósito

Definir las relaciones permitidas entre los objetos del Modelo Organizacional.

Los objetos nunca existen aislados.

El conocimiento aparece únicamente cuando existen relaciones entre ellos.

---

# Principio

Los objetos almacenan identidad.

Las relaciones almacenan significado.

---

# Tipos de relación

## Contiene

Organización

→ contiene

Equipos

---

## Pertenece a

Persona

→ pertenece a

Equipo

---

## Genera

Evento

→ genera

Observación

---

## Produce

Documento

→ produce

Evidencias

---

## Sustenta

Evidencia

→ sustenta

Afirmación

---

## Debilita

Evidencia

→ debilita

Afirmación

---

## Contradice

Afirmación

→ contradice

Afirmación

---

## Incrementa

Evento

→ incrementa

Riesgo

---

## Reduce

Evidencia

→ reduce

Incertidumbre

---

## Modifica

Evento

→ modifica

Capacidad

---

## Calcula

Modelo Organizacional

→ calcula

Indicadores

---

# Regla

Nunca podrá existir una afirmación sin, al menos, una relación de soporte o una incertidumbre explícita.

---

# Invariante

Toda relación posee:

- origen
- destino
- fecha
- procedencia
- confianza

La relación es un ciudadano de primera clase.

No un atributo.
