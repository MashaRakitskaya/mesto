export class Section {
    constructor({ renderer }, containerSelector) {
        // this._renderedItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    // renderItems(items) {
    //     items.forEach(item => this._renderer(item))
    // }

    renderItems(items, isPrepend) {
        if(Array.isArray(items) === true) {
            items.forEach(item => this._renderer(item, isPrepend))
        } else {
            this._renderer(items, isPrepend);
        }
    }
    
    addItem(element, isPrepend) {
        if (isPrepend === true) {
            this._container.prepend(element);
        } else {
            this._container.append(element);
        }
    }


    // addItem(element) {
    //     this._container.prepend(element);
    // }
}
