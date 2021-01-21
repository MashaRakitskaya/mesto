import { escape } from '../utils/constants.js';

export class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleByOverlayClose = this._handleByOverlayClose.bind(this);
        this._handleByCross = this._handleByCross.bind(this);
    }
    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
        this._popupElement.addEventListener('click', this._handleByOverlayClose);
    };

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose);
        this._popupElement.removeEventListener('click', this._handleByOverlayClose);
        
    };
    _handleEscClose(event) {
        if (event.keyCode == escape) {
            this.close();
        }  
    };
    _handleByOverlayClose(event) {
        if (event.target.classList.contains('popup')) {
            this.close();
        }
    };

    _handleByCross(event) {
        if (event.target.classList.contains('popup__close')) {
            this.close();
        }
    };
    setEventListeners() {
        this._popupElement.addEventListener('click',this._handleByCross);
    };

   
}