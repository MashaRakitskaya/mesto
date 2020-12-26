export class FormValidator {
  constructor(config, formSelector) {
      this._config = config;
      this._formSelector = formSelector;
  };

  _showError(formElement, inputElement, errorMessage) {
    const formError = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._config.errorClass);
  };

  _hideError(formElement, inputElement) {
    const formError = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    formError.classList.remove(this._config.errorClass);
    formError.textContent = '';
  };

  // проверить действительность ввода
  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      this._showError(formElement, inputElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      this._hideError(formElement, inputElement);
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
    // console.log(hasInvalidInput(inputList));
    if (this._hasInvalidInput(inputList)) {
      this.disableButton(buttonElement);
    } else {
      this.removeDisableButton(buttonElement);
    }
  };

  //установить слушателей событий
  _setEventListeners(formElement, buttonElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          
          this._checkInputValidity(formElement, inputElement);
          this._toggleButtonState(inputList, buttonElement);
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
    const formElement = document.querySelector(this._formSelector);
    const buttonElement = formElement.querySelector(this._config.submitButtonSelector);
   
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  
          
    this._setEventListeners(formElement, buttonElement);
  };


  // reset(form) {
  //   form.reset();
  //   form.querySelectorAll('.popup__input-error').forEach((span) => {
  //     span.textContent = '';
  //   });
  //   form.querySelectorAll('.popup__input').forEach((input) => {
  //     input.classList.remove('popup__input_type_error');
  //   });
  // };

  resetForm(formElement) {
    formElement.reset();
    const inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));
    inputList.forEach((inputElement) => {
      this._hideError(formElement, inputElement);
    })
  };

};