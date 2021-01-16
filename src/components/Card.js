class Card {

    constructor( { data, handleCardClick, handleBasketClick }, cardSelector) {
        this._photo = data.link;
        this._title = data.name;
        this._handleCardClick = handleCardClick;
        this._id = data._id;
        this._cardSelector = cardSelector;
        this._handleBasketClick = handleBasketClick;
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

        const image = this._element.querySelector('.element__image');

        this._element.querySelector('.element__title').textContent = this._title;
        image.src = this._photo;
        image.alt = this._title;

        return this._element;
    };

    //установить слушателей событий
    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._element.querySelector('.element__basket').addEventListener('click', () => {
            this._handleBasketClick(this);
            // this._handleBasketClick();
        });
        
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick();
        });

    };

    //обработчик клика по лайку
    _handleLikeClick() {
        this._element.querySelector('.element__like').classList.toggle('element__like_pressed');
    };

    // //обработчик клика по карзине
    // _handleBasketClick() {
    //     this._element.querySelector('.element__basket').closest('.element').remove();
    // };

    //обработчик клика по карзине  _handleBasketClick() 
    deleteCard() {
        this._element.remove();
        this._element = null;
    };

    getId() {
        return this._id;
    }
};
export {Card};