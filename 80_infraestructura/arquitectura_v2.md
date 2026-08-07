# Catálogo de conectores

Estado: CANÓNICO

Versión: 1.0.0

---

# Propósito

Definir todas las integraciones externas soportadas por ATÓMICA.

Este documento constituye la única referencia válida para el desarrollo de conectores.

---

# Principios

Un conector:

- nunca contiene lógica de negocio;
- únicamente obtiene o envía información;
- es sustituible;
- es independiente del resto de conectores;
- debe degradarse de forma segura.

Toda interpretación pertenece al Modelo.

---

# Estados

- Planificado
- En desarrollo
- Experimental
- Estable
- Retirado

---

# Catálogo

## ERP

- Holded
- Odoo
- Sage
- SAP Business One

---

## CRM

- HubSpot
- Salesforce
- Pipedrive

---

## RRHH

- Factorial
- Sesame
- Personio

---

## Finanzas

- A3
- ContaSimple

---

## Productividad

- Microsoft 365
- Google Workspace
- Slack
- Teams
- Notion

---

## BI

- Power BI
- Looker Studio

---

## IA

- OpenAI
- Anthropic

---

# Contrato mínimo

Todo conector debe definir:

- nombre
- versión
- proveedor
- autenticación
- permisos requeridos
- frecuencia de sincronización
- datos disponibles
- datos no disponibles
- limitaciones
- estado

---

# Resultado esperado

Todo conector entrega únicamente observaciones estructuradas.

Nunca diagnósticos.

Nunca recomendaciones.

Nunca modifica el Modelo Vivo directamente.
