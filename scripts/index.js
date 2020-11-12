let popup = document.querySelector('.popup');
let popupEditProfile = document.querySelector('.popup_type_edit-profile');
let popupAddPhoto = document.querySelector('.popup_type_add-photo');
let popupCloseButton = popup.querySelector('.popup__close');
let popupPhotoCloseButton = document.querySelector('.popup__close_type_plose-photo');
let editButton = document.querySelector('.profile__edit-button');
let profileTitle = document.querySelector('.profile__title');
let profileParagraph = document.querySelector('.profile__paragraph');
let editForm = popup.querySelector('.popup__form');
let addPhotoForm = document.querySelector('.popup__form_type_add-photo');
let nameField = popup.querySelector('.popup__input_type_name');
let titleField = popup.querySelector('.popup__input_type_title');
const addButton = document.querySelector('.profile__add-button');
const place = document.querySelector('.popup__input_type_place');
const photoLink = document.querySelector('.popup__input_type_photo');

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

function createdNewCard(item, isPrepend) {
    const card = cardTemplate.cloneNode(true);
    const photo = card.querySelector('.element__image');
    const title = card.querySelector('.element__title');

    photo.src = item.link;
    title.textContent = item.name;
    card.querySelector('.element__image').alt = item.name;
    if (isPrepend) {
        elements.append(card);  
    } else {
        elements.prepend(card);
    }
    
    card.querySelector('.element__like').addEventListener('click', event => {
        event.target.classList.toggle('element__like_pressed');
    });
    
    card.querySelector('.element__basket').addEventListener('click', event => {
        event.target.closest('.element').remove();
    });
};

initialCards.forEach(createdNewCard);


function profileValue() {
    nameField.value = profileTitle.textContent;
    titleField.value = profileParagraph.textContent; 
};


function showPopup(showPopup) {
    showPopup.classList.add('popup_opened');
};

//функиция закрытия попапа
function closePopup(closePopup) {
    closePopup.classList.remove('popup_opened'); // удаляем popup_opened display: flex; и остается none
};

//функиция сабимта формы и закрытия попапа
// function submitForm(event) {
//     event.preventDefault();
//     // console.log(titleField.value);
//     profileTitle.textContent = nameField.value; // то что написали в имени окна попапа переноситься на главную страницу
//     profileParagraph.textContent = titleField.value; // то что написали в професии окна попапа переноситься на главную страницу
//     closePopup(); // выпрлнить функицю закрытия попапа
// }

// editButton.addEventListener('click', showPopup); // нажимаем на кнопку и попап открывается
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


addPhotoForm.addEventListener('submit', event => {
    event.preventDefault();
    createdNewCard({
        name: place.value,
        link: photoLink.value
    });
    
    closePopup(popupAddPhoto);
    
});
