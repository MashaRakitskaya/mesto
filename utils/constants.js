export const initialCards = [
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

export const elements = document.querySelector('.elements');
// export const elements = '.elements';
export const escape = 27;
export const popupCloseButton = document.querySelector('.popup__close');
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const popupAddPhoto = document.querySelector('.popup_type_add-photo');
export const popupBigPhoto = document.querySelector('.popup_type_big-photo');
export const popupPhotoCloseButton = document.querySelector('.popup__close_type_close-photo');
export const closeBigFoto = document.querySelector('.popup__close_type_close-big-foto');
export const popupPhoto = document.querySelector('.popup__photo');
export const caption = document.querySelector('.popup__caption ');
export const cardImage = document.querySelector('.element__image');