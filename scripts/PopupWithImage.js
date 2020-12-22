import { Popup } from './Popup.js';
import { popupPhoto, caption } from '../utils/constants.js';
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