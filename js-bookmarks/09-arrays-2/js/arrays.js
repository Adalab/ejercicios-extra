
// Día 9
const saveNewBookmarkButton = document.querySelector('.js_button_save');
const cancelNewBookmarkButton = document.querySelector('.js_button_cancel');
const newURLInput = document.querySelector('.js_new_url');
const newDescriptionInput = document.querySelector('.js_new_description');
const newTagsInput = document.querySelector('.js_new_tags');
const newBookmarkErrorsBox = document.querySelector('.js_form_errors');


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
    desc: newDescription,
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

