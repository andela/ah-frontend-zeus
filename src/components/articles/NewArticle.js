import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css';
import Modules from '../../constants/ActionTypes';

export class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id="dashboard-page" className="flex-grow-1">
        <section id="featured-new-article" className="mt-5 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <div className="card">
                  <div className="card-header zeus-color text-center text-white">
                    Create New Article
                  </div>
                  <div className="card-body">
                    <form noValidate onSubmit={this.props.handleSubmit}>
                      <div className="form-group">
                        <textarea
                          className="form-control form-control-lg"
                          placeholder="Add Title"
                          name="title"
                          onChange={this.props.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control form-control-lg"
                          placeholder="Add Description"
                          name="description"
                          onChange={this.props.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <ReactQuill
                          theme={'snow'}
                          modules={Modules}
                          onChange={this.props.handleEditor}
                          name="body"
                          placeholder="body"
                        />
                      </div>
                      <button
                        Link
                        to="/articles"
                        type="submit"
                        className="btn btn-dark"
                      >
                        Save
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

NewArticle.propTypes = {
  handleEditor: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default connect()(NewArticle);
