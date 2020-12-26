import { escape } from '../utils/constants.js';

export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keyup', (event) => {
            this._handleEscClose(event)
        });
        this._popupSelector.addEventListener('click', (event) => {
            this._handleByOverlayClose(event)
        });
    };

    close() {
        this._popupSelector.classList.remove('popup_opened');
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
        this._popupSelector.addEventListener('click', (event) => {
            this._handleByCross(event)
        });
        document.removeEventListener('keyup', (event) => {
            this._handleEscClose(event)
        });
        this._popupSelector.removeEventListener('click', (event) => {
            this._handleByOverlayClose(event)
        });
    };
}