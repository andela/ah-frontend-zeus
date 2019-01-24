import { GET_ERRORS } from '../constants/ActionTypes';


export const responseGoogle = (response) => dispatch => {
   
    const token = {auth_token: response.tokenId}
    return fetch('https://zeus-staging.herokuapp.com/api/social/auth/google/', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      CORS: "no-cors",
      body: JSON.stringify({ user: token })
    })
      .then(res => res.json())
      .then(data =>{
        if (data.errors || data.user.auth_token === ("A user with this email already exists, Please login") ){
            dispatch({
              type: GET_ERRORS,
              payload: data
            });
            alert(data.user.auth_token)
        } 
        else {
            localStorage.setItem("Token",data.user.auth_token)
            window.location = ('/')
        }
      }
      );
  };


  export const responseFacebook = (response) => dispatch => {
   
    const token = {auth_token: response.accessToken}
    return fetch('https://zeus-staging.herokuapp.com/api/social/auth/facebook/', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      CORS: "no-cors",
      body: JSON.stringify({ user: token })
    })
      .then(res => res.json())
      .then(data =>{
        if (data.errors || data.user.auth_token === ("A user with this email already exists, Please login") ){
            dispatch({
              type: GET_ERRORS,
              payload: data
            });
            alert(data.user.auth_token)
        } 
        else {
            localStorage.setItem("Token", data.user.auth_token)
            window.location = ('/')

        }
      }
      );
  };
