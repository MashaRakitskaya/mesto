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
}
  
