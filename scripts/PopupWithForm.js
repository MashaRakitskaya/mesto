import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

    }
    _getInputValues() {
        // profileTitle.textContent = nameField.value;
        // profileParagraph.textContent = titleField.value;
    }

    setEventListeners(popupCloseButton) {
    super(setEventListeners(popupCloseButton));
    editForm.addEventListener('submit', event => {
        event.preventDefault();
        // profileTitle.textContent = nameField.value;
        // profileParagraph.textContent = titleField.value;
        // closePopup(popupEditProfile);
    });
    }

    close() {
        super.close();
    }
}