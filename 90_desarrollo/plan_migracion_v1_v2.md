# Plan de migración v1 → v2

Estado: DESARROLLO

Versión: 1.0.0

Tipo: Desarrollo

Ubicación:

90_desarrollo/plan_migracion_v1_v2.md

---

# Propósito

Definir la transición desde el esquema v1 al esquema canónico v2.

Toda migración deberá preservar la integridad de los datos y la trazabilidad histórica.

---

# Estrategia

La migración se realizará por sustitución controlada.

No se modificará el esquema v1.

Se construirá un esquema v2 completo.

Los datos necesarios serán migrados.

Una vez validado el funcionamiento se retirará el esquema anterior.

---

# Fase 1 · Construcción

Crear completamente el esquema v2.

No migrar datos.

No conectar el frontend.

---

# Fase 2 · Catálogos

Migrar:

- metodología
- dimensiones
- capacidades
- preguntas
- umbrales
- escalas

Verificar integridad.

---

# Fase 3 · Organizaciones

Migrar:

- organizaciones
- usuarios
- pertenencias

Validar relaciones.

---

# Fase 4 · Observaciones

Migrar:

- diagnósticos
- respuestas

Transformar el diagnóstico inicial en observaciones compatibles con v2.

---

# Fase 5 · Modelo Vivo

Generar para cada organización:

- Modelo Vivo
- Estado inicial
- Trayectoria inicial

No copiar resultados calculados.

Todos los estados deberán reconstruirse.

---

# Fase 6 · Evidencias

Migrar:

- evidencias
- referencias a Storage

Mantener identificadores.

---

# Fase 7 · Credenciales

Migrar:

- credenciales públicas
- sellos
- verificaciones

Sin modificar tokens emitidos.

---

# Fase 8 · Plataforma

Migrar:

- configuración
- suscripciones
- auditoría
- métricas

---

# Datos que no se migran

No se migran:

- tablas obsoletas
- estructuras duplicadas
- cálculos derivados
- tablas de demo
- código legado

---

# Validaciones

La migración se considerará correcta cuando:

- todas las organizaciones existan;
- todas las observaciones sean recuperables;
- todo Modelo Vivo pueda reconstruirse;
- todas las evidencias permanezcan accesibles;
- todas las credenciales sigan siendo verificables.

---

# Rollback

Mientras v2 no sea validada:

- v1 permanecerá intacta;
- no se eliminará ninguna tabla;
- no se sobrescribirá ningún dato.

La retirada definitiva de v1 requerirá validación funcional completa.
