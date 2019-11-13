# Fase 3 de la programación: Identificar elementos del DOM y los datos

## ¿Qué tenemos que hacer?

En cualquier página las acciones nos producen y generan datos que vamos a tener que manejar y/o mostrar en la página, en consola, enviar un servidor...

Por lo general los elementos de una página tienen que tener sus correspondientes datos en JS. Una acción va a producir un cambio en estos datos y un cambio en estos datos va producir un cambio en los elementos del DOM de la página.

Para saber qué elementos y datos hay, nos tenemos que preguntar:

- ¿Qué elementos hay en la página que cambian durante la vida de la página?
- ¿Qué datos necesito manejar para que dichos elementos cambien?
- ¿De qué tipo son estos datos? ¿Son número, textos, booleanos, objetos, listados de números, listados de textos, listados de objetos...?

Pues tenemos que apuntar esos datos en el papel.

## Fase 3 del bingo

- ¿Qué elementos hay en la página que cambian durante la vida de la página?
  - El área de **Bolitas**: `<ul class="js-bingo-numbers" />`.
  - El área de **Mi cartón**: `<ul class="js-card-numbers" />`.
  - El mensaje de **Han cantado bingo!!!** que siempre está oculto y al final aparece: `<p class="js-bingo-message" />`.
  - Los botones de **Saca una bolita** y **Play** que siempre están visibles y al final se ocultan: `<button class="js-new-number-btn" />` y `<button class="js-play-btn" />`.
- ¿Qué datos necesito manejar para que dichos elementos cambien?
  - Un listado de números para **Bolitas**.
  - Un listado de números para **Mi cartón**.
  - Si estamos en modo manual o modo automático, es decir, si han pulsado el **Play** o no.
- ¿De qué tipo son estos datos? ¿Son número, textos, booleanos, objetos, listados de números, listados de textos, listados de objetos...?
  - Un array de números para **Bolitas**: `const bingoNumbers = [];`.
  - Un array de números para **Mi cartón**: `const cardNumbers = [];`.
  - Un boolean para saber si estamos en modo manual o modo automático, es decir, si han pulsado el **Play** o no: `let isPlaying = false;`.
