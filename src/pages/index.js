import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { 
    initialCards,
    elements,
    editButton,
    addButton,
    popupEditProfile,
    popupAddPhoto,
    popupBigPhoto,
    profileTitle,
    profileParagraph,
    nameField,
    occupationField,
    formTypeEdit,
    formTypeAddPhoto,
    buttonTypeEdit,
    buttonTypeСreate,
    popupUpdateAvatar,
    profileAvatar,
    formTypeUpdateAvatar,
    buttonTypeUpdateAvatar,
    avatarField
} from '../utils/constants.js';
import { Section } from '../components/Section.js';
//import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

const bigPhoto = new PopupWithImage(popupBigPhoto);
bigPhoto.setEventListeners();

const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card({
            data: item,
            handleCardClick: () => {
                bigPhoto.open(item);
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

// //открытие попапа редактирования профиля
editButton.addEventListener('click', () => {
    popupEditForm.open();
    validateEditForm.resetForm(formTypeEdit);
    validateEditForm.removeDisableButton(buttonTypeEdit);
    const currentUserInfo = userInfo.getUserInfo();
    nameField.value = currentUserInfo.name;
    occupationField.value = currentUserInfo.occupation;
    
});

//откртие попапа добавления карточки
addButton.addEventListener ('click', () => {
    popupAddPhotoForm.open();
    validateEditForm.resetForm(formTypeAddPhoto);
    validateEditForm.disableButton(buttonTypeСreate);
});

const userInfo = new UserInfo({
    nameSelector: profileTitle,
    occupationSelector: profileParagraph
});

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
        const card = new Card({
            data: {
                name: data["place"],
                link: data["photo"]
            },
            handleCardClick: () => {
                bigPhoto.open({
                    name: data["place"],
                    link: data["photo"]
                });
            }
        },'#card-template');

        const cardElement = card.generateCard();
        cardsList.addItem(cardElement, true);
    }
});
popupAddPhotoForm.setEventListeners();


//открыть попап обновления аватара
profileAvatar.addEventListener('click', () => {
    popupUpdateAvatarForm.open();
    validateEditForm.resetForm(formTypeUpdateAvatar);
    validateEditForm.disableButton(buttonTypeUpdateAvatar);
    // const currentUserInfo = userInfo.getUserInfo();
    // avatarField.value = currentUserInfo.name;
    // occupationField.value = currentUserInfo.occupation;
});

const popupUpdateAvatarForm  = new PopupWithForm ({
    popupSelector: popupUpdateAvatar,
    handleSubmitForm: (data) => {
        console.log(data);
        profileAvatar.src = data["avatar"];
    }

});
popupUpdateAvatarForm.setEventListeners();


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
const validateUpdateAvatar = new FormValidator(validationConfig, '.popup__form_type_update-avatar');
  
validateEditForm.enableValidation();
validateAddForm.enableValidation();
validateUpdateAvatar.enableValidation();



// fetch('https://mesto.nomoreparties.co/v1/cohort-19/users/me', {
//     headers: {
//         authorization: '369f7f82-3628-418a-9ccf-d1d1496569f6'
//     }
// })
// .then(res => res.json())
// .then((result) => {
//     console.log(result);
// }); 