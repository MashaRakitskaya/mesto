export class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
  
    getInitialCards() {
      // ...
    }

    getUserInformation() {
    fetch('https://mesto.nomoreparties.co/v1/cohort-19/users/me', {
        headers: {
        authorization: '369f7f82-3628-418a-9ccf-d1d1496569f6'
        }
    })
    .then(res => res.json())
    .then((result) => {
        console.log(result);
    }); 
    }
  
    // другие методы работы с API
}
  
