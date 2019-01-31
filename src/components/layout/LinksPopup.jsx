import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LinksPopup extends Component {
  render() {
    return (
      <React.Fragment>
        <ul id="popover-content" className="d-none list-group">
          <li className="list-group-item">
            <Link to="/article/post">New Article</Link>
          </li>
          <li className="list-group-item">
            <Link to="/articles">Articles</Link>
          </li>
          <li className="list-group-item">
            <Link to="#">Stats</Link>
          </li>
          <li className="list-group-item" />
          <li className="list-group-item">
            <Link to="#">Bookmarks</Link>
          </li>
          <li className="list-group-item">
            <Link to="#">Customize your Interests</Link>
          </li>
          <li className="list-group-item" />
          <li className="list-group-item">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="list-group-item">
            <Link to="/userprofiles">Users</Link>
          </li>
          <li className="list-group-item">
            <Link to="#">Settings</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default LinksPopup;
