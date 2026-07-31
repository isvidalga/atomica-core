# Registro de Espacios de Nombres

Estado: CANÓNICO

Versión: 1.0.0

Ubicación:

```
00_canon/registro_espacios_nombres.md
```

---

# Propósito

Este registro declara los espacios de nombres oficiales del canon.

Su responsabilidad consiste exclusivamente en registrar los prefijos autorizados, el concepto al que pertenecen y el documento que ejerce autoridad sobre ellos.

No define reglas de identificación.

No asigna identificadores.

No crea conceptos.

Las reglas del sistema de identificadores pertenecen exclusivamente a:

```
00_canon/politica_identificadores.md
```

---

# Alcance

Todo espacio de nombres oficial deberá estar inscrito en este registro.

Todo prefijo no registrado carece de validez normativa.

---

# Definiciones

## Espacio de nombres

Conjunto oficial de identificadores pertenecientes a un único concepto.

Cada espacio de nombres posee un único prefijo.

---

## Prefijo

Cadena utilizada para identificar un espacio de nombres.

El prefijo no identifica entidades.

Identifica únicamente la pertenencia a una serie registrada.

---

## Documento autoridad

Documento responsable de definir el concepto gobernado por un espacio de nombres.

---

# Registro

| Prefijo | Concepto | Documento autoridad | Estado |
|----------|----------|---------------------|--------|
| *(Sin entradas en la versión 1.0.0)* | | | |

---

# Reglas

## R-001

Cada espacio de nombres aparece exactamente una vez en este registro.

---

## R-002

Un prefijo pertenece exclusivamente a un único espacio de nombres.

---

## R-003

Un concepto posee como máximo un espacio de nombres oficial.

---

## R-004

Todo espacio de nombres identifica un concepto definido por un documento canónico.

---

## R-005

La creación de un espacio de nombres constituye un acto de gobierno del canon.

---

## R-006

La modificación de un espacio de nombres requiere una nueva versión de este registro.

---

## R-007

La retirada de un espacio de nombres nunca elimina su entrada.

Su estado deberá reflejar la condición correspondiente.

---

## R-008

Un prefijo retirado nunca podrá reutilizarse.

---

# Estados

Un espacio de nombres podrá encontrarse únicamente en uno de los siguientes estados:

- Activo
- Obsoleto

---

# Incorporación

La incorporación de un nuevo espacio de nombres requiere:

- existencia previa del concepto correspondiente;
- aprobación por el Gobierno del Canon;
- actualización de este registro.

---

# Modificación

La modificación de un espacio de nombres podrá afectar únicamente a:

- estado;
- documento autoridad.

El prefijo nunca cambia.

---

# Retirada

La retirada de un espacio de nombres:

- no elimina su entrada;
- conserva el historial;
- impide cualquier reutilización futura del prefijo.

---

# Restricciones

No se permite:

- utilizar un prefijo no registrado;
- registrar el mismo prefijo dos veces;
- registrar dos prefijos para un mismo concepto;
- eliminar entradas históricas;
- reutilizar prefijos retirados.

---

# Relaciones

Depende de:

- `00_canon/politica_identificadores.md`
- `00_canon/gobierno_del_canon.md`

Es utilizado por:

- todos los registros documentales;
- todos los procedimientos de incorporación;
- todas las políticas que asignen identificadores oficiales.

---

# Responsabilidad

Este documento registra exclusivamente los espacios de nombres oficiales del canon.

No crea reglas.

No asigna identificadores.

No define conceptos.

No constituye un catálogo de entidades.
