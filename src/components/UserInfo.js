export class UserInfo {
    constructor({nameSelector, occupationSelector, avatarSelector, id}) {
        this._nameSelector = nameSelector;
        this._occupationSelector = occupationSelector;
        this._avatarSelector = avatarSelector;
        this._id = id;

    }

    getUserInfo() {
        return {
            name: this._nameSelector.textContent,
            occupation: this._occupationSelector.textContent,
            avatar: this.avatar,
            id: this._id
        }
    }

    setUserInfo({ name, occupation, avatar, _id }) {
        this._nameSelector.textContent = name;
        this._occupationSelector.textContent = occupation;
        this._avatarSelector.src = avatar;
        this._id = _id;
        
    }

}