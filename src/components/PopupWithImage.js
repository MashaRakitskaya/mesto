import { popupPhoto, caption } from '../utils/constants.js';
import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(data) {
        super.open();
        this._photo = data.link;
        this._title = data.name;
        popupPhoto.src = this._photo;
        caption.textContent = this._title;
    }
}