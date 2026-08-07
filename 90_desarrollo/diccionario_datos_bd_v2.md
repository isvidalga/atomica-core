# Diccionario de datos BD v2

Estado: DESARROLLO

Versión: 1.0.0

Tipo: Desarrollo

Ubicación:

90_desarrollo/diccionario_datos_bd_v2.md

---

# Propósito

Definir todas las entidades persistentes que componen la Base de Datos v2.

Este documento constituye la especificación previa al esquema SQL.

---

# Información definida para cada entidad

Cada entidad deberá especificar:

- nombre;
- responsabilidad;
- agregado;
- clave primaria;
- claves foráneas;
- relaciones;
- restricciones;
- observaciones.

No define tipos SQL.

No define índices.

---

# Agregados

## Marco metodológico

- metodologia
- dimension
- capacidad
- pregunta
- escala
- umbral

## Organización

- organizacion
- usuario_organizacion
- rol
- evento_identidad

## Observación

- observacion
- respuesta
- instrumento
- origen_observacion

## Modelo Vivo

- modelo_vivo
- estado_sistemico
- trayectoria

## Evidencias

- evidencia
- archivo_evidencia
- confianza

## Hipótesis

- hipotesis
- contradiccion

## Intervenciones

- intervencion
- seguimiento_intervencion

## Credenciales

- credencial
- sello

## Benchmark

- benchmark
- percentil
- referencia_benchmark

## Plataforma

- suscripcion
- auditoria
- telemetria
- configuracion
- conector
- notificacion

---

# Regla de evolución

Toda nueva tabla deberá incorporarse previamente a este documento antes de implementarse en SQL.
