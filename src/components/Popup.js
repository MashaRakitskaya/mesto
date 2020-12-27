import { escape } from '../utils/constants.js';

export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleByOverlayClose = this._handleByOverlayClose.bind(this);
        this._handleByCross = this._handleByCross.bind(this);
    }
    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
        this._popupSelector.addEventListener('click', this._handleByOverlayClose);
    };

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose);
        this._popupSelector.removeEventListener('click', this._handleByOverlayClose);
        
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
        this._popupSelector.addEventListener('click',this._handleByCross);
    };
}