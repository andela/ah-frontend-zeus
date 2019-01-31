import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  getSingleArticle,
  deleteArticle,
  likeArticle,
  dislikeArticle
} from '../../actions/ArticlesActions';
import { SUCCESS, WARNING } from '../../constants/ActionTypes';
import { readingTime } from './ReadTime';
import { fetchPosts } from '../../actions/PostActions';
import { createPost } from '../../actions/PostActions';

export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      body: ''
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.notify = this.notify.bind(this);
    this.getComments = this.getComments.bind(this);
    this.postComments = this.postComments.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDislikeClick = this.onDislikeClick.bind(this);
    this.onLikeClick = this.onLikeClick.bind(this);
  }

  componentWillMount() {
    this.props.getSingleArticle(this.props.slug);
    this.props.fetchPosts(this.props.slug);
  }

  componentWillReceiveProps(nextProps) {
    window.localStorage.setItem('slug', this.props.slug);
   
    if (nextProps.likeResults != this.state.likeResults) {
      this.props.getSingleArticle(this.props.slug);
    }
    this.setState({ likeResults: nextProps.likeResults });

    const { article } = nextProps;
    if (article) {
      this.setState({
        article: article
      });
    }
    if (nextProps.newpost && nextProps.posts) {
      nextProps.posts.unshift(nextProps.newpost);
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      comment_body: this.state.body
    };
    this.props.createPost(this.props.slug, post), this.setState({ body: '' });
  }

  onLikeClick(e) {
    this.props.likeArticle(this.props.slug);
  }

  onDislikeClick(e) {
    this.props.dislikeArticle(this.props.slug);
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
  getComments() {
    this.props.fetchPosts(this.props.slug);
  }
  postComments() {
    this.props.createPost(this.props.slug);
  }

  render() {
    let postComments;
    if (this.props.posts) {
      postComments = this.props.posts.map(post => {
        if (post.id) {
          return (
            <div className="card m-lg-2" key={post.id}>
              <div className="card-body">
                <h3 className="card-title">{post.author}</h3>
                <p>{post.comment_body}</p>
                <h4>
                  {new Date(post.created_at).toLocaleDateString() +
                    ' ' +
                    new Date(post.created_at).toLocaleTimeString()}
                </h4>
              </div>
            </div>
          );
        }
      });
    }

    return (
      <div>
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
                          ).toLocaleTimeString() +
                          ' ' +
                          readingTime(`${this.state.article.body}`)}
                      </h6>
                    <h5 className="card-title">{this.state.article.title}</h5>
                    <p className="card-text">
                      {this.state.article.description}
                    </p>
                    <p className="card-text">
                      {renderHTML(`${this.state.article.body}`)}
                    </p>
                    <button
                      type="button"
                      className="btn btn-light mr-1"
                      onClick={this.onLikeClick}
                    >
                      <i className="text-info fas fa-thumbs-up" />
                      <span className="badge badge-light">
                        {this.state.article.likes}
                      </span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-light mr-1"
                      onClick={this.onDislikeClick}
                    >
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
                              slug: this.props.slug
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
        <section id="dashboard-page" className="flex-grow-1">
          <section id="articles" className="mt-5 mb-2">
            <div className="container">
              <div className="row">
                <div className="col-md-10 m-auto">
                  <div className="card mb-3">
                    <div className="card-header">
                      <h5 align="center" className="card-title">
                        comment on an article
                      </h5>
                    </div>
                    <div className="card-body">
                      <form onSubmit={this.onSubmit}>
                        <div>
                          <label>Please give your response </label>
                          <br />
                          <textarea
                            className="form-row"
                            name="body"
                            onChange={this.onChange}
                            value={this.state.body}
                          />
                        </div>
                        <br />
                        <button className="button" type="submit">
                          comment
                        </button>
                      </form>
                    </div>
                    <div className="card-footer">{postComments}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

Article.propTypes = {
  getSingleArticle: PropTypes.func,
  deleteArticle: PropTypes.func,
  dislikeArticle: PropTypes.func,
  likeArticle: PropTypes.func,
  article: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired,
  slug: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {

  return {
    articles: state.articles,
    article: state.articles.article,
    slug: ownProps.slug,
    author: state.articles.article.author,
    posts: state.posts.comments.comments,
    newpost: state.posts.comment,
    likeResults: state.articles.likeResults
  };
};

export default connect(
  mapStateToProps,
  { getSingleArticle, createPost, deleteArticle, fetchPosts, likeArticle, dislikeArticle  }
)(Article);
