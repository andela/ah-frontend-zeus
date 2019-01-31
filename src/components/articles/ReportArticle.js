import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reportArticle, getSingleArticle } from '../../actions/ArticlesActions';
import '../../App.scss';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css';

let slug = window.localStorage.getItem('slug');

export class ReportArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getSingleArticle(slug);
  }

  componentWillReceiveProps(nextProps) {
 
    const reason = nextProps.reason;
    const values = {
      reason: reason,
    };
    this.setState(values);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }



  onSubmit(e) {
    e.preventDefault();
    const payload = {
      reason: this.state.reason,
    };
    this.props.reportArticle(slug, payload);
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
                    Report Article
                  </div>
                  <div className="card-body">
                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <textarea
                          className="form-control form-control-lg"
                          placeholder="Add Reason"
                          name="reason"
                          value={this.state.reason}
                          onChange={this.onChange}
                          onBlur={this.validateReport}
                        />
                        <span className="input-errored">
                          {this.state.ReportError}
                        </span>
                      </div>
                      <button type="submit" className="btn btn-dark">
                        Send
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

ReportArticle.propTypes = {
  reportArticle: PropTypes.func.isRequired,
  getSingleArticle: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    article: state
  };
};

export default connect(
  mapStateToProps,
  { reportArticle, getSingleArticle }
)(ReportArticle);
