export class UserInfo {
    constructor({nameSelector, occupationSelector, avatarSelector}) {
        this._nameSelector = nameSelector;
        this._occupationSelector = occupationSelector;
        this._avatarSelector = avatarSelector;

    }

    getUserInfo() {
        return {
            name: this._nameSelector.textContent,
            occupation: this._occupationSelector.textContent
        }
    }
    // getUserInfo(data) {
    //     return {
    //         name: this._nameSelector(data).textContent,
    //         occupation: this._occupationSelector(data).textContent
    //     }
    // }

    setUserInfo({ name, occupation, avatar }) {
        this._nameSelector.textContent = name;
        this._occupationSelector.textContent = occupation;
        this._avatarSelector.src = avatar;
    }

}