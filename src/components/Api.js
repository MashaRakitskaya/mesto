export class Api {
    constructor({ address, token }) {
        this._address = address;
        this._token = token;
    }

    // получить карточки с сервера
    getInitialCards() {
        return fetch(`${this._address}/cards`, {
            headers: {
            authorization: this._token
            }
        })
        .then(response => this._checkAnswerCorrectness(response))
        
    }

    //получить информацию о пользователе с сервера
    getUserInformation() {
        return fetch(`${this._address}/users/me`, {
            headers: {
            authorization: this._token
            }
        })
        .then(response => this._checkAnswerCorrectness(response)) 
    }

    //добавление карточки на сервер
    addCard(data) {
        return fetch(`${this._address}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(response => this._checkAnswerCorrectness(response))
    }

    //удаление карочек с сервера
    removeCard(id) {
        return fetch(`${this._address}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            }
        })
        .then(response => this._checkAnswerCorrectness(response))
    }

    //добавить лайк карточке на сервер
    addLike(cardId) {
        return fetch(`${this._address}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
        .then(response => this._checkAnswerCorrectness(response))
    }

    //удалить лайк с сервера
    deleteLike(cardId) {
        return fetch(`${this._address}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
        .then(response => this._checkAnswerCorrectness(response))
    }

    //добавить информацию о пользователе на сервер
    addUserInfo(data) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // name: 'Marie Skłodowska Curie',
                // about: 'Physicist and Chemist'
                name: data.name,
                about: data.about
            })
        })
        .then(response => this._checkAnswerCorrectness(response))
    }
    
    //добавить аваторку на сервер 
    addUserAvatar(data) {
        return fetch(`${this._address}/users/me/avatar`, {
        method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // avatar: 'https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg'
                avatar: data.avatar
            })
        })
        .then(response => this._checkAnswerCorrectness(response))
    }

    _checkAnswerCorrectness(response) {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(`Ошибка ${response.status}`)
    }
}
  
