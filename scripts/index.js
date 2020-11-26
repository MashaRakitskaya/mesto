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



const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');

function createCard(item) {
    const card = cardTemplate.cloneNode(true);
    const photo = card.querySelector('.element__image');
    const title = card.querySelector('.element__title');

    photo.src = item.link;
    title.textContent = item.name;
    card.querySelector('.element__image').alt = item.name;


    card.querySelector('.element__like').addEventListener('click', event => {
        event.target.classList.toggle('element__like_pressed');
    });
    
    card.querySelector('.element__basket').addEventListener('click', event => {
        event.target.closest('.element').remove();
    });

    photo.addEventListener('click', event => {
        popupPhoto.src = event.target.src;
        caption.textContent = event.target.alt;
        showPopup(popupBigPhoto);
    });

    return card;

};


function addCard(item, elements, isPrepend) {
    if (isPrepend) {
        elements.prepend(createCard(item));  
    } else {
        elements.append(createCard(item));
    }
};

initialCards.forEach(item => addCard(item, elements, false));

addPhotoForm.addEventListener('submit', event => {
    event.preventDefault();
    addCard({
        name: place.value,
        link: photoLink.value
    }, elements, true);
        
    place.value = '';
    photoLink.value = '';
        
    closePopup(popupAddPhoto);
        
});


closeBigFoto.addEventListener('click', function() {
    closePopup(popupBigPhoto);
});







function profileValue() {
    nameField.value = profileTitle.textContent;
    titleField.value = profileParagraph.textContent; 
};


function showPopup(showPopup) {
    showPopup.classList.add('popup_opened');
    document.addEventListener('keyup', closePopupByESC);
    const activePopup = document.querySelector('.popup_opened');
    activePopup.addEventListener('click', closePopupByOverlay);
    
};

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
};


editButton.addEventListener('click', function() {
    showPopup(popupEditProfile);
    profileValue();
});

addButton.addEventListener('click', function() {
    showPopup(popupAddPhoto);
});

popupCloseButton.addEventListener('click', function() {
    closePopup(popupEditProfile);
}); 

popupPhotoCloseButton.addEventListener('click', function() {
    closePopup(popupAddPhoto);
});




editForm.addEventListener('submit', event => {
    event.preventDefault();
    profileTitle.textContent = nameField.value;
    profileParagraph.textContent = titleField.value;
    closePopup(popupEditProfile);
});
