import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../../actions/ArticlesActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Articles extends Component {
  componentDidMount() {
    this.props.getArticles();
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
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                      {new Date(post.createdAt).toLocaleDateString()+
                      ' ' + 
                      new Date(post.createdAt).toLocaleTimeString()
                      }
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
    return <div>{postItem}</div>;
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
    article: state.article
  };
};
export default connect(
  mapStateToProps,
  { getArticles: getArticles }
)(Articles);
