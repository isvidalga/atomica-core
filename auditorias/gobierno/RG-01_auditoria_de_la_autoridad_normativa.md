# RG-01 · Auditoría de la autoridad normativa

| Campo | Valor |
|--------|-------|
| Identificador | RG-01 |
| Serie | Gobierno del Canon |
| Estado | ABIERTA |

---

# Propósito

Determinar si el Canon posee un sistema de autoridad documental capaz de establecer de forma verificable qué artefacto prevalece cuando existen decisiones concurrentes.

Esta auditoría no modifica documentos.

No propone remediaciones.

No interpreta.

Únicamente verifica el funcionamiento del sistema normativo.

---

# Alcance

Incluye exclusivamente:

- 00_canon/
- 10_nucleo/axiomas.md
- auditorias/

Quedan fuera del alcance:

- Ontología
- Epistemología
- Metodología
- Producto
- Interfaces
- Implementaciones

salvo cuando sean citadas explícitamente como autoridad.

---

# Objetivo

Responder una única pregunta.

> ¿Puede el Canon determinar de forma inequívoca cuál es la autoridad vigente?

---

# Restricciones

La auditoría deberá:

- utilizar únicamente evidencias documentales;
- citar literalmente todas las afirmaciones relevantes;
- distinguir hechos de inferencias;
- registrar contradicciones sin resolverlas;
- no proponer modificaciones;
- no reinterpretar documentos.

---

# Tareas

## T1 · Inventario normativo

Inventariar todos los tipos normativos definidos por el Canon.

Para cada uno indicar:

- nombre;
- definición;
- autoridad;
- precedencia;
- restricciones;
- estados permitidos.

Fuentes:

- 00_canon/sistema_normativo.md
- 00_canon/gobierno_del_canon.md
- 00_canon/naturaleza_decision.md

---

## T2 · Inventario de autoridad documental

Inventariar todos los documentos que declaran autoridad.

Construir una tabla:

| Documento | Tipo declarado | Estado | Autoridad declarada | Deriva de |

Cuando un dato no exista deberá indicarse literalmente:

NO DECLARADO

---

## T3 · Grafo de autoridad

Reconstruir exclusivamente las relaciones declaradas.

No inferir relaciones.

No completar enlaces implícitos.

---

## T4 · Integridad documental

Verificar:

- referencias rotas;
- documentos inexistentes;
- documentos duplicados;
- ciclos;
- autoridades ausentes;
- documentos citados que no existen.

---

## T5 · Contradicciones normativas

Registrar todas las contradicciones detectadas.

Clasificarlas como:

RN-001 · Tipo inexistente

RN-002 · Autoridad inexistente

RN-003 · Referencia rota

RN-004 · Cadena de autoridad imposible

RN-005 · Normas incompatibles

RN-006 · Cambio no derogado

RN-007 · Estado no reconocido

RN-008 · Jerarquía irresoluble

No resolver ninguna.

---

## T6 · Cadena normativa

Reconstruir la cadena completa de autoridad desde:

00_canon

hasta

el documento más reciente de auditoría normativa.

Indicar exactamente el primer punto donde deja de poder determinarse la autoridad.

---

## T7 · Dictamen

Emitir únicamente uno de los siguientes:

A · La autoridad normativa es determinable.

B · Existen contradicciones, pero la autoridad sigue siendo determinable.

C · La autoridad normativa deja de ser determinable.

Justificar exclusivamente mediante citas documentales.

---

# Entregables

La auditoría deberá contener exactamente seis secciones:

1. Inventario normativo.
2. Inventario documental.
3. Grafo de autoridad.
4. Contradicciones registradas.
5. Cadena normativa.
6. Dictamen.

No podrá contener propuestas de solución.

No podrá modificar ningún documento.

No podrá ejecutar ninguna remediación.
