let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edit-button');
let profileTitle = document.querySelector('.profile__title');
let profileParagraph = document.querySelector('.profile__paragraph');
let form = popup.querySelector('.popup__form');
let nameField = popup.querySelector('.popup__input_type_name');
let titleField = popup.querySelector('.popup__input_type_title');

function showPopup() {
    popup.classList.add('popup_opened');
    nameField.value = profileTitle.textContent;
    titleField.value = profileParagraph.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function submitForm(event) {
    event.preventDefault();
    // console.log(titleField.value);
    profileTitle.textContent = nameField.value;
    profileParagraph.textContent = titleField.value;
}

editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
form.addEventListener('submit', submitForm);