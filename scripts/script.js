let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let submitForm = document.querySelector('.form');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.form__item_prof_title');
let jobInput = document.querySelector('.form__item_prof_subtitle');

function openPopUp() {
  popup.classList.add('popup_open');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopUp() {
  popup.classList.remove('popup_open');
  nameInput.value = '';
  jobInput.value = '';
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopUp();
}

editButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', closePopUp);
submitForm.addEventListener('submit', formSubmitHandler);




