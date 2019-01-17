import { GET_ERRORS } from '../constants/ActionTypes';

export const registeruser = (userData, history) => {
    return function (dispatch) {
        fetch('https://zeus-staging.herokuapp.com/api/users/',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                CORS: 'no-cors',
                body: JSON.stringify({ user: userData })
            })
            .then(res => res.json())
            .then(data => {
        
                  if(data.errors){
                dispatch({
                    type: GET_ERRORS,
                    payload: data
                });
                  }else{
                     
                      
                        history.push('/login');
                  }

            });
    };
};