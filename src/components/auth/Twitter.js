import React from 'react';
import TwitterLogin from 'react-twitter-auth';
import { push_uniq } from 'terser';

class Twitter extends React.Component {
  onSuccess(response) {
    console.log(response)
    const token = {
      auth_token: response.accessToken
    };

    fetch('https://zeus-staging.herokuapp.com/api/social/auth/twitter/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      CORS: 'no-cors',
      body: JSON.stringify({ user: token })
    })
      .then(res => res.json())
      .then(data => {
        if (data){
          window.location = ('/')
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <TwitterLogin
        appId='gvoXkTkL8BZzddFeUrkJuldpL' 
        loginUrl="https://api.twitter.com/oauth/authorize"
        onFailure={this.onFailed}
        onSuccess={this.onSuccess}
        requestTokenUrl="https://zeus-staging.herokuapp.com/api/social/auth/twitter/"
        showIcon={true}
        forceLogin={true}
      />
    );
  }
}

export default Twitter;
