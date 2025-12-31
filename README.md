
**Autor:** Pablo Suntaxi
**Fecha:** 13/12/2025

---

## 1. Descripción

Este proyecto contiene la implementación de pruebas automatizadas sobre la aplicación web
[https://www.demoblaze.com](https://www.demoblaze.com), desarrolladas utilizando **Cypress.io**.

El proyecto incluye la resolución de **dos ejercicios**:

* **Ejercicio 2:** Pruebas automatizadas de APIs para los servicios de registro (signup) y
  autenticación (login).

El ejercicio fue resuelto utilizando Cypress.io, framework permitido según las instrucciones.
Por esta razón, los criterios asociados a **Karate** (karate-report, archivos feature y scenario
outline) no aplican a esta implementación.

---



## 2. Ejercicio 2 – Pruebas de APIs

Se realizaron pruebas automatizadas sobre los servicios REST expuestos por Demoblaze para los
siguientes escenarios:

* Crear un nuevo usuario (signup)
* Intentar crear un usuario ya existente
* Login con usuario y contraseña correctos
* Login con usuario y contraseña incorrectos

Servicios evaluados:

```
https://api.demoblaze.com/signup
https://api.demoblaze.com/login
```

El archivo de prueba correspondiente es:

```
cypress/e2e/apis.cy.js
```

---

## 3. Requisitos previos

* Node.js (versión LTS recomendada)
* npm
* Navegador Google Chrome (opcional, para ejecución interactiva)

---

## 4. Instalación

1. Descomprimir el archivo `.zip` del proyecto.
2. Abrir una terminal en la raíz del proyecto.
3. Instalar las dependencias ejecutando:

```bash
npm install
```

---

## 5. Ejecución de las pruebas

### Ejecutar todas las pruebas en modo headless:

```bash
npx cypress run
```

### Ejecutar en modo interactivo:

```bash
npx cypress open
```

Luego seleccionar el archivo de prueba deseado.

---

## 6. Framework utilizado

* Cypress.io versión **15.7.1**

---

## 7. Evidencias

Las evidencias de ejecución (screenshots) se generan automáticamente en caso de fallos y se
almacenan en la ruta:

```
cypress/screenshots
```

---

## 8. Documentación adicional

Las conclusiones y hallazgos de cada ejercicio se encuentran documentados en los siguientes
archivos:

* `Conclusiones Ejercicio de APIs.txt`
