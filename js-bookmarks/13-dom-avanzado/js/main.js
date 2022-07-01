'use strict';

/*              Sección de elementos que usamos en el HTML             */
/*  -----------------------------------------------------------------  */

const menuDropdown = document.querySelector('.js_menu_dropdown');
const linkDropdown = document.querySelector('.js_link_dropdown');
const sectionAdd = document.querySelector('.js_section_add');
const buttonAdd = document.querySelector('.js_button_add');
const boardData = document.querySelector('.js_boarddata');
const listData = document.querySelector('.js_list_data');
const buttonShowCardview = document.querySelector('.js_cardview_button');
const buttonShowTable = document.querySelector('.js_table_button');

// Día 9
const saveNewBookmarkButton = document.querySelector('.js_button_save');
const cancelNewBookmarkButton = document.querySelector('.js_button_cancel');
const newURLInput = document.querySelector('.js_new_url');
const newDescriptionInput = document.querySelector('.js_new_description');
const newTagsInput = document.querySelector('.js_new_tags');
const newBookmarkErrorsBox = document.querySelector('.js_form_errors');

/*    Sección de variables globales (que usamos en todo el fichero)    */
/*  -----------------------------------------------------------------  */

// Día 10: fetch

const GITHUB_USER = 'tu_usuario_de_github_aqui';
const SERVER_URL = `https://adalab-bookmarks-api.herokuapp.com/api/bookmarks/${GITHUB_USER}`;



let bmkData = [];

// Día 11.1: Almacenar los datos en el localStorage
/*
const bookmarksStored = JSON.parse(localStorage.getItem('bookmarks'));

if( bookmarksStored ) {
  bmkData = bookmarksStored;
  renderBookmerksList(bmkData);
}
else {
  // Traemos los datos.

  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      bmkData = data.results;
      localStorage.setItem('bookmarks', JSON.stringify(bmkData));
      renderBookmerksList(bmkData);
    })
    .catch((error) => {
      console.error(error);
    });
}
*/

/*                        Sección de funciones                         */
/*  -----------------------------------------------------------------  */

// Día 9.1: Añadir bookmark del formulario al array.

