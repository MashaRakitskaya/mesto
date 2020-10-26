let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edit-button');
let profileTitle = document.querySelector('.profile__title');
let profileParagraph = document.querySelector('.profile__paragraph');
let form = popup.querySelector('.popup__form');
let titleField = popup.querySelector('.popup__title-field');
let paragraphFfield = popup.querySelector('.popup__paragraph-field');

function showPopup() {
    popup.classList.add('popup_opened');
    titleField.value = profileTitle.textContent;
    paragraphFfield.value = profileParagraph.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function submitForm(event) {
    event.preventDefault();
    // console.log(titleField.value);
    profileTitle.textContent = titleField.value;
    profileParagraph.textContent = paragraphFfield.value;
}

editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
form.addEventListener('submit', submitForm);