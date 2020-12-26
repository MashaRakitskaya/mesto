export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        
        // this._container = document.querySelector(containerSelector);
        this._container = containerSelector;
    }

    renderItems() {
        this._renderedItems.forEach(item => this._renderer(item))
    }
    
    addItem(element, isPrepend) {
        // this._container.append(element);
        if (isPrepend) {
            this._container.prepend(element);
        } else {
            this._container.append(element);
        }
    }
}
