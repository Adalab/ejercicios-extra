# AdaBookmark: Eventos

## Ejercicios

### 1. Mostrar/ocultar menú

Agrega un evento para cuando damos `click` en el botón hamburguesa. Haz una función (podemos llamarla `handleClickLinkDropdown`) que muestra u oculta el menú colapsable dependiendo de su estado actual.

> **Nota**:
> Recuerda utilizar el `event.preventDefault()`.
> La clase `collapsed` es la que muestra y/u oculta el menú colapsable.

### 2. Marcadores en vista tarjetas

Haz las funciones necesarias para cambiar la vista de los marcadores a tarjetas.

- Agrega un evento `click` al botón "Vista Tarjetas" del menú que cambie la vista a tarjetas de los marcadores.
- Agrega y/o elimina la clase `selected` de los botones para resaltarlo.

```js
...
  buttonShowTable.classList.remove('selected');
  buttonShowCardview.classList.add('selected');
...
```

### 3. Marcadores en vista tabla

Haz el código necesario para cambiar la vista de los marcadores a tabla.

- Agrega un evento `click` al botón "Vista Tabla" del menú que cambie la vista a tabla de los marcadores.
- Agrega y/o elimina la clase `selected` de los botones para resaltarlo.

```js
...
buttonShowCardview.classList.remove('selected');
buttonShowTable.classList.add('selected');
...
```

### 4. Mostrar/ocultar formulario

Crea el evento para mostrar el formulario de añadir una nueva tarjeta cuando damos `click` en el botón **Nueva**. Para ello puedes hacer uso de la función `showAddForm()`.

```js
//función que muestra el formulario para agregar un nuevo enlace

function showAddForm() {
  sectionAdd.classList.remove("hidden");
}
```
