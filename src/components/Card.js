class Card {

    constructor( { data, handleCardClick, handleBasketClick, handleLikeClick }, cardSelector, userId) {
        this._photo = data.link;
        this._title = data.name;
        this._numberLike = data.likes;
        this._handleCardClick = handleCardClick;
        this._id = data._id;
        this._cardSelector = cardSelector;
        this._handleBasketClick = handleBasketClick;
        this._userId = userId;
        this._isLiked = false;
        this._handleLikeClick = handleLikeClick;
        this._owner = (data.owner._id  === userId);
    }

    //получить шаблон
    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
    
        return cardElement;
    };

    //создать карточку
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        const image = this._element.querySelector('.element__image');
        this._element.querySelector('.element__title').textContent = this._title;
        image.src = this._photo;
        image.alt = this._title;
        this._element.querySelector('.element__number').textContent = this._numberLike.length;
        this._rendereLike(this._clickedLike(this._numberLike));

        if(this._owner) {
            this._element.querySelector('.element__basket').style.visibility = 'visible';
        } else {
            this._element.querySelector('.element__basket').style.visibility = 'hidden';
        }

        return this._element;
    };
    //установить слушателей событий
    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLikeClick(this._id, this._isLiked);
        });

        this._element.querySelector('.element__basket').addEventListener('click', () => {
            this._handleBasketClick(this);
        });
        
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick();
        });
    };

    deleteCard() {
        this._element.remove();
        this._element = null;
    };

    getId() {
        return this._id;
    };

    _clickedLike(arr) {
        return arr.some(item => item._id === this._userId);
    };

    _rendereLike(data) {
        if(data === true) {
            this._element.querySelector('.element__like').classList.add('element__like_pressed');
            this._isLiked = true
        } else {
            this._element.querySelector('.element__like').classList.remove('element__like_pressed');
            this._isLiked = false
        }
    };

    likeStatus(data) {
        this._element.querySelector('.element__number').textContent = data.likes.length;
        this._rendereLike(this._clickedLike(data.likes))
    };

};
export {Card};