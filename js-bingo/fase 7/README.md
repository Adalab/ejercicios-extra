# Fase 7 de la programación: Programar cada una de las cajas (pero con datos falsos)

## ¿Qué tenemos que hacer?

- Las cajas que están en la parte superior del diagrama se suelen corresponder con eventos, por ello tenemos que escribir en el código los `addEventListeners` y sus correspondientes funciones manejadoras de esos eventos.
- También vamos a crear una función por cada caja que hayamos pintado en el flujo.
- Al final tendremos una función para cada caja del flujo.
- Vamos a darle buenos nombres a las funciones que describan lo que hacen.
  - Si una función no hace lo que dice o la función está mal o el nombre está mal.
- NO vamos a programar escribir los parámetros que reciben todas estas funciones (todavía).
- Cuerpo de la función:
  - NO vamos a programar el cuerpo de la función (todavía).
  - Solo vamos a escribir en el cuerpo de la función un `console.log` para pintar en consola lo que hace la función. Por ejemplo `console.log('Genero un número aleatorio y lo retorno');`.
  - Si alguna de las cajas que hemos pintado es un rombo, es decir es una bifurcación, vamos a programar lo siguiente `if (true) { console.log('Genero un número aleatorio y lo retorno) ; } else { console.log('Leo un número desde un input y lo devuelvo'); }`.
- Vamos a ejecutar funciones desde dentro de unas funciones para enlazalar unas cajas del flujo con otras.

Una vez hecho todo esto al pulsar en un botón o realizar una de las acciones de entrada, debería aparecer en consola un mensaje por cada una de las cajas. Es decir en consola se estará pintando el flujo.

Si en nuestro flujo hay bifurcaciones (rombos) tenemos que cambiar los `if (true) {...} else {...}` de antes por lo mismo pero con `false`. Volvemos a pulsar en el botón y se volverá a pintar en consola el flujo pero esta vez con otros mensajes.

Tenemos que veficiar que lo que se pinta en consola es lo mismo que hemos pintado en nuestro flujo en papel.

Ya tenemos el flujo programado!!!

## Fase 7 del bingo

En el `index.html` y `main.js` de esta carpeta están programadas las funciones. A lo mejor en futuras fases necesitamos añadir, cambiar o borrar alguna de estas funciones pero a grandes rasgos éstas son las que vamos a necesitar.

Prueba a cambiar los `true` y `false` de los `if` del código y abre la consola de devtools para ver cómo vamos pintando el flujo de la página.
