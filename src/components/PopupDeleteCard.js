import { Popup } from './Popup.js';
export class PopupDeleteCard extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._popupElement = this._popupSelector.querySelector('.popup__form_type__deleteСard');
    }

    setSubmitAction(action) {
        this._handleSubmitCallback = action;
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmitCallback();
            this.close();
        })
    };
    
    close() {
        super.close();
        // this._popupElement.reset();
    }
}