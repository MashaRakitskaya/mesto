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
    buttonTypeСreate
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