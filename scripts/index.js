let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edit-button');
let profileTitle = document.querySelector('.profile__title');
let profileParagraph = document.querySelector('.profile__paragraph');
let form = popup.querySelector('.popup__form');
let nameField = popup.querySelector('.popup__input_type_name');
let titleField = popup.querySelector('.popup__input_type_title');
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
function showPopup() {
    popup.classList.add('popup_opened'); // у нас popap display: none; чтобы не было его видно , а у popup_opened display: flex;
    nameField.value = profileTitle.textContent; // передаем значение имя в окно имени попапа
    titleField.value = profileParagraph.textContent; // передаем значение профессии в окно имени попапа
}

//функиция закрытия попапа
function closePopup() {
    popup.classList.remove('popup_opened'); // удаляем popup_opened display: flex; и остается none
}

//функиция сабимта формы и закрытия попапа
function submitForm(event) {
    event.preventDefault();
    // console.log(titleField.value);
    profileTitle.textContent = nameField.value; // то что написали в имени окна попапа переноситься на главную страницу
    profileParagraph.textContent = titleField.value; // то что написали в професии окна попапа переноситься на главную страницу
    closePopup(); // выпрлнить функицю закрытия попапа
}

editButton.addEventListener('click', showPopup); // нажимаем на кнопку и попап открывается
popupCloseButton.addEventListener('click', closePopup); // нажимаем на крест и попап закрывается
form.addEventListener('submit', submitForm); // нажимаем энтер и данные из имени и должности созраняюстя и попап закрывается



