import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmitForm }) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._handleSubmitForm = handleSubmitForm;
        this._popupElement = this._popupSelector.querySelector('.popup__form');
    }

    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            // this._getInputValues();
            this.close();
        });
    }

    close() {
        super.close();
        this._popupElement.reset();
    }
}