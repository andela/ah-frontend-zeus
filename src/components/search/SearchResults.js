import React, { Component } from "react";
import { connect } from "react-redux";
import getSearchData from "../../actions/getSearchDataAction";
import { Link } from "react-router-dom";

 export const onClickHandler = (slug) => event => {
  localStorage.setItem("slug", slug);
  
};

 export class SearchResults extends Component {
  componentDidMount() {
    this.props.getSearchData(
      this.props.match.params.type,
      this.props.match.params.searchData
    );
  }
  fetchedArticles = ( slug, updatedAt, title, description) => {
    return (
      <div className="card-body">
        <Link
          to={`/article/${slug}`}
          id="articleResult"
          date="articleResult"
          onClick={onClickHandler(slug)}
        >
          <h4 className="card-title">{title}</h4>
        </Link>
        <p className="card-text">
          <b>Published</b>: {updatedAt}
        </p>
        <p className="card-text">
          <b></b>{description}
        </p>
      </div>
    );
  };
  searchReturnedData() {
    return Array.from(this.props.searchResults).map(data => (
      <div key={data.slug}>
        <main id="articles" className="mt-5 mb-2">
          <div className="container">
            <section className="articles">
              <div className="">
                <div className="card">
                  {this.fetchedArticles(
                    data.slug,
                    data.updatedAt,
                    data.title,
                    data.description,
                  )}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    ));
  }
  ArticleNotFound() {
    return (
      <div >
        <h3>Oops..... No Articles Found</h3>
      </div>
    );
  }

   render() {
    if (this.props.searchResults.length === undefined) {
      return (
        <div className="preloader">
          <img src="https://res.cloudinary.com/dksxmwjqs/image/upload/v1544619488/em3oq7jnnea8bsqkets3.gif" />
        </div>
      );
    } else if (
      this.props.searchResults.length !== undefined && this.props.searchResults.length !== 0
    ) {
      return <div className="articleFound flex-grow-1">{this.searchReturnedData()}</div>;
    } else {
      return <div className="articleNotFound flex-grow-1">{this.ArticleNotFound()}</div>;
    }
  }
}

 export const mapStateToProps = state => ({
  searchResults: state.search.items
});
export default connect(
  mapStateToProps,
  { getSearchData }
)(SearchResults);
