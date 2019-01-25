import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBookMarkedArticles } from '../../actions/BookMarkArticleAction';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class BookMarkedArticles extends Component {
  componentDidMount() {
    this.props.getBookMarkedArticles();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newpost) {
      this.props.post.unshift(nextProps.newpost);
    }
  }
  

  render() {
    const postItem = this.props.articles.articles.map(post => (
      <section id="dashboard-page" className="flex-grow-1" key={post.slug}>
        <section id="articles" className="mt-5 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <h4 className="mb-3 display-5">Your Articles</h4>
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                      <i className="far fa-user-circle fa-2x mt-2" /> Jan 25,
                      2019 • 5min
                      {post.createdAt}
                    </h6>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                    <Link to={`/article/${post.slug}`}>
                      <a href="/.." className="card-link">
                        Read More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    ));
    return <div>{postItem}</div>;
  }
}

BookMarkedArticles.propTypes = {
  getSingleArticle: PropTypes.func,
  deleteArticle: PropTypes.func,
  article: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    articles: state.articles,
    article: state.article
  };
};
export default connect(
  mapStateToProps,
  { getBookMarkedArticles: getBookMarkedArticles }
)(BookMarkedArticles);