function saveNewBookmark(ev) {
  ev.preventDefault();

  const newURL = newURLInput.value;
  const newDescription = newDescriptionInput.value;
  const newTags = newTagsInput.value.split(' ');

  // La línea anterior, pero evitando que salgan etiquetas vacías:
  //const newTags = newTagsInput.value.trim().replace(/ +/, ' ').split(' ').filter(String);

  // Validación del formulario
  // if( newURL === '' ) {
  //   newBookmarkErrorsBox.innerHTML = 'Tienes que especificar una dirección.'
  //   return;
  // }
  // else if( newDescription === '' ) {
  //   newBookmarkErrorsBox.innerHTML = 'Tienes que especificar una descripción.'
  //   return;
  // }

  const newBookmarkDataObject = {
    url: newURL,
    description: newDescription,
    seen: false,
    tags: newTags,
  };

  // Día 11.2: Mandar datos nuevo bookmark al servidor

  fetch(`https://adalab-bookmarks-api.herokuapp.com/api/bookmark/${GITHUB_USER}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBookmarkDataObject),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        bmkData.push(newBookmarkDataObject);
        localStorage.setItem('bookmarks', JSON.stringify(bmkData));
        renderBookmerksList(bmkData);

        newURLInput.value = '';
        newDescriptionInput.value = '';
        newTagsInput.value = '';
        newBookmarkErrorsBox.innerHTML = '';

      }
      else {
        newBookmarkErrorsBox.innerHTML = 'No se ha podido guardar el bookmark en el servidor. Inténtalo más tarde.'

        sectionAdd.classList.remove('hidden');
      }
    });

  sectionAdd.classList.add('hidden');
}

function cancelNewBookmark(ev) {
  ev.preventDefault();

  newURLInput.value = '';
  newDescriptionInput.value = '';
  newTagsInput.value = '';
  newBookmarkErrorsBox.innerHTML = '';
  sectionAdd.classList.add('hidden');
}

saveNewBookmarkButton.addEventListener('click', saveNewBookmark);
cancelNewBookmarkButton.addEventListener('click', cancelNewBookmark);

/**
 * Genera un código HTML para representar la lista de etiquetas de un bookmark,
 * teniendo en cuenta que el bookmark puede no tener etiquetas.
 *
 * @param {array} tags Array de nombres de las etiquetas de un bookmark
 * @returns Un elemento UL con el HTML de la lista de etiquetas
 */

function renderTags(tags) {
  if (tags.length === 0) {
    const pgraphTags = document.createElement('p');
    pgraphTags.classList.add('item__tags');
    const textTags = document.createTextNode('No tiene etiquetas');
    pgraphTags.appendChild(textTags);

    return pgraphTags;
  }

  let ulTags = document.createElement('ul');
  ulTags.classList.add('item__tags');

  for (const eachTag of tags) {
    const textTag = document.createTextNode(eachTag);

    const liTag = document.createElement('li');
    liTag.classList.add('item__tag');
    liTag.appendChild(textTag);

    ulTags.appendChild(liTag);
  }

  return ulTags;
}



// Día 12: Cambio de función render usando creación de elementos DOM

/**
 * Genera el código HTML de un bookmark.
 *
 * @param {Object} bmkData Objeto con todos los datos del bookmark a representar
 * @returns Un String con el código HTML que representa el bookmark.
 */

function renderBookmark(bmkData) {
  console.log(bmkData);

  const liElement = document.createElement('li');
  liElement.classList.add('data__listitem');

  const articleElement = document.createElement('article');
  articleElement.classList.add('data__item');
  liElement.appendChild(articleElement);

  const pgraphForURL = document.createElement('p');
  pgraphForURL.classList.add('item__url');
  articleElement.appendChild(pgraphForURL);

  const linkForURL = document.createElement('a');
  linkForURL.href = bmkData.url;
  linkForURL.target = '_blank';
  linkForURL.rel = 'noopener noreferrer'
  pgraphForURL.appendChild(linkForURL);

  const textForURL = document.createTextNode(bmkData.url);
  linkForURL.appendChild(textForURL);

  const pgraphForSeen = document.createElement('p');
  pgraphForSeen.classList.add('item__seen');
  articleElement.appendChild(pgraphForSeen);

  const inputForSeen = document.createElement('input');
  inputForSeen.type = 'checkbox';
  inputForSeen.name = `item_seen_${bmkData.id}`;
  inputForSeen.id = `item_seen_${bmkData.id}`;
  inputForSeen.checked = bmkData.module;
  inputForSeen.title = bmkData.module ? 'Enlace leído' : 'Por leer';
  pgraphForSeen.appendChild(inputForSeen);

  const pgraphForDescription = document.createElement('p');
  pgraphForDescription.classList.add('item__desc');
  articleElement.appendChild(pgraphForDescription);

  const textForDescription = document.createTextNode(bmkData.description);
  pgraphForDescription.appendChild(textForDescription);

  const htmlForTags = renderTags(bmkData.tags);
  //articleElement.innerHTML += htmlForTags;
  articleElement.appendChild(htmlForTags);


  return liElement;
}

// Día 7: Invocamos a la función `renderBookmark()` dentro de un bucle for-of
// porque queremos que se ejecute para cada elemento de la lista `bmkData`.
// Usamos un bucle for-of para recorrer y guardar en una variable cada elemento/objeto
// que hay en la lista `bmkData`.

// El HTML que van generando, lo acumulamos en la variable html.
// Debemos declararla e inicializarla vacía antes (y fuera) del bucle.
function renderBookmerksList(bmkData) {
  // Vaciamos el innerHTML del <ul> de la página.
  listData.innerHTML = '';

  for (const oneBookmarkDataObject of bmkData) {
    const newLiItem = renderBookmark(oneBookmarkDataObject);
    listData.appendChild(newLiItem);
  }


}

// --------------------

// Día 4: Funciones para cambiar la visualización de la lista de bookmarks.

/**
 * Cambia el modo de visualización de bookmarks a lista de tarjetas.
 */

function setCardListView() {
  boardData.classList.remove('tableview');
  boardData.classList.add('listview');
}

/**
 * Cambia el modo de visualización de bookmarks tabla.
 */

function setTableView() {
  boardData.classList.remove('listview');
  boardData.classList.add('tableview');
}

// Día 4: Funciones para mostrar y ocultar el menú dropdown

/**
 * Muestra el menú colapsable
 */

function showDropDownMenu() {
  menuDropdown.classList.remove('collapsed');
}

/**
 * Oculta el menú colapsable
 */

function hideDropDownMenu() {
  menuDropdown.classList.add('collapsed');
}

/**
 * Muestra u oculta el menú colapsable dependiendo de su estado actual.
 */

function toggleDropDownMenu() {
  if (menuDropdown.classList.contains('collapsed')) {
    showDropDownMenu();
  } else {
    hideDropDownMenu();
  }

  // Lo anterior es lo mismo que usar:
  //
  // menuDropdown.classList.toggle('collapsed');
}

// Día 4: Función para mostrar el formulario de añadir bookmark

/**
 * Muestra el formulario para añadir un nuevo bookmark
 */

function showAddForm() {
  sectionAdd.classList.remove('hidden');
}

/* Sección de eventos (addEventListener y funciones handler asociadas) */
/*  -----------------------------------------------------------------  */

// Día 5: Se escucha el click en el enlace del botón hamburguesa
// para mostrar u ocultar el menú dropdown.

function handleClickLinkDropdown(event) {
  event.preventDefault();

  toggleDropDownMenu();
}

// Día 5: Se escucha el click del botón "Vista tarjetas" del menú
// dropdown y se cambia la visualización de los bookmarks a tarjetas,
// además de resaltar ese botón.

linkDropdown.addEventListener('click', handleClickLinkDropdown);

function handleClickShowCardview(event) {
  event.preventDefault();

  setCardListView();
  buttonShowTable.classList.remove('selected');
  buttonShowCardview.classList.add('selected');
}

// Día 5: Se escucha el click del botón "Vista tabla" del menú
// dropdown y se cambia la visualización de los bookmarks a tabla,
// además de resaltar ese botón.

buttonShowCardview.addEventListener('click', handleClickShowCardview);

function handleClickShowTable(event) {
  event.preventDefault();

  setTableView();
  buttonShowCardview.classList.remove('selected');
  buttonShowTable.classList.add('selected');
}

buttonShowTable.addEventListener('click', handleClickShowTable);

// Día 5: Se escucha el click en el botón "Nueva" para mostrar
// el formulario de añadir una nueva tarjeta.

buttonAdd.addEventListener('click', showAddForm);
