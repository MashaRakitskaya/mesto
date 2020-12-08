class Card {

    constructor(data, cardSelector) {
        this._photo = data.link;
        this._title = data.name;
        // this._like = data.like;
        // this._basket = data.basket;
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
        // this._element.querySelector('.element__like').style.background = this._like;
        // this._element.querySelector('.element__basket').style.background = this._basket;



        return this._element;
    };

    
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

        // closeBigFoto.addEventListener('click', () => {
        //     this._handleClosePopupBigPhoto();
        // });

    };

    _handleLikeClick() {
        this._element.querySelector('.element__like').classList.toggle('element__like_pressed');
    };

    _handleBasketClick() {
        this._element.querySelector('.element__basket').closest('.element').remove();
    };

    _handleOpenPopupBigPhoto() {
        popupPhoto.src = this._element.querySelector('.element__image').src;
        caption.textContent = this._element.querySelector('.element__image').alt;
        showPopup(popupBigPhoto);
    };

    // _handleClosePopupBigPhoto() {
    //     closePopup(popupBigPhoto);
    // };

};


export {Card};