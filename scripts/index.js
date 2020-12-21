import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { 
    initialCards,
    elements,
    editButton,
    addButton,
    popupEditProfile,
    popupAddPhoto,
    popupCloseButton,
    popupPhotoCloseButton,
} from '../utils/constants.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';

const popup = document.querySelector('.popup');
// const popupEditProfile = document.querySelector('.popup_type_edit-profile');
// const popupAddPhoto = document.querySelector('.popup_type_add-photo');
// const popupCloseButton = popup.querySelector('.popup__close');
// const popupPhotoCloseButton = document.querySelector('.popup__close_type_close-photo');
// const editButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
// const popupBigPhoto = document.querySelector('.popup_type_big-photo');
const profileParagraph = document.querySelector('.profile__paragraph');
const editForm = popup.querySelector('.popup__form');
const addPhotoForm = document.querySelector('.popup__form_type_add-photo');
const nameField = popup.querySelector('.popup__input_type_name');
const titleField = popup.querySelector('.popup__input_type_title');
// const addButton = document.querySelector('.profile__add-button');
const place = document.querySelector('.popup__input_type_place');
const photoLink = document.querySelector('.popup__input_type_photo');
export const popupPhoto = document.querySelector('.popup__photo');
export const caption = document.querySelector('.popup__caption ');
// const closeBigFoto = document.querySelector('.popup__close_type_close-big-foto');
// const escape = 27;
const buttonTypeEdit = document.querySelector('.popup__save_type_edit');
const buttonSaveTypePhoto = document.querySelector('.popup__save_type_photo');


const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, '#card-template');
        const cardElement = card.generateCard();
        
        cardsList.setItem(cardElement);
    },
},
elements
);

cardsList.renderItems();


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
    close();
});

// //закрыть попап большой фотографии кликом на крестик
// closeBigFoto.addEventListener('click', function() {
//     closePopup(popupBigPhoto);
// });

//значение из инпутов попапа разно значениям на странице
function profileValue() {
    nameField.value = profileTitle.textContent;
    titleField.value = profileParagraph.textContent; 
};

// //открыть попап
// export function showPopup(showPopup) {
//     showPopup.classList.add('popup_opened');
//     document.addEventListener('keyup', closePopupByESC);
//     const activePopup = document.querySelector('.popup_opened');
//     activePopup.addEventListener('click', closePopupByOverlay);
// };

// //закрыть попап
// function closePopup(closePopup) {
//     const activePopup = document.querySelector('.popup_opened');
//     document.removeEventListener('keyup', closePopupByESC);
//     activePopup.removeEventListener('click', closePopupByOverlay);
//     closePopup.classList.remove('popup_opened');
//     const form = activePopup.querySelector('.popup__form');
//     if (form) {
//         resetForm(form);
//     };
// };

// //закрытие попапов при нажатии ESC
// const closePopupByESC = (event) => {
//     if (event.keyCode == escape) {
//         const activePopup = document.querySelector('.popup_opened'); 
//         closePopup(activePopup);
//     }
// };

// //закрытие попапов кликом на overlay
// const closePopupByOverlay = function (event) {
//     if (event.target.classList.contains('popup')) {
//         const activePopup = document.querySelector('.popup_opened');
//         closePopup(activePopup);
//     }
// };

//ресэт формы
function resetForm(form) {
    form.reset();
    form.querySelectorAll('.popup__input-error').forEach((span) => {
        span.textContent = '';
    });
    form.querySelectorAll('.popup__input').forEach((input) => {
        input.classList.remove('popup__input_type_error');
    });
};




// //открыть попап при клике на edit-button  и сделать кнопку активной
// editButton.addEventListener('click', function() {
//     validateEditForm.removeDisableButton(buttonTypeEdit);
//     showPopup(popupEditProfile);
//     profileValue();
// });

// //открыть попап создания карточки при клике на кнопку add-button и сделать кнопку неактивной
// addButton.addEventListener('click', function() {
//     validateAddForm.disableButton(buttonSaveTypePhoto);
//     showPopup(popupAddPhoto);
// });

const EditProfile = new Popup(popupEditProfile);
editButton.addEventListener('click', () => {
    EditProfile.open();
});
EditProfile.setEventListeners(popupCloseButton);


const AddPhoto = new Popup(popupAddPhoto);
addButton.addEventListener ('click', () => {
    AddPhoto.open();
});
AddPhoto.setEventListeners(popupPhotoCloseButton);





// //нажать на крестик и закрыть попап редактирования профиля
// popupCloseButton.addEventListener('click', function() {
//     closePopup(popupEditProfile);
// }); 

// //нажать на крестик и закрыть попап создания карточки
// popupPhotoCloseButton.addEventListener('click', function() {
//     closePopup(popupAddPhoto);
// });




//при сабмите формы редактирования профиля переносить данные из инпутов на страницу
editForm.addEventListener('submit', event => {
    event.preventDefault();
    profileTitle.textContent = nameField.value;
    profileParagraph.textContent = titleField.value;
    // closePopup(popupEditProfile);
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