import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editProfile, savePhoto, getProfile } from '../../actions/userprofile';

export class Editprofile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: localStorage.getItem('bio'),
      fun_fact: localStorage.getItem('fun_fact'),
      photo: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
  }

  componentDidMount() {
    this.props.editProfile;
    this.props.savePhoto;
    this.props.getProfile;
  }
  onChange(e) {
    
    return this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const profileInfo = {
      bio: this.state.bio,
      fun_fact: this.state.fun_fact,
      photo: localStorage.getItem('profile_url')
    };
    this.props.editProfile(profileInfo);
    setTimeout('location.reload(true);', 100);
    let {history}=this.props;
    history.push('/profile');
    
  }

  uploadPhoto(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ouise4nw');
    this.props.savePhoto(formData);
  }

  render() {
    let userInformation = (
      <section id="dashboard-page" className="flex-grow-1">
        <div id="featured-edit-profile" className="mt-5 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">

                 <img
                      src={localStorage.getItem('profile_pic')}
                      alt="profile"
                      className=" img-thumbnail rounded-circle"
                      width="100"
                      height="100"
                    />
                <div className="d-flex flex-row">
                  <div className="col-md-7">
                    <form className="mt-3" onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input
                          name="bio"
                          id="edit_bio"
                          placeholder="bio"
                          className="form-control"
                          type="text"
                          value={this.state.bio}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="fun_fact"
                          className="form-control"
                          placeholder="fun_fact"
                          type="text"
                          value={this.state.fun_fact}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          value={this.state.photo}
                          onChange={this.uploadPhoto}
                          id="inputGroupFile02"
                        />
                        <label
                          className="custom-file-label"
                          for="inputGroupFile02"
                          aria-describedby="inputGroupFileAddon02"
                        >
                          Choose image
                        </label>
                      </div>
                      <input className="profile_btn" type="submit" value="submit" />
                      <Link to="/profile">
                      <input className="profile_btn" type="button" value="Cancel" />
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
    return <div className="flex-grow-1">{userInformation}</div>;
    
  }
}

Editprofile.propTypes = {
   getProfile: PropTypes.func.isRequired,
  userprof: PropTypes.object
};

const mapStateToProps = state => {
  return {
    userprofile: state.userprofile.userprofile
  };
};

export default connect(
  mapStateToProps,
  { editProfile, savePhoto,getProfile }
)(Editprofile);
