import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { getSingleArticle, deleteArticle } from '../../actions/ArticlesActions';
import { SUCCESS, ERROR, WARNING } from '../../constants/ActionTypes';

export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.notify = this.notify.bind(this);
  }

  componentWillMount() {
    this.props.getSingleArticle(this.props.slug);
  }

  componentWillReceiveProps(nextProps) {
    window.localStorage.setItem('slug', this.props.slug);
    if (nextProps.article) {
      this.setState({
        article: nextProps.article
      });
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteArticle(this.props.slug);
    this.notify(WARNING, 'Article deleted');
    let { history } = this.props;
    history.push('/articles');
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

  render() {
    return (
      <section id="dashboard-page" className="flex-grow-1">
        <section id="articles" className="mt-5 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                      <i>
                        <img
                          className="img-thumbnail rounded-circle mr-3"
                          width="100px"
                          height="100px"
                          src={
                            this.props.article && this.props.article.author
                              ? this.props.article.author.photo
                              : ''
                          }
                          alt="No image"
                        />
                      </i>
                      {new Date(
                        this.state.article.createdAt
                      ).toLocaleDateString() +
                        ' ' +
                        new Date(
                          this.state.article.createdAt
                        ).toLocaleTimeString()}
                    </h6>
                    <h5 className="card-title">{this.state.article.title}</h5>
                    <p className="card-text">
                      {this.state.article.description}
                    </p>
                    <p className="card-text">
                      {renderHTML(`${this.state.article.body}`)}
                    </p>
                    <button type="button" className="btn btn-light mr-1">
                      <i className="text-info fas fa-thumbs-up" />
                      <span className="badge badge-light">
                        {this.state.article.likes}
                      </span>
                    </button>
                    <button type="button" className="btn btn-light mr-1">
                      <i className="text-secondary fas fa-thumbs-down" />
                      <span className="badge badge-light">
                        {this.state.article.dislikes}
                      </span>
                    </button>
                    <Link to="/articles">
                      <button
                        onClick={this.handleDelete}
                        type="button"
                        className="btn btn-danger mr-1"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </Link>
                    <Link to="/article/edit">
                      <button
                        className="btn btn-info mr-1"
                        onClick={() =>
                          this.props.dispatch({
                            type: 'EDIT_ARTICLE',
                            slug: this.props.post.slug
                          })
                        }
                      >
                        <i className="far fa-edit" />
                      </button>
                    </Link>
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

Article.propTypes = {
  getSingleArticle: PropTypes.func,
  deleteArticle: PropTypes.func,
  article: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired,
  slug: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.articles,
    article: state.articles.article,
    slug: ownProps.match.params.slug,
    author: state.articles.article.author
  };
};

export default connect(
  mapStateToProps,
  { getSingleArticle, deleteArticle }
)(Article);
