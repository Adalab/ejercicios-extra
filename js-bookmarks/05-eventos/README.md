# Bookmark: Eventos

Antes de hacer los ejercicios puedes verificar si tienes las funciones creadas de la sesión anterior.

## Ejercicio 1

Haz una función (podemos llamarla `handleClickLinkDropdown`) para mostrar y/o ocultar el menú lateral. Agrega un evento para cuando damos `click` en el botón hamburguesa.

> **Nota**: Recuerda utilizar el `event.preventDefault()`

## Ejercicio 2

Haz las funciones necesarias para cambiar la vista de los bookmarks a tarjetas.

- Agrega un evento `click` al botón "Vista Tarjetas" del menú que cambie la vista a tarjetas de los bookmarks.
- Además agrega y/o elimina la clase `selected` de los botones para resaltarlo.

```js
...
  buttonShowTable.classList.remove('selected');
  buttonShowCardview.classList.add('selected');
...
```

## Ejercicio 3

Haz las funciones necesarias para cambiar la vista de los bookmarks a tabla.

- Agrega un evento `click` al botón "Vista Tabla" del menú que cambie la vista a tabla de los bookmarks.
- Además agrega y/o elimina la clase `selected` de los botones para resaltarlo.

```js
...
buttonShowCardview.classList.remove('selected');
buttonShowTable.classList.add('selected');
...
```

## Ejercicio 4

Crea las funciones necesarias para mostrar el formulario de añadir una nueva tarjeta cuando damos `click` en el botón nueva. Para ello puedes hacer uso de la función `showAddForm()`

```js
//función que muestra el formulario para agregar un nuevo enlace

function showAddForm() {
  sectionAdd.classList.remove("hidden");
}
```
