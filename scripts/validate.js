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

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showError(formElement, inputElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      hideError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (event) => {
          event.preventDefault();
        });
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