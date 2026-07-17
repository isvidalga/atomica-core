# Fragmentación de la Memoria

> **ID:** 25 | **Categoría:** Percepción y aprendizaje | **Severidad:** Medio

---

## Definición

La historia está dispersa en formatos incompatibles, sistemas aislados y repositorios no conectados. Nadie tiene la vista completa porque la memoria organizacional está fragmentada en silos de información que no se comunican entre sí.

---

## Por qué importa

La fragmentación de la memoria impide el aprendizaje sistémico. Decisiones se toman sin conocimiento de precedentes, errores se repiten porque nadie sabe que ya ocurrieron, y la historia se convierte en un rompecabezas que nadie puede armar. La organización es amnésica por diseño.

---

## Señales de activación

- Documentos en múltiples formatos y sistemas sin índice central
- Equipos que desconocen decisiones o proyectos de otros departamentos
- Búsqueda de información que requiere consultar 3+ repositorios
- Información relevante que existe pero nadie sabe dónde está
- Nuevos empleados que no pueden acceder al conocimiento histórico

---

## Datos necesarios

- Repositorios de documentos con formatos y metadatos
- Grafo de conectividad entre documentos
- Metadatos de acceso (quién accede a qué, cuándo)
- Registro de búsquedas fallidas de información
- Mapa de sistemas de información y sus integraciones

---

## Método de detección

Medir la conectividad del grafo de documentos: nodos (documentos) y aristas (referencias cruzadas). Si el grafo es desconectado (múltiples componentes sin conexión entre sí), la memoria está fragmentada. También medir la tasa de búsquedas fallidas y el tiempo para encontrar información histórica relevante.

---

## Nivel de severidad

**Medio**

---

## Relación con otros patrones

- Aprendizaje Organizacional Ausente (10): sin memoria conectada no hay aprendizaje
- Silos de Información (15): la fragmentación es también horizontal
- Déficit de Memoria de Fallos (39): los fracasos se pierden en la fragmentación
- Narrativa Retrospectiva (50): la fragmentación permite la reescritura

---

## Posibles intervenciones

- Crear repositorio central con motor de búsqueda unificado
- Establecer estándares de metadatos y etiquetado
- Implementar sistema de referencias cruzadas obligatorias
- Designar 'archiveros' o curadores de conocimiento por área
- Migrar información histórica a formato accesible y conectado

---

## Condición de remisión

El grafo de documentos muestra conectividad >80%, el tiempo medio para encontrar información histórica relevante desciende por debajo de 5 minutos, y no se registran búsquedas fallidas por información existente durante al menos 12 meses.

---

*Documento generado como parte del repositorio de patrones de inteligencia organizacional.*
