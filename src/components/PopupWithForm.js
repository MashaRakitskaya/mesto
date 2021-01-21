import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
    constructor({ popupElement, handleSubmitForm }) {
        super(popupElement);
        this._handleSubmitForm = handleSubmitForm;
        this._formElement = this._popupElement.querySelector('.popup__form');
    }

    _getInputValues() {
        this._inputList = this._formElement.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmitForm(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}