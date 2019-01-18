import React from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { responseGoogle } from '../../actions/socialAction';


export class Google extends React.Component {
  constructor() {
    super();
  };

  render() {
    return (
      <GoogleLogin
        buttonText="GOOGLE"
        prompt="consent"
        redirectUri="/"
        autoLoad={false}
        responseType="id_token"
        clientId="691552019879-rso0i7gaschrtmtv5d2rci49elj82eht.apps.googleusercontent.com"
        onSuccess={this.props.responseGoogle}
        onFailure={this.props.responseGoogle}
        size="metro"
        icon={true}
      />
    );
  }
}
export default connect(null,{ responseGoogle })(Google);
