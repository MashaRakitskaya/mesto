import { popupPhoto, caption, showPopup, popupBigPhoto } from './index.js';

class Card {

    constructor(data, cardSelector) {
        this._photo = data.link;
        this._title = data.name;
        this._cardSelector = cardSelector;
    }

    //получить шаблон
    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
    
        return cardElement;
    }

    //создать карточку
    generateCard() {
        this._element = this._getTemplate();

        this._setEventListeners();

        this._element.querySelector('.element__title').textContent = this._title;
        this._element.querySelector('.element__image').src = this._photo;
        this._element.querySelector('.element__image').alt = this._title;



        return this._element;
    };

    //установить слушателей событий
    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._element.querySelector('.element__basket').addEventListener('click', () => {
            this._handleBasketClick();
        });

       this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleOpenPopupBigPhoto();
        });

    };

    //обработчик клика по лайку
    _handleLikeClick() {
        this._element.querySelector('.element__like').classList.toggle('element__like_pressed');
    };

    //обработчик клика по карзине
    _handleBasketClick() {
        this._element.querySelector('.element__basket').closest('.element').remove();
    };

    //обработчик клика по фото
    _handleOpenPopupBigPhoto() {
        popupPhoto.src = this._photo;
        caption.textContent = this._title;
        showPopup(popupBigPhoto);
    };

};


export {Card};