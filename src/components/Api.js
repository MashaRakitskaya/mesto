export class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
  
    getInitialCards() {
        fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards', {
            headers: {
            authorization: '369f7f82-3628-418a-9ccf-d1d1496569f6'
            }
        })
        .then(res => {
            return res.json()
        })
        // .then((result) => {
        //     for(var i = 0; i < 6; i++) {
        //         console.log(result[i].name);
        //         console.log(result[i].link);
        //     }
        // })


        // .then((result) => {
        //     const initialCards = [];
        //     for(var i = 0; i < 6; i++) {
        //         initialCards.push(console.log(result[i].name));
        //         initialCards.push(console.log(result[i].link));
                
        //     }
        //     return initialCards;
        // })
    }

    // getUserInformation() {
    // fetch('https://mesto.nomoreparties.co/v1/cohort-19/users/me', {
    //     headers: {
    //     authorization: '369f7f82-3628-418a-9ccf-d1d1496569f6'
    //     }
    // })
    // .then(res => res.json())
    // .then((result) => {
    //     console.log(result);
    // });
    // }
    getUserInformation() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards', {
            headers: {
                authorization: '369f7f82-3628-418a-9ccf-d1d1496569f6'
            }
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                 return Promise.reject(`Ошибка`)
            })
            .then(res => {
                return res.json()
            })

        })
    }
    
    // другие методы работы с API
}
  
