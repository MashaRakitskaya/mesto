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
    id
} from '../utils/constants.js';
import { Section } from '../components/Section.js';
//import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Api } from '../components/Api.js';

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
        handleBasketClick: () => {
            api.removeCard(card.getId())
            .then(() => card.deleteCard())
            .catch(err => console.log('Ошибка при получении сообщений', err));
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
    // api.getUserInformation()
    // .then(result => {
    //     console.log(result._id);
    //     userInfo.getUserInfo({
    //         id:result._id
    //     });
    
    // })
    // .catch(err => console.log('Ошибка при получении сообщений', err))
    );
    return card.generateCard();
};

 //список карт
const cardsList = new Section({
    renderer: (data) => {
        // console.log(data);
        cardsList.addItem(createCard(data), false);
    }
}, elements
);

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

api.getInitialCards()
.then(result => {
    console.log(result);
    cardsList.renderItems(result);

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

api.getUserInformation()
.then(result => {
    console.log(result);
    userInfo.setUserInfo({
        name: result.name,
        occupation: result.about,
        avatar: result.avatar,
        _id: result._id
    });

})
.catch(err => console.log('Ошибка при получении сообщений', err));

const userInfo = new UserInfo({
    nameSelector: profileTitle,
    occupationSelector: profileParagraph,
    avatarSelector: profileAvatar
});

const popupEditForm = new PopupWithForm ({
    popupSelector: popupEditProfile,
    handleSubmitForm: (data) => {
        console.log(data);
        userInfo.setUserInfo({
            name: data["profileName"],
            occupation: data["occupation"],
            avatar: data["avatar"],
            // _id: data[""]

        });

    }
});
popupEditForm.setEventListeners();

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
const popupAddPhotoForm = new PopupWithForm ({
    popupSelector: popupAddPhoto,
    handleSubmitForm: (data) => {
        api.addCard({name:data.place, link:data.photo})
        // .then(result => {
        //     console.log(result);
        //     cardsList.renderItems(result);
        // })
        .then(result => {
            cardsList.renderItems(result);
            cardsList.addItem(createCard({...data, _id: result.id}), false);
        })
        .catch(err => console.log('Ошибка при получении сообщений', err));
        // const cardElement = card.generateCard();
        // cardsList.addItem(cardElement, true);
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
        // console.log(data);
        profileAvatar.src = data["avatar"];
        // avatar: data["avatar"];
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


