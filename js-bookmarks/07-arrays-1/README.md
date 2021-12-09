# Bookmark: Objetos

## Ejercicio 1

Hoy vamos a crear una única variable `bmkData` que almacenará los datos de todos los enlaces como un array. Podemos usar las variables con objetos del ejercicio de ayer para crear este array:

```js
// Objeto con la información del primer enlace
const bmkData_1 = {
  url: "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion",
  desc: "JS en los materiales de Adalab",
  seen: true,
  tags_1: "javascript",
  tags_2: "",
};

// Objeto con la información del segundo enlace
const bmkData_2 = {
  /* ... */
};

// Objeto con la información del tercer enlace
const bmkData_3 = {
  /* ... */
};

// Lista con la información de todos los enlaces
const bmkData = [ bmkData_1, bmkData_2, bmkData_3 ];
```