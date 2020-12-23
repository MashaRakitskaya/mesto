export class UserInfo {
    constructor({nameSelector, occupationSelector}) {
        this._nameSelector = nameSelector;
        this._occupationSelector = occupationSelector;
    }

    getUserInfo() {
        return {
            name: this._nameSelector.textContent,
            occupation: this._occupationSelector.textContent
        }
    }

    setUserInfo({ name, occupation }) {
        this._nameSelector.textContent = name;
        this._occupationSelector.textContent = occupation;
    }

}