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

// Traemos los datos.

fetch(SERVER_URL)
  .then(response => response.json())
  .then(data => {
    debugger;
    console.log(data);
    bmkData = data.results;
    renderBookmerksList(bmkData);
  })
  .catch(error => {
    console.error(error);
  });

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

  bmkData.push(newBookmarkDataObject);

  renderBookmerksList(bmkData);

  newURLInput.value = '';
  newDescriptionInput.value = '';
  newTagsInput.value = '';
  newBookmarkErrorsBox.innerHTML = '';
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

// Día 4: Funciones que generan el HTML de cada bookmark

/**
 * Genera un código HTML para representar la lista de etiquetas de un bookmark,
 * teniendo en cuenta que alguna etiqueta (o las dos) puede estar vacía.
 *
 * @param {string} tags_1 Nombre de la primera etiqueta de un bookmark
 * @param {string} tags_2 Nombre de la segunda etiqueta de un bookmark
 * @returns Un String con el HTML de la lista de etiquetas
 */

function renderTags(tags) {
  if (tags.length === 0) {
    return '<p class="item__tags">No tiene etiquetas</p>';
  }

  let htmlTags = `
    <ul class="item__tags">`;

  for (const eachTag of tags) {
    htmlTags += `
      <li class="item__tag">${eachTag}</li>`;
  }

  htmlTags += `      
    </ul>
  `;

  return htmlTags;
}

/**
 * Genera los atributos para el <input> que representa si un bookmark
 * ya está leído o no.
 *
 * @param {bool} seen Propiedad que indica con true si ya está leído
 * @returns Atributos a añadir al elemento <input>
 */

function renderSeen(seen) {
  if (seen) {
    return 'checked title="Enlace leído"';
  } else {
    return 'title="Por leer"';
  }
}

// Día 6: Cambio de función render para que reciba un objeto como parámetro

/**
 * Genera el código HTML de un bookmark.
 *
 * @param {Object} bmkData Objeto con todos los datos del bookmark a representar
 * @returns Un String con el código HTML que representa el bookmark.
 */

function renderBookmark(bmkData) {
  const htmlTags = renderTags(bmkData.tags);
  const htmlSeen = renderSeen(bmkData.seen);

  const htmlBookmark = `
    <li class="data__listitem">
      <article class="data__item">
        <p class="item__url">
          <a href="${bmkData.url}" target="_blank" rel="noopener noreferrer">
            ${bmkData.url}
          </a>
        </p>
        <p class="item__seen">
          <input type="checkbox" ${htmlSeen} name="item_seen_2" id="item_seen_2">
        </p>
        <p class="item__desc">${bmkData.description}</p>
        ${htmlTags}
      </article>
    </li>
    `;

  return htmlBookmark;
}

// Día 7: Invocamos a la función `renderBookmark()` dentro de un bucle for-of
// porque queremos que se ejecute para cada elemento de la lista `bmkData`.
// Usamos un bucle for-of para recorrer y guardar en una variable cada elemento/objeto
// que hay en la lista `bmkData`.

// El HTML que van generando, lo acumulamos en la variable html.
// Debemos declararla e inicializarla vacía antes (y fuera) del bucle.
function renderBookmerksList(bmkData) {
  let html = '';

  for (const oneBookmarkDataObject of bmkData) {
    html += renderBookmark(oneBookmarkDataObject);
  }

  // Ponemos todo el HTML generado como innerHTML del <ul> de la página.

  listData.innerHTML = html;
}

renderBookmerksList(bmkData);

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
