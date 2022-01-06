//я понял коппентарии по скрипту, я перепишу, хочу сначала закрыть вопросы по верстке и стилям

let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let submitForm = document.querySelector('.form');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.form__item_prof_title');
let jobInput = document.querySelector('.form__item_prof_subtitle');

editButton.addEventListener('click', function () {
  popup.classList.add('popup_open');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});


closeButton.addEventListener('click', function () {
  popup.classList.remove('popup_open');
});

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_open');
}

submitForm.addEventListener('submit', formSubmitHandler);




