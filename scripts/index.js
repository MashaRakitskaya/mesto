const popup = document.querySelector('.popup');
// const popupEditProfile = document.querySelector('.popup_type_edit-profile');
// const popupAddPhoto = document.querySelector('.popup_type_add-photo');
// const popupCloseButton = popup.querySelector('.popup__close');
// const popupPhotoCloseButton = document.querySelector('.popup__close_type_close-photo');
// const editButton = document.querySelector('.profile__edit-button');
// export const profileTitle = document.querySelector('.profile__title');
// const popupBigPhoto = document.querySelector('.popup_type_big-photo');
// export const profileParagraph = document.querySelector('.profile__paragraph');

// const editForm = document.querySelector('.popup__form');

const addPhotoForm = document.querySelector('.popup__form_type_add-photo');
// export const nameField = document.querySelector('.popup__input_type_name');
// const titleField = popup.querySelector('.popup__input_type_title');
// export const occupationField = document.querySelector('.popup__input_type_title');
// const addButton = document.querySelector('.profile__add-button');
const place = document.querySelector('.popup__input_type_place');
const photoLink = document.querySelector('.popup__input_type_photo');
// export const popupPhoto = document.querySelector('.popup__photo');
// export const caption = document.querySelector('.popup__caption ');
// const closeBigFoto = document.querySelector('.popup__close_type_close-big-foto');
// const escape = 27;
// const buttonTypeEdit = document.querySelector('.popup__save_type_edit');
const buttonSaveTypePhoto = document.querySelector('.popup__save_type_photo');

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
    popupBigPhoto,
    closeBigFoto,
    profileTitle,
    profileParagraph,
    nameField,
    occupationField,
    formTypeEdit,
    formTypeAddPhoto,
    buttonTypeEdit,
    elementImage,
    elementTitle
} from '../utils/constants.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
import { UserInfo } from './UserInfo.js';
import { PopupWithForm } from './PopupWithForm.js';




const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card({
            data: item,
            handleCardClick: () => {
                const BigPhoto = new PopupWithImage(item, popupBigPhoto);
                BigPhoto.open();
                // BigPhoto.setEventListeners();
            }
            },
            '#card-template');

        const cardElement = card.generateCard();
        
        cardsList.addItem(cardElement, false);
    },
},
elements
);

cardsList.renderItems();




// //по сабмиту создать новую каточку
// addPhotoForm.addEventListener('submit', event => {
//     event.preventDefault();
    
//     addCard({
//         name: place.value,
//         link: photoLink.value
//     }, elements, true);
        
//     place.value = '';
//     photoLink.value = '';

//     //закрыть попап
//     close();
// });





// //значение из инпутов попапа разно значениям на странице
// function profileValue() {
//     nameField.value = profileTitle.textContent;
//     titleField.value = profileParagraph.textContent; 
// };



// //перенос данных со станицы в инпуты попапа
// const userInfo = new UserInfo({
//     nameSelector: profileTitle,
//     occupationSelector: profileParagraph
// });
// const currentUserInfo = userInfo.getUserInfo();
// nameField.value = currentUserInfo.name;
// occupationField.value = currentUserInfo.occupation;



// const popupEditForm = new PopupWithForm ({
//     popupSelector: popupEditProfile,
//     handleSubmitForm: (item) => {
//         // userInfo.getUserInfo();
//         userInfo.setUserInfo({ 
//             name: item,
//             occupation: item
//         });
//         popupEditForm.setEventListeners();
       
//     }
// });
// popupEditForm.setEventListeners();


// //ресэт формы
// function resetForm(form) {
//     form.reset();
//     form.querySelectorAll('.popup__input-error').forEach((span) => {
//         span.textContent = '';
//     });
//     form.querySelectorAll('.popup__input').forEach((input) => {
//         input.classList.remove('popup__input_type_error');
//     });
// };


//открытие попапа редактирования профиля
const EditProfile = new Popup(popupEditProfile);
editButton.addEventListener('click', () => {
    EditProfile.open();
    validateEditForm.resetForm(formTypeEdit);
    validateEditForm.removeDisableButton(buttonTypeEdit);
    const currentUserInfo = userInfo.getUserInfo();
    nameField.value = currentUserInfo.name;
    occupationField.value = currentUserInfo.occupation;
    
});
//закрытие попапа редактиования профиля
EditProfile.setEventListeners();





//откртие попапа добавления карточки
const AddPhoto = new Popup(popupAddPhoto);
addButton.addEventListener ('click', () => {
    //перенос данных со станицы в инпуты попапа
    AddPhoto.open();
});
//закрытие попапа добавления карточки
AddPhoto.setEventListeners();

//перенос данных со станицы в инпуты попапа
const userInfo = new UserInfo({
    nameSelector: profileTitle,
    occupationSelector: profileParagraph
});
// const currentUserInfo = userInfo.getUserInfo();
// nameField.value = currentUserInfo.name;
// occupationField.value = currentUserInfo.occupation;




const BigPhoto = new Popup(popupBigPhoto);
//закрытие попапа большого фото
BigPhoto.setEventListeners();





const popupEditForm = new PopupWithForm ({
    popupSelector: popupEditProfile,
    handleSubmitForm: (data) => {
        console.log(data);
        userInfo.setUserInfo({
            name: data["profileName"],
            occupation: data["occupation"]
        });

    }
});
popupEditForm.setEventListeners();








const popupAddPhotoForm = new PopupWithForm ({
    popupSelector: popupAddPhoto,
    handleSubmitForm: (data) => {
        // console.log(data);
        const card = new Card({
            data: {
                name: data["place"],
                link: data["photo"]
            },
            handleCardClick: () => {
                console.log(data);
                const BigPhoto = new PopupWithImage({
                    name: data["place"],
                    link: data["photo"]
                }, popupBigPhoto);
                BigPhoto.open();
            }
        },'#card-template');

        const cardElement = card.generateCard();
        cardsList.addItem(cardElement, true);   

        
    }
});
popupAddPhotoForm.setEventListeners();







// //при сабмите формы редактирования профиля переносить данные из инпутов на страницу
// editForm.addEventListener('submit', event => {
//     event.preventDefault();
//     profileTitle.textContent = nameField.value;
//     profileParagraph.textContent = occupationField.value;
//     // closePopup(popupEditProfile);
// });

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

// //закрыть попап большой фотографии кликом на крестик
// closeBigFoto.addEventListener('click', function() {
//     closePopup(popupBigPhoto);
// });



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







// //нажать на крестик и закрыть попап редактирования профиля
// popupCloseButton.addEventListener('click', function() {
//     closePopup(popupEditProfile);
// }); 

// //нажать на крестик и закрыть попап создания карточки
// popupPhotoCloseButton.addEventListener('click', function() {
//     closePopup(popupAddPhoto);
// });




