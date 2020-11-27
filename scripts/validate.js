const showError = (formElement, inputElement, errorMessage, config) => {
    const formError = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(config.errorClass);
};

const hideError = (formElement, inputElement, config) => {
    const formError = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    formError.classList.remove(config.errorClass);
    formError.textContent = '';
};

// проверить действительность ввода
const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      // Если проходит, скроем
      hideError(formElement, inputElement, config);
    }
};

//имеет неверный ввод
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
};

//переключить состояние кнопки
const toggleButtonState = (inputList, buttonElement, config) => {
    // console.log(hasInvalidInput(inputList));
    if (hasInvalidInput(inputList)) {
      disableButton(buttonElement, config);
    } else {
      removeDisableButton(buttonElement, config);
    }
};

//установить слушателей событий
const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, config);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          
          checkInputValidity(formElement, inputElement, config);
          toggleButtonState(inputList, buttonElement, config);
        });
    });
};

//кнопка в состоянии disabled
const disableButton = (buttonElement, config) => {
  buttonElement.classList.add(config.buttonInvalidClass);
  buttonElement.disabled = true;
};

//удаление disabled у кнопки
const removeDisableButton = (buttonElement, config) => {
  buttonElement.classList.remove(config.buttonInvalidClass);
  buttonElement.disabled = false;
};



//включить проверку
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    const buttonSaveTypePhoto = document.querySelector('.popup__save_type_photo');
  
    formList.forEach((formElement) => {
        
        formElement.addEventListener('submit', (event) => {
          event.preventDefault();
          disableButton(buttonSaveTypePhoto, config);
        });

        
        setEventListeners(formElement, config);

    });
};



const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error',
  buttonInvalidClass: 'popup__save_disabled'
};

enableValidation(validationConfig); 

