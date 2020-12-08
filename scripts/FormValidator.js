// class FormValidator {
//   constructor(config, formElement) {
//       this._config = config;
//       this._formElement = formElement;
//   };


//   _showError(inputElement) {
//     const formError = this._formElement.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.add(this._config.inputErrorClass);
//     // formError.textContent = errorMessage;
//     formError.textContent = inputElement.validationMessage;
//     formError.classList.add(this._config.errorClass);
//   };

//   _hideError(inputElement) {
//     const formError = this._formElement.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.remove(this._config.inputErrorClass);
//     formError.classList.remove(this._config.errorClass);
//     formError.textContent = '';
//   };


//   _checkInputValidity(inputElement) {
//     if (!inputElement.validity.valid) {
//       // Если поле не проходит валидацию, покажем ошибку
//       this._showError(inputElement);
//     } else {
//       // Если проходит, скроем
//       this._hideError(inputElement);
//     }
//   };

//   //имеет неверный ввод
//   _hasInvalidInput(inputList) {
//     return inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     });
//   };


//   //переключить состояние кнопки
//   _toggleButtonState(inputList, buttonElement) {
//     // console.log(hasInvalidInput(inputList));
//     if (this._hasInvalidInput(inputList)) {
//       this._disableButton(buttonElement);
//     } else {
//       removeDisableButton(buttonElement);
//     }
//   };


//   // //установить слушателей событий
//   // _setEventListeners(buttonElement) {
//   //   const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
//   //   // const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);

//   //   this._toggleButtonState(inputList, buttonElement);

//   //   inputList.forEach((inputElement) => {
//   //       inputElement.addEventListener('input', () => {
//   //         this._checkInputValidity(inputElement);
//   //         this._toggleButtonState(inputList, buttonElement);
//   //       });
//   //   });
//   // };





//   //установить слушателей событий
//   _setEventListeners() {
   
//     const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
//     const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);

//     this._toggleButtonState(inputList, buttonElement);

//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', () => {
          
//           this._checkInputValidity(inputElement);
//           this._toggleButtonState(inputList, buttonElement);
//         });
//     });
//   };


  
//   //кнопка в состоянии disabled
//   _disableButton(buttonElement) {
//     buttonElement.classList.add(this._config.buttonInvalidClass);
//     buttonElement.disabled = true;
//   };

//   //удаление disabled у кнопки
//   removeDisableButton(buttonElement) {
//     buttonElement.classList.remove(this._config.buttonInvalidClass);
//     buttonElement.disabled = false;
//   };

//   //включить проверку
//   enableValidation() {
//     const formList = Array.from(document.querySelectorAll(this._config.formSelector));
//     const buttonSaveTypePhoto = document.querySelector('.popup__save_type_photo');

//     formList.forEach((form) => {
      
//       form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         this._disableButton(buttonSaveTypePhoto);
//       });

      
//       this._setEventListeners();

//     });
//   };

//   // //включить проверку
//   // enableValidation() {
//   //   const formList = document.querySelectorAll(this._config.formSelector);
//   //   // const buttonSaveTypePhoto = document.querySelector('.popup__save_type_photo');
//   //   const buttonElement = formList.querySelector(this._config.submitButtonSelector);

//   //   // formList.forEach((formElement) => {
      
//   //       // formElement.addEventListener('submit', (event) => {
//   //       //   event.preventDefault();
//   //       //   // disableButton(buttonSaveTypePhoto);
//   //       //   disableButton(buttonElement);
//   //       // });
//   //       formList.addEventListener('submit', (event) => {
//   //         event.preventDefault();
//   //         // disableButton(buttonSaveTypePhoto);
//   //         disableButton(buttonElement);
//   //       });

      
//   //     this._setEventListeners(buttonElement);

//   //   // });
//   // };


//   // //включить проверку
//   // enableValidation() {
//   //   const formList = Array.from(document.querySelectorAll(this._config.formSelector));
//   //   const buttonSaveTypePhoto = document.querySelector('.popup__save_type_photo');

//   //   formList.forEach(() => {
      
//   //     this._formElement.addEventListener('submit', (event) => {
//   //       event.preventDefault();
//   //       this._disableButton(buttonSaveTypePhoto);
//   //     });

      
//   //     this._setEventListeners();

//   //   });
//   // };


// };



// export {FormValidator};



// import { validationConfig } from './index.js';








class FormValidator {
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
    // const buttonElement = formElement.querySelector(this._config.submitButtonSelector);

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
    // const buttonSaveTypePhoto = document.querySelector('.popup__save_type_photo');
    const buttonElement = formElement.querySelector(this._config.submitButtonSelector);
  
    
      
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      // this.disableButton(buttonSaveTypePhoto);
      // this.disableButton(buttonElement);
    });
  
          
    this._setEventListeners(formElement, buttonElement);
    
        
    

    
  };



};



export { FormValidator };


















// const showError = (formElement, inputElement, errorMessage, config) => {
//   const formError = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.add(config.inputErrorClass);
//   formError.textContent = errorMessage;
//   formError.classList.add(config.errorClass);
// };

// const hideError = (formElement, inputElement, config) => {
//   const formError = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.remove(config.inputErrorClass);
//   formError.classList.remove(config.errorClass);
//   formError.textContent = '';
// };

// // проверить действительность ввода
// const checkInputValidity = (formElement, inputElement, config) => {
//   if (!inputElement.validity.valid) {
//     // Если поле не проходит валидацию, покажем ошибку
//     showError(formElement, inputElement, inputElement.validationMessage, config);
//   } else {
//     // Если проходит, скроем
//     hideError(formElement, inputElement, config);
//   }
// };

// //имеет неверный ввод
// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// //переключить состояние кнопки
// const toggleButtonState = (inputList, buttonElement, config) => {
//   // console.log(hasInvalidInput(inputList));
//   if (hasInvalidInput(inputList)) {
//     disableButton(buttonElement, config);
//   } else {
//     removeDisableButton(buttonElement, config);
//   }
// };

// //установить слушателей событий
// const setEventListeners = (formElement, config) => {
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   const buttonElement = formElement.querySelector(config.submitButtonSelector);

//   toggleButtonState(inputList, buttonElement, config);

//   inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', () => {
        
//         checkInputValidity(formElement, inputElement, config);
//         toggleButtonState(inputList, buttonElement, config);
//       });
//   });
// };

// //кнопка в состоянии disabled
// const disableButton = (buttonElement, config) => {
// buttonElement.classList.add(config.buttonInvalidClass);
// buttonElement.disabled = true;
// };

// //удаление disabled у кнопки
// const removeDisableButton = (buttonElement, config) => {
// buttonElement.classList.remove(config.buttonInvalidClass);
// buttonElement.disabled = false;
// };



// //включить проверку
// const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   const buttonSaveTypePhoto = document.querySelector('.popup__save_type_photo');

//   formList.forEach((formElement) => {
      
//       formElement.addEventListener('submit', (event) => {
//         event.preventDefault();
//         disableButton(buttonSaveTypePhoto, config);
//       });

      
//       setEventListeners(formElement, config);

//   });
// };



// const validationConfig = {
// formSelector: '.popup__form',
// inputSelector: '.popup__input',
// submitButtonSelector: '.popup__save',
// inputErrorClass: 'popup__input_type_error',
// errorClass: 'popup__input-error',
// buttonInvalidClass: 'popup__save_disabled'
// };

// enableValidation(validationConfig); 