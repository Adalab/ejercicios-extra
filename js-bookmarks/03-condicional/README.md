# AdaBookmark: Condicionales

## Ejercicios

### 1. Visualización de los marcadores

Prueba a cambiar la vista del panel de los marcadores en diferentes formatos: lista o tabla.

A la sección con la clase `data` añadimos las clases `tableview` para que la vista de los enlaces sea en tabla y `listview` para que se muestre en una lista, en dependencia del cual queremos activar. Para ello podemos ver cambiar la clase en el html ver si funciona correctamente:

```html
<section class="data tableview"></section>
```

> **Pista**: Utiliza condicionales y el `classList.contains`

### 2. Búsqueda por descripción

Vamos a comenzar a implementar el filtro de búsqueda por descripción:

1. Muestra el menú hamburguesa y dejalo siempre visible.
2. Selecciona el `input` con el `document.querySelector`

```js
const input_search_desc = document.querySelector(".js_in_search_desc");
```

3. Simula que escribe la usuaria en el `input` de búsqueda.

```js
input_search_desc.value = "materiales";
```

4. Recoge el valor del `input` en una variable.

```js
const descrSearchText = input_search_desc.value;
```

5. Utiliza la función `includes` antes de añadir cada marcador para solo mostrar aquellos marcadores que contengan la palabra introducida por la usuaria:

```js
if( bmk_2_desc.includes(descrSearchText) ) {
    ....
```

### 3. BONUS: No hay categorías, ¿qué se muestra entonces?

Valida la columna de las categorías de los marcadores: Si el marcador no tiene categoría mostraremos el mensaje **No tiene etiquetas**.

![Listado sin categorias](./img/list_without_categories_bkm.png)

Verifica si las categorías tienen algún valor, y en dependencia del resultado muestra el resultado.

```js
if ((bmk_1_tags_1 === "") & (bmk_1_tags_2 === "")) {
  html += `<p class='item__tags'>No tiene</p>`;
} else {
  ...
}
```

### 4. BONUS: Macadores leídos

Cambia el valor de la variable `bmk_1_seen` a `true` o `false`. En dependencia de este valor muestra seleccionado o no el `input` de tipo `checkbox`.
