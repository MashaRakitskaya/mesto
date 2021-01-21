export const elements = document.querySelector('.elements');
export const escape = 27;
export const popupCloseButton = document.querySelector('.popup__close');
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const popupAddPhoto = document.querySelector('.popup_type_add-photo');
export const popupBigPhoto = document.querySelector('.popup_type_big-photo');
export const popupPhotoCloseButton = document.querySelector('.popup__close_type_close-photo');
export const closeBigFoto = document.querySelector('.popup__close_type_close-big-foto');
// export const popupPhoto = document.querySelector('.popup__photo');
// export const caption = document.querySelector('.popup__caption');
export const profileTitle = document.querySelector('.profile__title');
export const profileParagraph = document.querySelector('.profile__paragraph');
export const nameField = document.querySelector('.popup__input_type_name');
export const occupationField = document.querySelector('.popup__input_type_title');
export const formTypeEdit = document.querySelector('.popup__form_type_edit-profile');
export const formTypeAddPhoto = document.querySelector('.popup__form_type_add-photo');
export const buttonTypeEdit = document.querySelector('.popup__save_type_edit');
export const buttonTypeСreate = document.querySelector('.popup__save_type_photo');
export const popupUpdateAvatar = document.querySelector('.popup_type_update-avatar');
export const profileAvatar = document.querySelector('.profile__avatar');
export const formTypeUpdateAvatar = document.querySelector('.popup__form_type_update-avatar');
export const buttonTypeUpdateAvatar = document.querySelector('.popup__save_type_avatar');
export const avatarField = document.querySelector('.popup__input_type_avatar-photo');
export const popupRemoveCard = document.querySelector('.popup_type_deleteСard');
export const basket = document.querySelector('.element__basket');
export const avatarContainer = document.querySelector('.profile__avatar-container');
function renderLoading(isLoading, button) {
    if(isLoading) {
        button.textContent = 'Сохранение...'
    } else {
        button.textContent = button.value
    }
}
export{renderLoading};

