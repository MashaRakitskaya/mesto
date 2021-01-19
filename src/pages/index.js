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
    avatarField,
    id,
    popupRemoveCard,
    basket
} from '../utils/constants.js';
import { Section } from '../components/Section.js';
//import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Api } from '../components/Api.js';
import { PopupDeleteCard } from '../components/PopupDeleteCard.js';
// const cardsList = new Section({
//     renderer: (item) => {
//         const card = new Card({
//             data: item,
//             handleCardClick: () => {
//                 bigPhoto.open(item);
//             }
//         },
//         '#card-template');

//         const cardElement = card.generateCard();
        
//         cardsList.addItem(cardElement, false);
//     },
// },
// elements
// );

// const cardsList = new Section({
//     renderer: (item) => {
//         const card = new Card({
//             data: item,
//             handleCardClick: () => {
//                 bigPhoto.open(item);
//             }
//         },
//         '#card-template');

//         const cardElement = card.generateCard({...data, _id: result.id});
        
//         api.addCard(data)
//         .then(result => {
//             cardsList.addItem(cardElement, false);
//         })

//         // cardsList.addItem(cardElement, false);
//     },
// },
// elements
// );

// cardsList.renderItems();

// basket.addEventListener('click', () => {
//     popupDeleteCard.open();
//     validateEditForm.removeDisableButton(popupDeleteCard);
// })

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-19',
    token: '369f7f82-3628-418a-9ccf-d1d1496569f6'
});

//создание карт
const createCard = (data) => {
    const card = new Card({
        data,
        handleCardClick: () => {
            bigPhoto.open(data);
        },
        handleBasketClick: (card) => {
            popupDeleteCard.open();
            popupDeleteCard.setSubmitAction(() => {
                api.removeCard(card.getId())
                .then(() => card.deleteCard())
                .catch(err => console.log('Ошибка при получении сообщений', err));
            });
        },
        handleLikeClick: (cardId, isLiked , data) => {
            if(isLiked === false) {
                api.addLike(cardId)
                .then(res => {
                    data(res)
                })
                .catch(err => console.log('Ошибка при получении сообщений', err));
            } else {
                api.deleteLike(cardId)
                .then(res => {
                    data(res)
                })
                .catch(err => console.log('Ошибка при получении сообщений', err));
            }
        }
    },
    '#card-template',
    // console.log(userInfo.getUserInfo().id)
    userInfo.getUserInfo().id
    );
    return card.generateCard();
};

 //список карт
const cardsList = new Section({
    renderer: (data, insert) => {
        // console.log(data);
        cardsList.addItem(createCard(data), insert);
    }
}, elements
);

//данные для карт
api.getInitialCards()
.then(result => {
    console.log(result);
    cardsList.renderItems(result, false);
})
.catch(err => console.log('Ошибка при получении сообщений', err));


const bigPhoto = new PopupWithImage(popupBigPhoto);
bigPhoto.setEventListeners();

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

//открыть попап обновления аватара
profileAvatar.addEventListener('click', () => {
    popupUpdateAvatarForm.open();
    validateEditForm.resetForm(formTypeUpdateAvatar);
    validateEditForm.disableButton(buttonTypeUpdateAvatar);
    // const currentUserInfo = userInfo.getUserInfo();
    // avatarField.value = currentUserInfo.name;
    // occupationField.value = currentUserInfo.occupation;
});

api.getUserInformation()
.then(result => {
    console.log(result);
    userInfo.setUserInfo({
        name: result.name,
        occupation: result.about,
        avatar: result.avatar,
        _id: result._id
    });
    // userInfo.setUserInfo(result.name, result.about, result.avatar, result._id);

})
.catch(err => console.log('Ошибка при получении сообщений', err));

const userInfo = new UserInfo({
    nameSelector: profileTitle,
    occupationSelector: profileParagraph,
    avatarSelector: profileAvatar
});

const popupAddPhotoForm = new PopupWithForm ({
    popupSelector: popupAddPhoto,
    handleSubmitForm: (data) => {
        api.addCard({name:data.place, link:data.photo})
        .then(result => {
           const isPrepend = true;
            cardsList.renderItems(result, isPrepend);
            // cardsList.addItem(createCard({...data, _id: result.id}), false);
        })
        .catch(err => console.log('Ошибка при получении сообщений', err));
    }
});
popupAddPhotoForm.setEventListeners();

const popupEditForm = new PopupWithForm ({
    popupSelector: popupEditProfile,
    handleSubmitForm: (data) => {
        console.log(data);
        // userInfo.setUserInfo({
        //     name: data["profileName"],
        //     occupation: data["occupation"],
        //     avatar: data["avatar"],
        //     // _id: data[""]
        // });
        userInfo.setUserInfo({
            name: data.name,
            occupation: data.about,
            avatar: data.avatar,
            _id: data._id

        });
        // userInfo.setUserInfo(data.name, data.about, data.avatar, data._id);
    }
});
popupEditForm.setEventListeners();

const popupUpdateAvatarForm  = new PopupWithForm ({
    popupSelector: popupUpdateAvatar,
    handleSubmitForm: (data) => {
        // console.log(data);
        profileAvatar.src = data["avatar"];
        // avatar: data["avatar"];
    }
});
popupUpdateAvatarForm.setEventListeners();



const popupDeleteCard = new PopupDeleteCard (popupRemoveCard)
popupDeleteCard.setEventListeners();

const validationConfig = {
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


// const popupAddPhotoForm = new PopupWithForm ({
//     popupSelector: popupAddPhoto,
//     handleSubmitForm: (data) => {
//         const card = new Card({
//             data: {
//                 name: data["place"],
//                 link: data["photo"]
//             },
//             handleCardClick: () => {
//                 bigPhoto.open({
//                     name: data["place"],
//                     link: data["photo"]
//                 });
//             }
//         },'#card-template');
//         const cardElement = card.generateCard();
//         cardsList.addItem(cardElement, true);
//     }
// });