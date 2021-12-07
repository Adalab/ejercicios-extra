# Bookmark: Objetos

## Ejercicio 1

Crea un objeto `bmkData` para cada uno de los enlaces que contenga toda la información de las variables: `bmk_1_url`, `bmk_1_desc`, `bmk_1_seen`, `bmk_1_tags_1`, `bmk_1_tags_2`. Por ejemplo:

```js
//objeto con la información del primer enlace
const bmkData_1 = {
  url: "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion",
  desc: "JS en los materiales de Adalab",
  seen: true,
  tags_1: "javascript",
  tags_2: "",
};
```

Luego modifica la función `renderBookmark` para que reciba un objeto como parámetro.

```js
...
function renderBookmark(bmkData) {
...
```
