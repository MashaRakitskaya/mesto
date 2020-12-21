import { escape } from '../utils/constants.js';

export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
    }

    close() {
        this._popupSelector.classList.classList.remove('popup_opened');
    }

    _handleEscClose(event) {
        if (event.keyCode == escape) {
            // const activePopup = document.querySelector('.popup_opened'); 
            this.close();
        }
    }

    _handleByOverlayClose(event) {
        if (event.target.classList.contains('popup')) {
            // const activePopup = document.querySelector('.popup_opened');
            this.close();
        }
    }


    setEventListeners() {
        const  popupCloseButton = document.querySelectorAll('.popup__close');
        popupCloseButton.addEventListener('click', function() {
            this.close();
        }); 
    }
}


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


// //нажать на крестик и закрыть попап редактирования профиля
// popupCloseButton.addEventListener('click', function() {
//     closePopup(popupEditProfile);
// }); 

// //нажать на крестик и закрыть попап создания карточки
// popupPhotoCloseButton.addEventListener('click', function() {
//     closePopup(popupAddPhoto);
// });

// //закрыть попап большой фотографии кликом на крестик
// closeBigFoto.addEventListener('click', function() {
//     closePopup(popupBigPhoto);
// });