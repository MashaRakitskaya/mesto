const formElement = document.querySelector('.popup__form');
const inputElement = formElement.querySelector('.popup__input');
// const formError = formElement.querySelector(`#${formInput.id}-error`);

const showError = (formElement, inputElement, errorMessage) => {
    const formError = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    formError.textContent = errorMessage;
    formError.classList.add('popup__input-error');
}

const hideError = (formElement, inputElement,) => {
    const formError = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    formError.classList.remove('popup__input-error');
    formError.textContent = '';
};

// проверить действительность ввода
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showError(formElement, inputElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      hideError(formElement, inputElement);
    }
};

//имеет неверный ввод
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
};

//переключить состояние кнопки
const toggleButtonState = (inputList, buttonElement) => {
    console.log(hasInvalidInput(inputList));
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__save_disabled');
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove('popup__save_disabled');
      buttonElement.disabled = false;
    }
};

//установить слушателей событий
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__save');
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

//включить проверку
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
      // setEventListeners(formElement);
        formElement.addEventListener('submit', (event) => {
          event.preventDefault();
        });
        // const buttonElement = formElement.querySelector('.popup__save');
        // toggleButtonState(formElement.checkValidity(), buttonElement);
        setEventListeners(formElement);

    });
};

enableValidation(); 

// formElement.addEventListener('submit', function (evt) {
//     // Отменим стандартное поведение по сабмиту
//     evt.preventDefault();
// });

// // Вызовем функцию isValid на каждый ввод символа
// inputElement.addEventListener('input', function () {
//     checkInputValidity();
//   });






// formElement.addEventListener('submit', function (evt) {
//     evt.preventDefault();
//   });
// formInput.addEventListener('input', function (evt) {
//     console.log(evt.target.validity.valid);
//   }); 