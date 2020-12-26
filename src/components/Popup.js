import { escape } from '../utils/constants.js';

export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
        this._popupSelector.addEventListener('click', this._handleByOverlayClose);
        // console.log('hahah');
    };

    close() {
        this._popupSelector.classList.remove('popup_opened');
        // document.removeEventListener('keyup', this._handleEscClose);
        // this._popupSelector.removeEventListener('click', this._handleByOverlayClose);
    };

    _handleEscClose = (event) => {
        if (event.keyCode == escape) {
            this.close();
        }  
    };

    _handleByOverlayClose = (event) => {
        if (event.target.classList.contains('popup')) {
            this.close();
        }
    };

    _handleByCross = (event) => {
        if (event.target.classList.contains('popup__close')) {
            this.close();
        }
    };

    // setEventListeners(popupCloseButton) {
    //     popupCloseButton.addEventListener('click', () => { this.close(); });
    // }
    setEventListeners() {
        // popupCloseButton.addEventListener('click', () => { this.close(); });
        this._popupSelector.addEventListener('click', this._handleByCross);
        document.removeEventListener('keyup', this._handleEscClose);
        this._popupSelector.removeEventListener('click', this._handleByOverlayClose);
    };
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