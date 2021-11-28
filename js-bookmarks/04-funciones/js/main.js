'use strict';

const list_data = document.querySelector('.js_datalist');
const menuDropdown = document.querySelector('.js_menu_dropdown');
const boxAdd = document.querySelector('.js_add_box');
const board_data = document.querySelector('.js_databoard');
const input_search_desc = document.querySelector('.js_in_search_desc');




/* Variables primer bookmark */

/* Uso _ en los nombres, pero por una razón académica */
/* En JS se suele usar la notación camelCase para los identificadoree */

const bmk_1_url    = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion';
const bmk_1_desc   = 'JS en los materiales de Adalab';
const bmk_1_lesson = 'checked';
const bmk_1_tags_1 = '';  /* DIA3.2 */
const bmk_1_tags_2 = '';  /* DIA3.2 */

/* Vamos con el segundo bookmark: */

const bmk_2_url    = 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/';
const bmk_2_desc   = 'Ideas de proyectos JS';
const bmk_2_lesson = 'checked';
const bmk_2_tags_1 = 'javascript';
const bmk_2_tags_2 = 'portfolio';

/* Tercer bookmark (y tantos como quieras): */

const bmk_3_url    = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web';
const bmk_3_desc   = 'HTML en los materiales de Adalab';
const bmk_3_lesson = '';
const bmk_3_tags_1 = 'html';
const bmk_3_tags_2 = 'css';

/* Dia4.6 */

function renderBookmarkTags( tags_1, tags_2 ) {
  if( tags_1 === '' && tags_2 == '' ) {
    return `<p class="item__tags">No tiene</p>`;
  }
  else if( tags_2 === '' ) {
    return `
      <ul class="item__tags">
        <li class="item__tag">${tags_1.toLowerCase()}</li>
      </ul>`;
  }
  else {
    return `
      <ul class="item__tags">
        <li class="item__tag">${tags_1.toLowerCase()}</li>
        <li class="item__tag">${tags_2.toLowerCase()}</li>
      </ul>`;
  }
}

function renderBookmark( url, desc, lesson, tags_1, tags_2 ) {
  const tagsHtml = renderBookmarkTags( tags_1, tags_2 );

  let bookmarkHtml = 
    `<li class="data__listitem">
      <article class="data__item">
        <p class="item__url">
          <a href="${url}" target="_blank" rel="noopener noreferrer">
          ${url.replace('https://','')}
          </a>
        </p>
        <p class="item__seen">
          <input type="checkbox" ${lesson} name="item_imp_2" id="item_imp_2">
        </p>
        <p class="item__desc">
          ${desc}
        </p>
        ${tagsHtml}
      </article>
    </li>`;

  return bookmarkHtml;
}

/* Variable de texto vacío que vamos a ir cambiando y añadiendo el html */

let html = '';

html += renderBookmark( bmk_1_url, bmk_1_desc, bmk_1_lesson, bmk_1_tags_1, bmk_1_tags_2 );
html += renderBookmark( bmk_2_url, bmk_2_desc, bmk_2_lesson, bmk_2_tags_1, bmk_2_tags_2 );
html += renderBookmark( bmk_3_url, bmk_3_desc, bmk_3_lesson, bmk_3_tags_1, bmk_3_tags_2 );

/* Se vacia el contenido de la <ul> y se sustituye por html */

list_data.innerHTML = html;





/* Dia4.1-2 Prueba mostrar lista */

const displayTableView = () => {
  board_data.classList.remove('listview');
  board_data.classList.add('tableview');
}

const displayCardListView = () => {
  board_data.classList.remove('tableview');
  board_data.classList.add('listview');
}

/* if( board_data.classList.contains('tableview') ) {
  displayCardListView();
}
else if( board_data.classList.contains('listview') ) {
  displayTableView();
} */



/* Dia4.3-4 Prueba mostrar menu */

const showDropmdownMenu = () => {
  menuDropdown.classList.remove('collapsed');
}
const hideDropmdownMenu = () => {
  menuDropdown.classList.add('collapsed');
}

//showDropmdownMenu();

/* Dia4.5 Prueba mostrar formulario nuevo bookmark */

const showAddForm = () => {
  boxAdd.classList.remove('hidden');
}

//showAddForm();
