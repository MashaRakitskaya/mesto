export class FormValidator {
  constructor(config, formSelector) {
      this._config = config;
      this._formSelector = formSelector;
      this._inputSelector = config.inputSelector;
      this._formElement = document.querySelector(this._formSelector);
      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  };

  _showError(inputElement, errorMessage) {
    const formError = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._config.errorClass);
  };

  _hideError(inputElement) {
    const formError = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    formError.classList.remove(this._config.errorClass);
    formError.textContent = '';
  };
  // проверить действительность ввода
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      this._hideError(inputElement);
    }
  };

  //имеет неверный ввод
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  //переключить состояние кнопки
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      this.disableButton(buttonElement);
    } else {
      this.removeDisableButton(buttonElement);
    }
  };

  //установить слушателей событий
  _setEventListeners(buttonElement) {
    this._toggleButtonState(this._inputList, buttonElement);

    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          
          this._checkInputValidity(inputElement);
          this._toggleButtonState(this._inputList, buttonElement);
        });
    });
  };

  //кнопка в состоянии disabled
  disableButton(buttonElement) {
    buttonElement.classList.add(this._config.buttonInvalidClass);
    buttonElement.disabled = true;
  };

  //удаление disabled у кнопки
  removeDisableButton(buttonElement) {
    buttonElement.classList.remove(this._config.buttonInvalidClass);
    buttonElement.disabled = false;
  };

  
  //включить проверку
  enableValidation() {
    const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
 
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
 
    this._setEventListeners(buttonElement);
  };

  //ресэт форм
  resetForm(formElement) {
    formElement.reset();
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    })
  };

};