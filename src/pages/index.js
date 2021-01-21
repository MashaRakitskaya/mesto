import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { 
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
    popupRemoveCard,
    renderLoading,
    avatarContainer
} from '../utils/constants.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Api } from '../components/Api.js';
import { PopupDeleteCard } from '../components/PopupDeleteCard.js';

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
                .catch(err => console.log(`Ошибка при удалении карточки ${err}`));
            });
        },
        handleLikeClick: (cardId, isLiked) => {
            if(isLiked === false) {
                api.addLike(cardId)
                .then(res => {
                    card.likeStatus(res);
                })
                .catch(err => console.log(`Ошибка при добавлении лайка ${err}`));
            } else {
                api.deleteLike(cardId)
                .then(res => {
                    card.likeStatus(res);
                })
                .catch(err => console.log(`Ошибка при удалении лайка ${err}`));
            }
        }
    },
    '#card-template',
    userInfo.getUserInfo().id
    );
    return card.generateCard();
};

 //добавление списка карт на страницу
const cardsList = new Section({
    renderer: (data) => {
        cardsList.addItem(createCard(data), false);
    }
}, elements
);

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
avatarContainer.addEventListener('click', () => {
    popupUpdateAvatarForm.open();
    validateEditForm.resetForm(formTypeUpdateAvatar);
    validateEditForm.disableButton(buttonTypeUpdateAvatar);
});

Promise.all([api.getUserInformation(), api.getInitialCards()])
.then((result) => {
    userInfo.setUserInfo({
        name: result[0].name,
        occupation: result[0].about,
        avatar: result[0].avatar,
        _id: result[0]._id
    });  
    cardsList.renderItems(result[1]);
})
.catch(err => console.log(`Ошибка получения информации${err}`))

const userInfo = new UserInfo({
    nameSelector: profileTitle,
    occupationSelector: profileParagraph,
    avatarSelector: profileAvatar
});

//попап добавления карточки на станицу
const popupAddPhotoForm = new PopupWithForm ({
    popupElement: popupAddPhoto,
    handleSubmitForm: (data) => {
        renderLoading(true, buttonTypeСreate);

        //добавляем на сервер карточку
        api.addCard({name:data.place, link:data.photo})
        .then(result => {
            cardsList.addItem(createCard(result), true);
            // cardsList.addItem(createCard({...data, _id: result.id}), false);
        })
        .then(() => {
            popupAddPhotoForm.close();
        })
        .catch(err => console.log(`Ошибка добавления карточки ${err}`))
        .finally(() => {
            renderLoading(false, buttonTypeСreate);
        })
    }
});
popupAddPhotoForm.setEventListeners();

//попоп редактирования информации профиля
const popupEditForm = new PopupWithForm ({
    popupElement: popupEditProfile,
    handleSubmitForm: (data) => {
        // console.log(data);
        renderLoading(true, buttonTypeEdit);

        //добавляем на сервер информацию
        api.addUserInfo({name: data['profileName'], about: data['occupation']})
        .then(result => {
            // console.log(result.name, result.about);
            userInfo.setUserInfo({
                name: result.name,
                occupation: result.about,
                avatar: result.avatar,
                _id: result._id
            })
        })
        .then(() => {
            popupEditForm.close();
        })
        .catch(err => console.log(`Ошибка редактирования информации о пользователе ${err}`))
        .finally(() => {
            renderLoading(false, buttonTypeEdit);
        })
    }
});
popupEditForm.setEventListeners();

//попап редактирования аватарки профиля
const popupUpdateAvatarForm  = new PopupWithForm ({
    popupElement: popupUpdateAvatar,
    handleSubmitForm: (data) => {
        renderLoading(true, buttonTypeUpdateAvatar);
        api.addUserAvatar({avatar: data['avatar']})
        .then(result => {
            // console.log(result.avatar);
            profileAvatar.src = result.avatar
        })
        .then(() => {
            popupUpdateAvatarForm.close();
        })
        .catch(err => console.log(`Ошибка редактирования аватарки${err}`))
        .finally(() => {
            renderLoading(false, buttonTypeUpdateAvatar);
        })
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