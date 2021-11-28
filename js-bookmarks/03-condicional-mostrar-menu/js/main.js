'use strict';

const list_data = document.querySelector('.js_datalist');
const menuDropdown = document.querySelector('.js_menu_dropdown');
const boxAdd = document.querySelector('.js_add_box');
const board_data = document.querySelector('.js_databoard');  /* DIA3.1 */
const input_search_desc = document.querySelector('.js_in_search_desc');  /* DIA3.3 */


/* DIA3.3 Se muestra el menú hamburguesa */

menuDropdown.classList.remove('collapsed');

/* DIA3.3 Simulamos que escribe la usuaria */

input_search_desc.value = 'materiales';

/* Variables primer bookmark */

/* Uso _ en los nombres, pero por una razón académica */
/* En JS se suele usar la notación camelCase para los identificadoree */

const bmk_1_url    = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion';
const bmk_1_desc   = 'JS en los materiales de Adalab';
const bmk_1_lesson = 'checked';
const bmk_1_tags_1 = '';  /* DIA3.2 */
const bmk_1_tags_2 = '';  /* DIA3.2 */

/* Variable de texto vacío que vamos a ir cambiando y añadiendo el html */

let html = '';

/* DIA3.3 Se recoje el valor del input en una variable */

const descrSearchText = input_search_desc.value;

/* Añadir primer bookmark */

if( bmk_1_desc.includes(descrSearchText) ) {  /* DIA3.3 */
  html += 
    `<li class="data__listitem">
      <article class="data__item">
        <p class="item__url">
          <a href="${bmk_1_url}" target="_blank" rel="noopener noreferrer">
          ${bmk_1_url.replace('https://','')}
          </a>
        </p>
        <p class="item__seen">
          <input type="checkbox" ${bmk_1_lesson} name="item_imp_2" id="item_imp_2">
        </p>
        <p class="item__desc">
          ${bmk_1_desc}
        </p>`;
        if( bmk_1_tags_1 === '' && bmk_1_tags_2 === '' ) {  /* DIA3.2 */
          html += `<p class='item__tags'>No tiene</p>`;
        }
        else {
          html += `
        <ul class="item__tags">
          <li class="item__tag">${bmk_1_tags_1.toUpperCase()}</li>
          <li class="item__tag">${bmk_1_tags_2.toLowerCase()}</li>
        </ul>`;
        }
        html += `
      </article>
    </li>`;
}

/* Vamos con el segundo bookmark: */

const bmk_2_url    = 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/';
const bmk_2_desc   = 'Ideas de proyectos JS';
const bmk_2_lesson = 'checked';
const bmk_2_tags_1 = 'javascript';
const bmk_2_tags_2 = 'portfolio';

if( bmk_2_desc.includes(descrSearchText) ) {  /* DIA3.3 */
  html += 
    `<li class="data__listitem">
      <article class="data__item">
        <p class="item__url">
          <a href="${bmk_2_url}" target="_blank" rel="noopener noreferrer">
          ${bmk_2_url.replace('https://','')}
          </a>
        </p>
        <p class="item__seen">
          <input type="checkbox" ${bmk_2_lesson} name="item_imp_2" id="item_imp_2">
        </p>
        <p class="item__desc">
          ${bmk_2_desc}
        </p>
        <ul class="item__tags">
          <li class="item__tag">${bmk_2_tags_1.toLowerCase()}</li>
          <li class="item__tag">${bmk_2_tags_2.toLowerCase()}</li>
        </ul>
      </article>
    </li>`;
}

/* Tercer bookmark (y tantos como quieras): */

const bmk_3_url    = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web';
const bmk_3_desc   = 'HTML en los materiales de Adalab';
const bmk_3_lesson = '';
const bmk_3_tags_1 = 'html';
const bmk_3_tags_2 = 'css';

if( bmk_3_desc.includes(descrSearchText) ) {  /* DIA3.3 */
  html += 
    `<li class="data__listitem">
      <article class="data__item">
        <p class="item__url">
          <a href="${bmk_3_url}" target="_blank" rel="noopener noreferrer">
          ${bmk_3_url.replace('https://','')}
          </a>
        </p>
        <p class="item__seen">
          <input type="checkbox" ${bmk_3_lesson} name="item_imp_2" id="item_imp_2">
        </p>
        <p class="item__desc">
          ${bmk_3_desc}
        </p>
        <ul class="item__tags">
          <li class="item__tag">${bmk_3_tags_1.toLowerCase()}</li>
          <li class="item__tag">${bmk_3_tags_2.toLowerCase()}</li>
        </ul>
      </article>
    </li>`;
}

/* Se vacia el contenido de la <ul> y se sustituye por html */

list_data.innerHTML = html;


/* DIA3.1: Prueba mostrar lista */

if( board_data.classList.contains('tableview') ) {
  board_data.classList.remove('tableview');
  board_data.classList.add('listview');
}
else if( board_data.classList.contains('listview') ) {
  board_data.classList.remove('listview');
  board_data.classList.add('tableview');
}



/* Prueba mostrar menu */

//menuDropdown.classList.remove('collapsed');

/* Prueba mostrar formulario nuevo bookmark */

//boxAdd.classList.remove('hidden');