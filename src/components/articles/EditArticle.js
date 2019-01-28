import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editArticle, getSingleArticle } from '../../actions/ArticlesActions';
import '../../App.scss';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css';
import Modules from '../../constants/ActionTypes';
import { toast } from 'react-toastify';
import { SUCCESS, ERROR, WARNING } from '../../constants/ActionTypes';

let slug = window.localStorage.getItem('slug');

export class EditArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
      images: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
    this.notify = this.notify.bind(this);
  }

  componentDidMount() {
    this.props.getSingleArticle(slug);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    
    const {article} = nextProps
    if (article) {
      const body = article.body;
    const title =article.title;
    const description =article.description;
    const images = article.images;
    const values = {
      title: title,
      description: description,
      body: body,
      images: images
    };
    this.setState(values);
    }
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEditor(e) {
    this.setState({
      body: e
    });
  }

  notify(type, message) {
    switch (type) {
      case SUCCESS:
        toast.info(message);
        break;
      case WARNING:
        toast.warning(message);
        break;
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const payload = {
      title: this.state.title,
      description: this.state.description,
      body: this.state.body
    };
    this.props.editArticle(slug, payload);
    this.notify(SUCCESS, 'Article updated');
    let { history } = this.props;
    history.push('/articles');
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
                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <textarea
                          className="form-control form-control-lg"
                          placeholder="Add Title"
                          name="title"
                          value={this.state.title}
                          onChange={this.onChange}
                          onBlur={this.validateTitle}
                        />
                        <span className="input-errored">
                          {this.state.titleError}
                        </span>
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control form-control-lg"
                          placeholder="Add Description"
                          name="description"
                          value={this.state.description}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <ReactQuill
                          theme={'snow'}
                          modules={Modules}
                          value={this.state.body}
                          onChange={this.handleEditor}
                          name="body"
                          placeholder="body"
                        />
                      </div>
                      <button type="submit" className="btn btn-dark">
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

EditArticle.propTypes = {
  editArticle: PropTypes.func.isRequired,
  getSingleArticle: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log(state.articles.article);
  
  return {
    article: state.articles.article
  };
};

export default connect(
  mapStateToProps,
  { editArticle, getSingleArticle }
)(EditArticle);
