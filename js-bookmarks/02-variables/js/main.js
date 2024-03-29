'use strict';

const list_data = document.querySelector('.js_datalist');
const menuDropdown = document.querySelector('.js_menu_dropdown');
const boxAdd = document.querySelector('.js_add_box');

/* Variables primer bookmark */

/* Uso _ en los nombres, pero por una razón académica */
/* En JS se suele usar la notación camelCase para los identificadoree */

const bmk_1_url    = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion';
const bmk_1_desc   = 'JS en los materiales de Adalab';
const bmk_1_lesson = 'checked';
const bmk_1_tags_1 = 'javascript';
const bmk_1_tags_2 = 'html';

/* Variable de texto vacío que vamos a ir cambiando y añadiendo el html */

let html = '';

/* Añadir primer bookmark */

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
      </p>
      <ul class="item__tags">
        <li class="item__tag">${bmk_1_tags_1.toUpperCase()}</li><li class="item__tag">${bmk_1_tags_2.toLowerCase()}</li>
      </ul>
    </article>
  </li>`;

/* Vamos con el segundo bookmark: */

const bmk_2_url    = 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/';
const bmk_2_desc   = 'Ideas de proyectos JS';
const bmk_2_lesson = 'checked';
const bmk_2_tags_1 = 'javascript';
const bmk_2_tags_2 = 'portfolio';

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
        <li class="item__tag">${bmk_2_tags_1.toLowerCase()}</li><li class="item__tag">${bmk_2_tags_2.toLowerCase()}</li>
      </ul>
    </article>
  </li>`;

/* Tercer bookmark (y tantos como quieras): */

const bmk_3_url    = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web';
const bmk_3_desc   = 'HTML en los materiales de Adalab';
const bmk_3_lesson = '';
const bmk_3_tags_1 = 'html';
const bmk_3_tags_2 = 'css';

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
        <li class="item__tag">${bmk_3_tags_1.toLowerCase()}</li><li class="item__tag">${bmk_3_tags_2.toLowerCase()}</li>
      </ul>
    </article>
  </li>`;

/* Se vacia el contenido de la <ul> y se sustituye por html */

list_data.innerHTML = html;




/* Prueba mostrar menu */

//menuDropdown.classList.remove('collapsed');

/* Prueba mostrar formulario nuevo bookmark */

//boxAdd.classList.remove('hidden');