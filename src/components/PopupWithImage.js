import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._popupPhoto = this._popupElement.querySelector('.popup__photo');
        this._caption = this._popupElement.querySelector('.popup__caption');
    }

    open(data) {
        super.open();
        this._popupPhoto.src = data.link;
        this._caption.textContent = data.name;
    }
}