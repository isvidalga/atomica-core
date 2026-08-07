# Definición terminado

Estado: CANÓNICO

Versión: 1.0

---

# Propósito

Este documento define cuándo una tarea puede considerarse terminada.

Una tarea que no cumpla todos los criterios continuará abierta.

---

# Requisitos obligatorios

## Funcionalidad

- Cumple el objetivo definido.
- No contiene comportamiento incompleto.
- No contiene funcionalidades simuladas.

---

## Integración

- Integrada con Supabase.
- Sin datos mock.
- Sin datos hardcodeados.

---

## Calidad

- Sin errores conocidos.
- Sin código comentado.
- Sin TODO.
- Sin FIXME.

---

## Arquitectura

- Respeta la arquitectura vigente.
- No duplica lógica.
- No introduce deuda técnica conocida.

---

## Base de datos

Cuando aplique:

- migraciones creadas
- RLS aplicada
- índices creados
- permisos verificados

---

## Frontend

Cuando aplique:

- responsive
- accesible
- estados de carga
- estados vacíos
- gestión de errores

---

## Backend

Cuando aplique:

- validaciones completas
- manejo de errores
- logging
- seguridad revisada

---

## Documentación

Existe documentación suficiente para mantener la funcionalidad.

Si la funcionalidad modifica la arquitectura, la documentación deberá actualizarse antes del cierre de la tarea.

---

## Pruebas

Verificación manual realizada.

Como mínimo:

- flujo correcto
- flujo con error
- permisos
- datos persistidos

---

## Git

- commit realizado
- mensaje descriptivo
- sin archivos temporales
- sin conflictos

---

# Cierre

Una tarea solo podrá marcarse como Finalizada cuando todos los puntos anteriores se hayan verificado.
