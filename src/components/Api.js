export class Api {
    constructor({ address, token }) {
        this._address = address;
        this._token = token;
    }
  
    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards', {
            headers: {
            authorization: '369f7f82-3628-418a-9ccf-d1d1496569f6'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(`Ошибка ${response.status}`)
        })
    }

    getUserInformation() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-19/users/me ', {
            headers: {
            authorization: '369f7f82-3628-418a-9ccf-d1d1496569f6'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(`Ошибка ${response.status}`)
        })  
    }

    addCard(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards', {
            method: 'POST',
            headers: {
                authorization: '369f7f82-3628-418a-9ccf-d1d1496569f6',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))
    }

    removeCard(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-19/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: '369f7f82-3628-418a-9ccf-d1d1496569f6',
            }
        })
        .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))
    }
    
}
  
