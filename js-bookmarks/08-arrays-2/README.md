# Bookmark: Arrays II

## Ejercicio 1: Agregar nuevo enlace

Vamos a añadir un nuevo bookmark al listado de enlaces desde el formulario. Haz una nueva función manejadora del evento click del botón **Guardar** del formulario, podemos llamarla `saveNewBookmark(ev)`.

Esta función obtiene los valores de cada uno de los inputs, crea un nuevo objeto `newBookmarkDataObject` que agregaremos al listado de enlaces con la siguiente línea de código:

```js
bmkData.push(newBookmarkDataObject);
```

Recuerda limpiar los valores de los `inputs` y volver a ocultar la sección del formulario.

## Ejericio 2: Cancelar formulario

Haz el código necesario para ocultar la sección del fomulario de añadir un nuevo enlace. Recuerda tambien limpiar los valores de los `inputs`.
