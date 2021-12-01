# Bookmark: Variables

## Ejercicio

Vamos a modificar lo que tenemos realizado hasta el momento en este ejercicio, con el objetivo de comenzar a almacenar la información en variables globales.

1. Para ello vamos a crear variables para cada uno de los bookmarks, por ejemplo podemos crear variables para almacenar cada una de los atributos de los enlaces, quedando las variables del primer enlace como se muestra a continuación:

```js
const bmk_1_url =
  "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion";
const bmk_1_desc = "JS en los materiales de Adalab";
const bmk_1_seen = "checked";
const bmk_1_tags_1 = "javascript";
const bmk_1_tags_2 = "html";
```

> **Nota** : Usamos \_ en los nombres de las variables, pero por una razón académica.
> En JS se suele usar la notación [camelCase](https://es.wikipedia.org/wiki/Camel_case) para los identificadores, tener en cuenta que nos referimos a identificador es igual a nombre de variable.

2. Vamos a añadir esa información de los bookmarks dentro de las variables que creamos en la clase anterior:

```js
const link1 = `
  <li class="data__listitem">
    <article class="data__item">
      <p class="item__url">
        <a href="${bmk_1_url}" target="_blank" rel="noopener noreferrer">
          ${bmk_1_url}
        </a>
      </p>
      <p class="item__seen">
        <input type="checkbox" ${bmk_1_seen} name="item_imp_2" id="item_imp_2">
      </p>
      <p class="item__desc">${bmk_1_desc}</p>
      <ul class="item__tags">
        <li class="item__tag">${bmk_1_tags_1}</li>
        <li class="item__tag">${bmk_1_tags_2}</li>
      </ul>
    </article>
  </li>
  `;
```

3. Vamos a ejecutar estos pasos por cada uno de los enlaces que tenemos hasta el momento. De esta manera tendremos almacenada la información en variables, y cualquier cambio no afectaria la constantes de `link1`, `link2` y `link3`
