import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

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

const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPhoto = document.querySelector('.popup_type_add-photo');
const popupCloseButton = popup.querySelector('.popup__close');
const popupPhotoCloseButton = document.querySelector('.popup__close_type_close-photo');
const editButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const popupBigPhoto = document.querySelector('.popup_type_big-photo');
const profileParagraph = document.querySelector('.profile__paragraph');
const editForm = popup.querySelector('.popup__form');
const addPhotoForm = document.querySelector('.popup__form_type_add-photo');
const nameField = popup.querySelector('.popup__input_type_name');
const titleField = popup.querySelector('.popup__input_type_title');
const addButton = document.querySelector('.profile__add-button');
const place = document.querySelector('.popup__input_type_place');
const photoLink = document.querySelector('.popup__input_type_photo');
const popupPhoto = document.querySelector('.popup__photo');
const caption = document.querySelector('.popup__caption ');
const closeBigFoto = document.querySelector('.popup__close_type_close-big-foto');
const escape = 27;

const formPropile = document.querySelector('.popup__form');
const formPhoto = document.querySelector('.popup__form_type_add-photo');

const buttonTypeEdit = document.querySelector('.popup__save_type_edit');
// const buttonSave = document.querySelector('.popup__save');
const buttonSaveTypePhoto = document.querySelector('.popup__save_type_photo');


const elements = document.querySelector('.elements');

const photo = document.querySelector('.element__image');
const title = document.querySelector('.element__title');
const like = document.querySelector('.element__like');
const basket = document.querySelector('.element__basket');



initialCards.forEach((item) => {
    const card = new Card(item, '#card-template');
	const cardElement = card.generateCard();

	elements.append(cardElement);
});






// const elements = document.querySelector('.elements');
// const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');


// //создать карту
// function createCard(item) {
//     const card = cardTemplate.cloneNode(true);
//     const photo = card.querySelector('.element__image');
//     const title = card.querySelector('.element__title');
//     const like = card.querySelector('.element__like');
//     const basket = card.querySelector('.element__basket');


//     photo.src = item.link;
//     title.textContent = item.name;
//     photo.alt = item.name;

//     //при клике на лайк делать его черным и прозрачным при повторном клике
//     like.addEventListener('click', event => {
//         event.target.classList.toggle('element__like_pressed');
//     });

//     //удалять картоку при клике на карзину
//     basket.addEventListener('click', event => {
//         event.target.closest('.element').remove();
//     });

//     //открыть фото на весь экран при клике на фото
//     photo.addEventListener('click', event => {
//         popupPhoto.src = event.target.src;
//         caption.textContent = event.target.alt;
//         showPopup(popupBigPhoto);
//     });

//     return card;

// };


// //добавить карту
// function addCard(item, elements, isPrepend) {
//     if (isPrepend) {
//         elements.prepend(createCard(item));  
//     } else {
//         elements.append(createCard(item));
//     }
// };

// //создать и добавить данные из массива в карты
// initialCards.forEach(item => addCard(item, elements, false));


// //по сабмиту создать новую каточку
// addPhotoForm.addEventListener('submit', event => {
//     event.preventDefault();

//     //добавить карточку в elements
//     addCard({
//         name: place.value,
//         link: photoLink.value
//     }, elements, true);
        
//     place.value = '';
//     photoLink.value = '';

//     //закрыть попап
//     closePopup(popupAddPhoto);
        
// });




//добавить карту
function addCard(item, elements, isPrepend) {
    const card = new Card(item, '#card-template');
	const cardElement = card.generateCard();
    if (isPrepend) {
        elements.prepend(cardElement);
    } else {
        elements.append(cardElement);
    }
};

//создать и добавить данные из массива в карты
// initialCards.forEach(item => addCard(item,  elements, false));


//по сабмиту создать новую каточку
addPhotoForm.addEventListener('submit', event => {
    event.preventDefault();
    
    addCard({
        name: place.value,
        link: photoLink.value
    }, elements, true);
        
    place.value = '';
    photoLink.value = '';

    //закрыть попап
    closePopup(popupAddPhoto);
        
});





//закрыть попап большой фотографии кликом на крестик
closeBigFoto.addEventListener('click', function() {
    closePopup(popupBigPhoto);
});






//значение из инпутов попапа разно значениям на странице
function profileValue() {
    nameField.value = profileTitle.textContent;
    titleField.value = profileParagraph.textContent; 
};

//открыть попап
function showPopup(showPopup) {
    showPopup.classList.add('popup_opened');
    document.addEventListener('keyup', closePopupByESC);
    const activePopup = document.querySelector('.popup_opened');
    activePopup.addEventListener('click', closePopupByOverlay);
};

//закрыть попап
function closePopup(closePopup) {
    const activePopup = document.querySelector('.popup_opened');
    document.removeEventListener('keyup', closePopupByESC);
    activePopup.removeEventListener('click', closePopupByOverlay);
    closePopup.classList.remove('popup_opened');
    resetForm(formPropile);
    resetForm(formPhoto);
};

//закрытие попапов при нажатии ESC
const closePopupByESC = (event) => {
    if (event.keyCode == escape) {
        const activePopup = document.querySelector('.popup_opened'); 
        closePopup(activePopup);
    }
};


//закрытие попапов кликом на overlay
const closePopupByOverlay = function (event) {
    if (event.target.classList.contains('popup')) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
};

//ресэт формы
const resetForm = (form) => {
    form.reset();
    form.querySelectorAll('.popup__input-error').forEach((span) => {
        span.textContent = '';
    });
    form.querySelectorAll('.popup__input').forEach((input) => {
        input.classList.remove('popup__input_type_error');
    });
};

//открыть попап при клике на edit-button  и сделать кнопку активной
editButton.addEventListener('click', function() {
    validateEditForm.removeDisableButton(buttonTypeEdit);
    showPopup(popupEditProfile);
    profileValue();
});


//открыть попап создания карточки при клике на кнопку add-button и сделать кнопку неактивной
addButton.addEventListener('click', function() {
    // validateAddForm.disableButton(buttonSaveTypePhoto);
    showPopup(popupAddPhoto);
});


//нажать на крестик и закрыть попап редактирования профиля
popupCloseButton.addEventListener('click', function() {
    closePopup(popupEditProfile);
}); 


//нажать на крестик и закрыть попап создания карточки
popupPhotoCloseButton.addEventListener('click', function() {
    closePopup(popupAddPhoto);
});



//при сабмите формы редактирования профиля переносить данные из инпутов на страницу
editForm.addEventListener('submit', event => {
    event.preventDefault();
    profileTitle.textContent = nameField.value;
    profileParagraph.textContent = titleField.value;
    closePopup(popupEditProfile);
});



const validationConfig = {
    // formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error',
    buttonInvalidClass: 'popup__save_disabled'
};



const validateEditForm = new FormValidator(validationConfig, '.popup__form_type_edit-profile');
const validateAddForm = new FormValidator(validationConfig, '.popup__form_type_add-photo');
  
validateEditForm.enableValidation();
 
validateAddForm.enableValidation();