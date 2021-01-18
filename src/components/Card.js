class Card {

    constructor( { data, handleCardClick, handleBasketClick, handleLikeClick }, cardSelector, userId) {
        this._photo = data.link;
        this._title = data.name;
        this._numberLike = data.likes.length;
        // this._numberLike = data.likes;
        this._handleCardClick = handleCardClick;
        this._id = data._id;
        this._cardSelector = cardSelector;
        this._handleBasketClick = handleBasketClick;
        this._owner = (data.owner._id  === userId);
        this._userId = userId;
        this._isLiked = false;
        this._handleLikeClick = handleLikeClick;
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
        this._element.querySelector('.element__number').textContent = this._numberLike;

        return this._element;
    };

    //установить слушателей событий
    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLikeClick(this._id, this._isLiked, (data) => { this._likeStatus(data) });
            // const number = 0;
            // this._element.querySelector('.element__number').innerHTML = number;
            // number += 1;
        });

        if(this._owner) {
            this._element.querySelector('.element__basket').style.visibility = 'visible';
        } else {
            this._element.querySelector('.element__basket').style.visibility = 'hidden';
        }
        this._element.querySelector('.element__basket').addEventListener('click', () => {
            this._handleBasketClick(this);
            // this._handleBasketClick();
        });
        
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick();
        });

    };

    //обработчик клика по лайку
    // _handleLikeClick() {
    //     this._element.querySelector('.element__like').classList.toggle('element__like_pressed');
    // };

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

    _clickedLike(arr) {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]._id === this._userId) {
                return true;
            }
        }
        return false;
    }

    _rendereLike(data) {
        if(data === true) {
            this._element.querySelector('.element__like').classList.add('element__like_pressed');
            this._isLiked = true
        } else {
            this._element.querySelector('.element__like').classList.remove('element__like_pressed');
            this._isLiked = false
        }
    }

    _likeStatus(data) {
        this._element.querySelector('.element__number').textContent = data.likes.length;
        this._rendereLike(this._clickedLike(data.likes))
    }

};
export {Card};