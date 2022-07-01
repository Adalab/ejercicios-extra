# AdaBookmark: Variables

## Ejercicios

### 1. Interpolar variables

Vamos a usar variables que luego interpolaremos en el string con el HTML de cada marcador. Os proponemos usar 6 variables por cada uno:

1. Una variable para la URL (dirección del marcador).
1. Una variable para la descripción
1. Una variable para indicar si está leido o no.
1. Otras dos variables que indiquen las etiquetas de ese marcador.
1. Una última variable con el HTML del marcador en la que interpolaremos las anteriores.

Por ejemplo:

```js
const bmk_1_url =
  "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion";
const bmk_1_desc = "JS en los materiales de Adalab";
const bmk_1_seen = "checked";
const bmk_1_tags_1 = "javascript";
const bmk_1_tags_2 = "html";
```

> **Nota** : Usamos \_ en los nombres de las variables, pero por una razón académica.
> En JS se suele usar la notación [camelCase](https://es.wikipedia.org/wiki/Camel_case) para los nombres de variable.

### 2. Bonus: Convertir cadenas de carácteres

¿Serías capaz de buscar métodos de `string` para pasar a minúsculas el nombre de las etiquetas?

### 3. Bonus: Reemplaza contenido

¿Serías capaz de quitar el `https://` del principio de la dirección en el contenido del enlace usando otro método de `string`? No lo quites en el html en la propiedad `href`.

---

> Nota.- Comenta el código de ayer en el que se mostraban el menú y el formulario.
