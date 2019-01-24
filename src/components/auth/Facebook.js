import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { responseFacebook } from '../../actions/socialAction';

export class Facebook extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <FacebookLogin
        appId="328736491284498"
        autoLoad={false}
        fields="name,email,picture"
        callback={this.props.responseFacebook}
        size="small"
        icon="fa-facebook"
        textButton="FACEBOOK"
      />
    );
  }
}

export default connect(
  null,
  { responseFacebook }
)(Facebook);
