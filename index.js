(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o){var r=e.data,i=e.handleCardClick,c=e.handleBasketClick,a=e.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._photo=r.link,this._title=r.name,this._numberLike=r.likes,this._handleCardClick=i,this._id=r._id,this._cardSelector=n,this._handleBasketClick=c,this._userId=o,this._isLiked=!1,this._handleLikeClick=a,this._owner=r.owner._id===o}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".element__image");return this._element.querySelector(".element__title").textContent=this._title,e.src=this._photo,e.alt=this._title,this._element.querySelector(".element__number").textContent=this._numberLike.length,this._rendereLike(this._clickedLike(this._numberLike)),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like").addEventListener("click",(function(){e._handleLikeClick(e._id,e._isLiked,(function(t){e._likeStatus(t)}))})),this._owner?this._element.querySelector(".element__basket").style.visibility="visible":this._element.querySelector(".element__basket").style.visibility="hidden",this._element.querySelector(".element__basket").addEventListener("click",(function(){e._handleBasketClick(e)})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick()}))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"getId",value:function(){return this._id}},{key:"_clickedLike",value:function(e){for(var t=0;t<e.length;t++)if(e[t]._id===this._userId)return!0;return!1}},{key:"_rendereLike",value:function(e){!0===e?(this._element.querySelector(".element__like").classList.add("element__like_pressed"),this._isLiked=!0):(this._element.querySelector(".element__like").classList.remove("element__like_pressed"),this._isLiked=!1)}},{key:"_likeStatus",value:function(e){this._element.querySelector(".element__number").textContent=e.likes.length,this._rendereLike(this._clickedLike(e.likes))}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formSelector=n}var t,o;return t=e,(o=[{key:"_showError",value:function(e,t,n){var o=e.querySelector("#".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),o.textContent=n,o.classList.add(this._config.errorClass)}},{key:"_hideError",value:function(e,t){var n=e.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),n.classList.remove(this._config.errorClass),n.textContent=""}},{key:"_checkInputValidity",value:function(e,t){t.validity.valid?this._hideError(e,t):this._showError(e,t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?this.disableButton(t):this.removeDisableButton(t)}},{key:"_setEventListeners",value:function(e,t){var n=this,o=Array.from(e.querySelectorAll(this._config.inputSelector));this._toggleButtonState(o,t),o.forEach((function(r){r.addEventListener("input",(function(){n._checkInputValidity(e,r),n._toggleButtonState(o,t)}))}))}},{key:"disableButton",value:function(e){e.classList.add(this._config.buttonInvalidClass),e.disabled=!0}},{key:"removeDisableButton",value:function(e){e.classList.remove(this._config.buttonInvalidClass),e.disabled=!1}},{key:"enableValidation",value:function(){var e=document.querySelector(this._formSelector),t=e.querySelector(this._config.submitButtonSelector);e.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners(e,t)}},{key:"resetForm",value:function(e){var t=this;e.reset(),Array.from(e.querySelectorAll(this._config.inputSelector)).forEach((function(n){t._hideError(e,n)}))}}])&&n(t.prototype,o),e}(),r=document.querySelector(".elements"),i=(document.querySelector(".popup__close"),document.querySelector(".profile__edit-button")),c=document.querySelector(".profile__add-button"),a=document.querySelector(".popup_type_edit-profile"),u=document.querySelector(".popup_type_add-photo"),l=document.querySelector(".popup_type_big-photo"),s=(document.querySelector(".popup__close_type_close-photo"),document.querySelector(".popup__close_type_close-big-foto"),document.querySelector(".popup__photo")),p=document.querySelector(".popup__caption"),f=document.querySelector(".profile__title"),h=document.querySelector(".profile__paragraph"),_=document.querySelector(".popup__input_type_name"),d=document.querySelector(".popup__input_type_title"),y=document.querySelector(".popup__form_type_edit-profile"),v=document.querySelector(".popup__form_type_add-photo"),m=document.querySelector(".popup__save_type_edit"),b=document.querySelector(".popup__save_type_photo"),k=document.querySelector(".popup_type_update-avatar"),S=document.querySelector(".profile__avatar"),g=document.querySelector(".popup__form_type_update-avatar"),C=document.querySelector(".popup__save_type_avatar"),E=(document.querySelector(".popup__input_type_avatar-photo"),document.querySelector(".popup_type_deleteСard")),L=(document.querySelector(".element__basket"),document.querySelector(".profile__avatar-container"));function w(e,t){t.textContent=e?"Сохранение...":t.value}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var j=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e,t){!0===t?this._container.prepend(e):this._container.append(e)}}])&&O(t.prototype,n),e}();function q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._handleEscClose=this._handleEscClose.bind(this),this._handleByOverlayClose=this._handleByOverlayClose.bind(this),this._handleByCross=this._handleByCross.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose),this._popupSelector.addEventListener("click",this._handleByOverlayClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose),this._popupSelector.removeEventListener("click",this._handleByOverlayClose)}},{key:"_handleEscClose",value:function(e){27==e.keyCode&&this.close()}},{key:"_handleByOverlayClose",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"_handleByCross",value:function(e){e.target.classList.contains("popup__close")&&this.close()}},{key:"setEventListeners",value:function(){this._popupSelector.addEventListener("click",this._handleByCross)}}])&&q(t.prototype,n),e}();function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function B(e,t,n){return(B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(c,e);var t,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(o);if(r){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function c(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,e)}return t=c,(n=[{key:"open",value:function(e){B(D(c.prototype),"open",this).call(this),this._photo=e.link,this._title=e.name,s.src=this._photo,p.textContent=this._title}}])&&R(t.prototype,n),c}(P);function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var V=function(){function e(t){var n=t.nameSelector,o=t.occupationSelector,r=t.avatarSelector,i=t.id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=n,this._occupationSelector=o,this._avatarSelector=r,this._id=i}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,occupation:this._occupationSelector.textContent,avatar:this.avatar,id:this._id}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.occupation,o=e.avatar,r=e._id;this._nameSelector.textContent=t,this._occupationSelector.textContent=n,this._avatarSelector.src=o,this._id=r}}])&&A(t.prototype,n),e}();function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function N(e,t,n){return(N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(c,e);var t,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(o);if(r){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function c(e){var t,n=e.popupSelector,o=e.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,n))._popupSelector=n,t._handleSubmitForm=o,t._popupElement=t._popupSelector.querySelector(".popup__form"),t}return t=c,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupElement.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;N(M(c.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){N(M(c.prototype),"close",this).call(this),this._popupElement.reset()}}])&&z(t.prototype,n),c}(P);function K(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Q=function(){function e(t){var n=t.address,o=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._token=o}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"getUserInformation",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"addCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"addUserInfo",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"addUserAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}}])&&K(t.prototype,n),e}();function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Y(e,t,n){return(Y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ee(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(c,e);var t,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ee(o);if(r){var n=ee(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return $(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupSelector=e,t._popupElement=t._popupSelector.querySelector(".popup__form_type_deleteСard"),t}return t=c,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;Y(ee(c.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback(),e.close()}))}},{key:"close",value:function(){Y(ee(c.prototype),"close",this).call(this)}}])&&X(t.prototype,n),c}(P),ne=new Q({address:"https://mesto.nomoreparties.co/v1/cohort-19",token:"369f7f82-3628-418a-9ccf-d1d1496569f6"}),oe=function(e){return new t({data:e,handleCardClick:function(){ie.open(e)},handleBasketClick:function(e){se.open(),se.setSubmitAction((function(){ne.removeCard(e.getId()).then((function(){return e.deleteCard()})).catch((function(e){return console.log("Ошибка при удалении карточки ".concat(e))}))}))},handleLikeClick:function(e,t,n){!1===t?ne.addLike(e).then((function(e){n(e)})).catch((function(e){return console.log("Ошибка при добавлении лайка ".concat(e))})):ne.deleteLike(e).then((function(e){n(e)})).catch((function(e){return console.log("Ошибка при удалении лайка ".concat(e))}))}},"#card-template",ce.getUserInfo().id).generateCard()},re=new j({renderer:function(e){re.addItem(oe(e),!1)}},r);ne.getInitialCards().then((function(e){re.renderItems(e)})).catch((function(e){return console.log("Ошибка выгрузки карточек ".concat(e))}));var ie=new U(l);ie.setEventListeners(),i.addEventListener("click",(function(){ue.open(),fe.resetForm(y),fe.removeDisableButton(m);var e=ce.getUserInfo();_.value=e.name,d.value=e.occupation})),c.addEventListener("click",(function(){ae.open(),fe.resetForm(v),fe.disableButton(b)})),L.addEventListener("click",(function(){le.open(),fe.resetForm(g),fe.disableButton(C)})),ne.getUserInformation().then((function(e){ce.setUserInfo({name:e.name,occupation:e.about,avatar:e.avatar,_id:e._id})})).catch((function(e){return console.log("Ошибка получения информации о пользователе ".concat(e))}));var ce=new V({nameSelector:f,occupationSelector:h,avatarSelector:S}),ae=new G({popupSelector:u,handleSubmitForm:function(e){w(!0,b),ne.addCard({name:e.place,link:e.photo}).then((function(e){re.addItem(oe(e),!0)})).catch((function(e){return console.log("Ошибка добавления карточки ".concat(e))})).finally((function(){w(!1,b)}))}});ae.setEventListeners();var ue=new G({popupSelector:a,handleSubmitForm:function(e){w(!0,m),ne.addUserInfo({name:e.profileName,about:e.occupation}).then((function(e){ce.setUserInfo({name:e.name,occupation:e.about,avatar:e.avatar,_id:e._id})})).catch((function(e){return console.log("Ошибка редактирования информации о пользователе ".concat(e))})).finally((function(){w(!1,m)}))}});ue.setEventListeners();var le=new G({popupSelector:k,handleSubmitForm:function(e){w(!0,C),ne.addUserAvatar({avatar:e.avatar}).then((function(e){console.log(e.avatar),S.src=e.avatar})).catch((function(e){return console.log("Ошибка редактирования аватарки".concat(e))})).finally((function(){w(!1,C)}))}});le.setEventListeners();var se=new te(E);se.setEventListeners();var pe={inputSelector:".popup__input",submitButtonSelector:".popup__save",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error",buttonInvalidClass:"popup__save_disabled"},fe=new o(pe,".popup__form_type_edit-profile"),he=new o(pe,".popup__form_type_add-photo"),_e=new o(pe,".popup__form_type_update-avatar");fe.enableValidation(),he.enableValidation(),_e.enableValidation()})();