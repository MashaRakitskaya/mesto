import { Popup } from './Popup.js';
export class PopupDeleteCard extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._formElement = this._popupElement.querySelector('.popup__form_type_deleteСard');
    }

    setSubmitAction(action) {
        this._handleSubmitCallback = action;
    };

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmitCallback();
        })
    };
    
    close() {
        super.close();
    }
}