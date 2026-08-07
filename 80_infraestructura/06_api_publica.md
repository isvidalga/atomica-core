# API Pública

Estado: CANÓNICO

Versión: 1.0

---

# Propósito

La API Pública permite acceder a ATÓMICA desde aplicaciones externas.

La API nunca expone el Modelo Vivo completo.

Solo expone información autorizada.

---

# Principios

- API REST.
- JSON.
- HTTPS obligatorio.
- Versionada.
- Idempotencia cuando proceda.
- Trazabilidad completa.
- Rate limiting.

---

# Autenticación

Todos los accesos requieren autenticación.

Métodos permitidos:

- API Key
- OAuth2

Cada clave pertenece a una organización.

---

# Permisos

Los permisos se conceden por ámbito.

Ejemplos:

- lectura_empresa
- lectura_diagnosticos
- lectura_resultados
- escritura_evidencias
- escritura_eventos

Nunca existen permisos globales.

---

# Recursos

La API podrá exponer:

- organizaciones
- diagnósticos
- observaciones
- evidencias
- resultados
- intervenciones
- informes

---

# Webhooks

ATÓMICA podrá emitir eventos.

Ejemplos:

- diagnóstico completado
- evidencia validada
- intervención creada
- cambio de estado
- informe generado

---

# Límites

Toda integración tendrá:

- cuota
- velocidad máxima
- auditoría
- revocación inmediata

---

# Compatibilidad

Toda versión mayor mantiene soporte durante el periodo definido por la plataforma.

Las versiones obsoletas podrán retirarse.

---

# Principio final

La API existe para ampliar el ecosistema de ATÓMICA.

Nunca para sustituir la aplicación oficial.
