import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../../actions/ArticlesActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { readingTime } from './ReadTime';

export class Articles extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    this.props.getArticles(`${process.env.API_URL}/articles/`);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newpost) {
      this.props.post.unshift(nextProps.newpost);
    }
  }

  next(url) {
    if (url === null) {
      return;
    }
    this.props.getArticles(url);
  }

  render() {
    // console.log(this.props.nextPage)
    const postItem = this.props.articles.articles.map(post => (
      <section id="dashboard-page" className="flex-grow-1" key={post.slug}>
        <section id="articles" className="mt-5 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                      {new Date(post.createdAt).toLocaleDateString() +
                        ' ' +
                        readingTime(`${post.body}`)}
                    </h6>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                    <Link to={`/article/${post.slug}`} className="card-link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    ));
    return (
      <div>
        {postItem}
        <div className="container d-flex flex-row justify-content-end mb-3">
          <button
            id="previousPage"
            className="btn btn-dark mr-1"
            disabled={this.props.previousPage === null ? true : false}
            onClick={() => this.props.getArticles(this.props.previousPage)}
          >
            Prev
          </button>
          <button
            id="nextPage"
            className="btn btn-dark"
            disabled={this.props.nextPage === null ? true : false}
            onClick={() => this.next(this.props.nextPage)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

Articles.propTypes = {
  getSingleArticle: PropTypes.func,
  deleteArticle: PropTypes.func,
  articles: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    articles: state.articles,
    article: state.article,
    nextPage: state.articles.nextPage,
    previousPage: state.articles.previousPage
  };
};
export default connect(
  mapStateToProps,
  { getArticles: getArticles }
)(Articles);
