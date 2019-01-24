import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/**
 * renders the landing page.
 */

class Landing extends Component {
  render() {
    return (
      <section id="landing-page" className="flex-grow-1">
        <section id="featured-welcome">
          <div className="home-inner container">
            <div className="row">
              <div className="col-lg-8 d-none d-lg-block marg-lg-zeus">
                <h1 className="display-4 mt-4">
                  Welcome to Authors Haven, <br />
                  Creative at Heart
                </h1>
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-check fa-2x" />
                  </div>
                  <div className="p-4 align-self-end">
                    We’ll deliver the best stories and ideas on the topics you
                    care about most straight to your homepage, app, or inbox.
                  </div>
                </div>

                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-check fa-2x" />
                  </div>
                  <div className="p-4 align-self-end">
                    A customizable reading experience, made just for you.
                  </div>
                </div>

                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-check fa-2x" />
                  </div>
                  <div className="p-4 align-self-end">
                    Ideas and perspectives you won’t find anywhere else.
                  </div>
                </div>
              </div>

              <div className="col-lg-4 my-5">
                <div className="card bg-primary text-center card-form">
                  <div className="card-body">
                    <h3>Become A Member</h3>
                    <p>Create a profile, write &amp; share articles.</p>
                    <p>
                      We’ll deliver the best stories and ideas on the topics you
                      care about most straight to your homepage, app, or inbox.
                    </p>
                    <p>Ideas and perspectives you won’t find anywhere else.</p>
                    <p>A customizable reading experience, made just for you.</p>
                    <p>We believe in feeding minds, not mindless feeds</p>
                    <p>Thousands of Perspectives, One Home.</p>
                    <Link to="/register" className="btn btn-dark mr-1">
                      Get Started
                    </Link>
                    <Link to="#learnmore" className="btn btn-outline-light">
                      Learn More
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

export default Landing;
