# Esquema BD v2

Estado: CANÓNICO

Versión: 2.0.0

Tipo: Infraestructura

Ubicación:

80_infraestructura/esquema_bd_v2.md

---

# Propósito

Este documento define el modelo lógico de persistencia de ATÓMICA.

Es la especificación que deberá implementarse en PostgreSQL/Supabase.

No define el dominio.

No modifica el Canon.

No sustituye al Diccionario de Datos.

---

# Alcance

Este documento especifica:

* entidades persistentes;
* relaciones;
* claves primarias;
* claves foráneas;
* dependencias entre módulos;
* orden de creación del esquema.

No especifica:

* tipos detallados;
* RLS;
* índices;
* SQL;
* migraciones.

---

# Módulos

```
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
```

---

# DAG de dependencias

```
Marco metodológico
        │
        ▼
Organizaciones
        │
        ▼
Observaciones
      ┌─┴───────────────┐
      ▼                 ▼
Modelo Vivo       Evidencias
      │                 │
      └──────┬──────────┘
             ▼
        Hipótesis
             │
             ▼
      Intervenciones
             │
             ▼
      Credenciales

Conocimiento agregado
▲
│
└──────────── Modelo Vivo

Plataforma
│
├── Organizaciones
├── Modelo Vivo
├── Credenciales
└── auth.users
```

---

# Dependencias prohibidas

No podrán existir dependencias desde:

* Conocimiento agregado hacia Modelo Vivo.
* Plataforma hacia Metodología.
* Evidencias hacia Hipótesis.
* Credenciales hacia Intervenciones.

---

# Orden de creación

## Fase 1

Marco metodológico

## Fase 2

Organizaciones

## Fase 3

Observaciones

## Fase 4

Modelo Vivo

## Fase 5

Evidencias

## Fase 6

Hipótesis

## Fase 7

Intervenciones

## Fase 8

Credenciales

## Fase 9

Conocimiento agregado

## Fase 10

Plataforma

---

# Correspondencia

Cada entidad definida en este documento deberá estar desarrollada íntegramente en:

```
80_infraestructura/diccionario_datos_bd_v2.md
```

No podrán existir entidades en uno de los documentos que no existan en el otro.

---

# Implementación

La implementación SQL deberá reproducir exactamente este esquema.

Cualquier diferencia entre el código y este documento constituye una no conformidad.
