import { popupPhoto, caption } from '../utils/constants.js';
import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
    constructor(data, popupSelector) {
        super(popupSelector);
        this._photo = data.link;
        this._title = data.name;
    }

    open() {
        super.open();
        popupPhoto.src = this._photo;
        caption.textContent = this._title;
    }
}