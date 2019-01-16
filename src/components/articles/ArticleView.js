import React from 'react';
import { connect } from 'react-redux';
import NewArticle from './NewArticle';
import { addArticle } from '../../actions/ArticlesActions';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SUCCESS, ERROR, WARNING } from '../../constants/ActionTypes';

export class ArticleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
      author: {},
      images: [],
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
    this.notify = this.notify.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
    if (newProps.success) {
      this.notify(SUCCESS, 'Article saved');
      //redirect
      let { history } = this.props;
      history.push('/articles');
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEditor(e) {
    this.setState({ body: e });
  }

  handleSubmit(e) {
    e.preventDefault();
    const payload = {
      title: this.state.title,
      description: this.state.description,
      body: this.state.body
    };
    this.props.addArticle(payload);
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
      <NewArticle
        handleEditor={this.handleEditor}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        notify={this.notify}
      />
    );
  }
}

ArticleView.propTypes = {
  addArticle: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  errors: PropTypes.object,
  success: PropTypes.object
};

const mapStateToProps = state => {
  return {
    article: state,
    errors: state.articles.errors,
    success: state.articles.success
  };
};

export default connect(
  mapStateToProps,
  { addArticle }
)(ArticleView);
