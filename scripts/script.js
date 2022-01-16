const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

let content = document.querySelector('.content');
let element = content.querySelector('.element');
let photoContainer = document.querySelector('.elements');
let addButton = document.querySelector('.profile__add-button');
let editButton = document.querySelector('.profile__edit-button');

let closeButtonPhoto = document.querySelector('.popup__close-button_photo-card');
let closeButtonAvatar = document.querySelector('.popup__close-button_avatar');
let submitProfileForm = document.querySelector('.form_prof');
let submitPhotoForm = document.querySelector('.form_photo');
let popupAvatar = document.querySelector('.popup__avatar');
let popupPhoto = document.querySelector('.popup__photo-card');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.form__item_prof_title');
let jobInput = document.querySelector('.form__item_prof_subtitle');


/*  задаем фунцию для добавления фотокарточки*/
function addPhoto(photoName, photoLink) {
  const photoTemplate = document.querySelector('#element-template').content;
  const photoCard = photoTemplate.querySelector('.element').cloneNode(true);
  photoCard.querySelector('.element__title').textContent = photoName;
  photoCard.querySelector('.element__image').src = photoLink;
  photoCard.querySelector('.element__image').alt = photoName;
  photoContainer.prepend(photoCard);
}
/*  проверяем что контейнер элементс пустой и заполняем его 6 карточками.
цикл обратный чтобы сделать фунцию добавления карточи универсальной через prepend*/
if (element === null) {
  for (let i = initialCards.length - 1; i > -1; i-=1) {
    const photoName = initialCards[i].name;
    const photoLink = initialCards[i].link;
    addPhoto(photoName, photoLink);
  }
};

function openPopUp(popupName) {
  popupName.classList.add('popup_open');
  if (popupName === popupAvatar) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  }
};

function closePopUp(popupName) {
  popupName.classList.remove('popup_open');
  if (popupName === popupAvatar) {
    nameInput.value = '';
    jobInput.value = '';
    }
};

function profileFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopUp(popupAvatar);
};

 /*обрабатывает фото карточку - забирает имя и ссылку из формы, передает их функции addphoto
 (добавление фотокарточки на страницу) и обнуляет поля имя и ссылка в форме затем вызывает closePopUp*/
function photoFormSubmitHandler(evt) {
  evt.preventDefault();
  let photoName = document.querySelector('.form__item_photo_title');
  let photoLink = document.querySelector('.form__item_photo_link');
  addPhoto(photoName.value, photoLink.value);
  photoName.value = '';
  photoLink.value = '';
  closePopUp(popupPhoto);
  };


editButton.addEventListener('click', openPopUp.bind(null, popupAvatar));
addButton.addEventListener('click', openPopUp.bind(null, popupPhoto))
closeButtonAvatar.addEventListener('click', closePopUp.bind(null, popupAvatar));
closeButtonPhoto.addEventListener('click', closePopUp.bind(null, popupPhoto));
submitProfileForm.addEventListener('submit', profileFormSubmitHandler);
submitPhotoForm.addEventListener('submit', photoFormSubmitHandler);

/* ставим лайки  и удаляем карточки*/
photoContainer.addEventListener('click', function(event) {
  if (event.target.className.includes('element__like-button')) {
    event.target.classList.toggle('element__like-button_active');
  }
  if (event.target.className.includes('element__delete-button')) {
    event.target.closest('.element').remove();
  }
});




