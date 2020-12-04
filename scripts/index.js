const initialCards = [
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

const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPhoto = document.querySelector('.popup_type_add-photo');
const popupCloseButton = popup.querySelector('.popup__close');
const popupPhotoCloseButton = document.querySelector('.popup__close_type_close-photo');
const editButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const popupBigPhoto = document.querySelector('.popup_type_big-photo');
const profileParagraph = document.querySelector('.profile__paragraph');
const editForm = popup.querySelector('.popup__form');
const addPhotoForm = document.querySelector('.popup__form_type_add-photo');
const nameField = popup.querySelector('.popup__input_type_name');
const titleField = popup.querySelector('.popup__input_type_title');
const addButton = document.querySelector('.profile__add-button');
const place = document.querySelector('.popup__input_type_place');
const photoLink = document.querySelector('.popup__input_type_photo');
const popupPhoto = document.querySelector('.popup__photo');
const caption = document.querySelector('.popup__caption ');
const closeBigFoto = document.querySelector('.popup__close_type_close-big-foto');
const escape = 27;

const formPropile = document.querySelector('.popup__form');
const formPhoto = document.querySelector('.popup__form_type_add-photo');

const buttonTypeEdit = document.querySelector('.popup__save_type_edit');
// const buttonSave = document.querySelector('.popup__save');
const buttonSaveTypePhoto = document.querySelector('.popup__save_type_photo');


const elements = document.querySelector('.elements');

const photo = document.querySelector('.element__image');
const title = document.querySelector('.element__title');
const like = document.querySelector('.element__like');
const basket = document.querySelector('.element__basket');





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

initialCards.forEach((item) => {
    const card = new Card(item, '#card-template');
	const cardElement = card.generateCard();

	elements.append(cardElement);
});



// const elements = document.querySelector('.elements');
// const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');


// //создать карту
// function createCard(item) {
//     const card = cardTemplate.cloneNode(true);
//     const photo = card.querySelector('.element__image');
//     const title = card.querySelector('.element__title');
//     const like = card.querySelector('.element__like');
//     const basket = card.querySelector('.element__basket');


//     photo.src = item.link;
//     title.textContent = item.name;
//     photo.alt = item.name;

//     //при клике на лайк делать его черным и прозрачным при повторном клике
//     like.addEventListener('click', event => {
//         event.target.classList.toggle('element__like_pressed');
//     });

//     //удалять картоку при клике на карзину
//     basket.addEventListener('click', event => {
//         event.target.closest('.element').remove();
//     });

//     //открыть фото на весь экран при клике на фото
//     photo.addEventListener('click', event => {
//         popupPhoto.src = event.target.src;
//         caption.textContent = event.target.alt;
//         showPopup(popupBigPhoto);
//     });

//     return card;

// };


// //добавить карту
// function addCard(item, elements, isPrepend) {
//     if (isPrepend) {
//         elements.prepend(createCard(item));  
//     } else {
//         elements.append(createCard(item));
//     }
// };

// //создать и добавить данные из массива в карты
// initialCards.forEach(item => addCard(item, elements, false));


// //по сабмиту создать новую каточку
// addPhotoForm.addEventListener('submit', event => {
//     event.preventDefault();

//     //добавить карточку в elements
//     addCard({
//         name: place.value,
//         link: photoLink.value
//     }, elements, true);
        
//     place.value = '';
//     photoLink.value = '';

//     //закрыть попап
//     closePopup(popupAddPhoto);
        
// });




//добавить карту
function addCard(item, elements, isPrepend) {
    const card = new Card(item, '#card-template');
	const cardElement = card.generateCard();
    if (isPrepend) {
        elements.prepend(cardElement);
    } else {
        elements.append(cardElement);
    }
};

//создать и добавить данные из массива в карты
// initialCards.forEach(item => addCard(item,  elements, false));


//по сабмиту создать новую каточку
addPhotoForm.addEventListener('submit', event => {
    event.preventDefault();
    
    addCard({
        name: place.value,
        link: photoLink.value
    }, elements, true);
        
    place.value = '';
    photoLink.value = '';

    //закрыть попап
    closePopup(popupAddPhoto);
        
});





//закрыть попап большой фотографии кликом на крестик
closeBigFoto.addEventListener('click', function() {
    closePopup(popupBigPhoto);
});






//значение из инпутов попапа разно значениям на странице
function profileValue() {
    nameField.value = profileTitle.textContent;
    titleField.value = profileParagraph.textContent; 
};

//открыть попап
function showPopup(showPopup) {
    showPopup.classList.add('popup_opened');
    document.addEventListener('keyup', closePopupByESC);
    const activePopup = document.querySelector('.popup_opened');
    activePopup.addEventListener('click', closePopupByOverlay);
};

//закрыть попап
function closePopup(closePopup) {
    const activePopup = document.querySelector('.popup_opened');
    document.removeEventListener('keyup', closePopupByESC);
    activePopup.removeEventListener('click', closePopupByOverlay);
    closePopup.classList.remove('popup_opened');
    resetForm(formPropile);
    resetForm(formPhoto);
};

//закрытие попапов при нажатии ESC
const closePopupByESC = (event) => {
    if (event.keyCode == escape) {
        const activePopup = document.querySelector('.popup_opened'); 
        closePopup(activePopup);
    }
};


//закрытие попапов кликом на overlay
const closePopupByOverlay = function (event) {
    if (event.target.classList.contains('popup')) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
};

//ресэт формы
const resetForm = (form) => {
    form.reset();
    form.querySelectorAll('.popup__input-error').forEach((span) => {
        span.textContent = '';
    });
    form.querySelectorAll('.popup__input').forEach((input) => {
        input.classList.remove('popup__input_type_error');
    });
};

//открыть попап при клике на edit-button  и сделать кнопку активной
editButton.addEventListener('click', function() {
    removeDisableButton(buttonTypeEdit, validationConfig);
    showPopup(popupEditProfile);
    profileValue();
});


//открыть попап создания карточки при клике на кнопку add-button и сделать кнопку неактивной
addButton.addEventListener('click', function() {
    disableButton(buttonSaveTypePhoto, validationConfig);
    showPopup(popupAddPhoto);
});


//нажать на крестик и закрыть попап редактирования профиля
popupCloseButton.addEventListener('click', function() {
    closePopup(popupEditProfile);
}); 


//нажать на крестик и закрыть попап создания карточки
popupPhotoCloseButton.addEventListener('click', function() {
    closePopup(popupAddPhoto);
});



//при сабмите формы редактирования профиля переносить данные из инпутов на страницу
editForm.addEventListener('submit', event => {
    event.preventDefault();
    profileTitle.textContent = nameField.value;
    profileParagraph.textContent = titleField.value;
    closePopup(popupEditProfile);
});
