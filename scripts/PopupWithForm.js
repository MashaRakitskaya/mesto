import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
    constructor({popupSelector, handleSubmitform}) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._handleSubmitform =  handleSubmitform;
        this._popupElement = this._popupSelector.querySelectorAll('.popup__form');
    }

    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', (event) => {
        // console.log('zzz');
        event.preventDefault();
        
        // this._getInputValues();
        this._handleSubmitform(this._getInputValues());
        this.close();
    });
    }

    close() {
        super.close();
        this._popupElement.reset();
        // form.querySelectorAll('.popup__input-error').forEach((span) => {
        //     span.textContent = '';
        // });
        // form.querySelectorAll('.popup__input').forEach((input) => {
        //     input.classList.remove('popup__input_type_error');
        // });
    }
}