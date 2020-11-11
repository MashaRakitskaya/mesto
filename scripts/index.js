let popup = document.querySelector('.popup');
let popupEditProfile = document.querySelector('.popup_type_edit-profile');
let popupAddPhoto = document.querySelector('.popup_type_add-photo');
let popupCloseButton = popup.querySelector('.popup__close');
let popupPhotoCloseButton = document.querySelector('.popup__close_type_plose-photo');
let editButton = document.querySelector('.profile__edit-button');
let profileTitle = document.querySelector('.profile__title');
let profileParagraph = document.querySelector('.profile__paragraph');
let form = popup.querySelector('.popup__form');
let nameField = popup.querySelector('.popup__input_type_name');
let titleField = popup.querySelector('.popup__input_type_title');
const addButton = document.querySelector('.profile__add-button');
const place = popup.querySelector('.popup__input_type_place');
const photo = popup.querySelector('.popup__input_type_photo');

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



const element = document.querySelector('.element');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.template');

function createdNewCard(item) {
    const card = cardTemplate.cloneNode(true);
    const photo = card.querySelector('.template__image');
    const title = card.querySelector('.template__title');

    photo.src = item.link;
    title.textContent = item.name;
    card.querySelector('.template__image').alt = item.name;
    
    // photo.addEventListener('click', () => handlePhotoClick(item));

    element.append(card);
}

// function handlePhotoClick(item) {
//     photo;
// }

initialCards.forEach(createdNewCard);



//функиция открытия попапа
// function showPopup() {
//     popup.classList.add('popup_opened'); // у нас popap display: none; чтобы не было его видно , а у popup_opened display: flex;
//     nameField.value = profileTitle.textContent; // передаем значение имя в окно имени попапа
//     titleField.value = profileParagraph.textContent; // передаем значение профессии в окно имени попапа
// }

function profileValue() {
    nameField.value = profileTitle.textContent;
    titleField.value = profileParagraph.textContent; 
}

// function cardValue() {
//     place.textContent = "Название";
//     photo.textContent = "Ссылка на картинку";
// }

function showPopup(showPopup) {
    showPopup.classList.add('popup_opened');
}

//функиция закрытия попапа
function closePopup(closePopup) {
    closePopup.classList.remove('popup_opened'); // удаляем popup_opened display: flex; и остается none
}

//функиция сабимта формы и закрытия попапа
function submitForm(event) {
    event.preventDefault();
    // console.log(titleField.value);
    profileTitle.textContent = nameField.value; // то что написали в имени окна попапа переноситься на главную страницу
    profileParagraph.textContent = titleField.value; // то что написали в професии окна попапа переноситься на главную страницу
    closePopup(); // выпрлнить функицю закрытия попапа
}

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

form.addEventListener('submit', submitForm); // нажимаем энтер и данные из имени и должности созраняюстя и попап закрывается



