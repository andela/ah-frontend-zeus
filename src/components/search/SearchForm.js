
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

 export const inputStyleDisplay = type => {
  if (type) {
    return "displayBlock";
  } else {
    return "displayNone";
  }
};
export class SearchForm extends Component {
  state = {
    searchData: "",
    type: ""
  };

   onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

   onSubmit = e => {
    const type = this.state.type;
    const searchData = this.state.searchData;
    this.props.history.push(`/searchresults/${type}/${searchData}`);
  };

   setFormState = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

   submitButton() {
    return (
      <div>
        <button type="submit" className="submitButton">
          <span id= "mainSearch" className="search-word">Submit</span>
        </button>
      </div>
    );
  }
  inputForm() {
    return (
      <input
        type="text"
        placeholder="Search"
        onChange={this.onChange}
        value={this.state.searchData}
        id="searchData"
        className="search"
        name="searchData"
      />
    );
  }
  render() {
    return (
      <div className="">
        <form onSubmit={this.onSubmit} className="form-inline">
          <div className="">
            <select
              className="type"
              id="type"
              name="type"
              onChange={this.setFormState}
              value={this.state.type}
            >
              <option>Select</option>
              <option value="title">Title</option>
              <option value="tag">Tag</option>
              <option value="author">Author</option>
            </select>
          </div>
          {this.inputForm()}
          {this.submitButton()}
        </form>
      </div>
    );
  }
}

 export default withRouter(SearchForm);
