import React, { Component } from "react";

export default class Stone extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.direction === "left" ? (
          <div className="row timeline-movement">
            <div className="timeline-badge" />
            <div className="col-sm-6 timeline-item">
              <div className="row">
                <div className="col-sm-11">
                  <div className="timeline-panel credits anim animate fadeInLeft">
                    <ul className="timeline-panel-ul">
                      <div className="lefting-wrap">
                        <li className="img-wraping">
                          <span>
                            <img
                              data-toggle="modal"
                              data-target={`#${this.props.title}`}
                              src={this.props.src}
                              className="img-responsive cursor"
                              alt="history"
                            />
                          </span>
                        </li>
                      </div>
                      <div className="righting-wrap">
                        <li>
                          <p className="importo">{this.props.text}</p>
                        </li>
                      </div>
                      <div className="clear" />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row timeline-movement">
            <div className="timeline-badge center-right" />
            <div className="offset-sm-6 col-sm-6  timeline-item">
              <div className="row">
                <div className="offset-sm-1 col-sm-11">
                  <div className="timeline-panel debits  anim animate  fadeInRight">
                    <ul className="timeline-panel-ul">
                      <div className="lefting-wrap">
                        <li className="img-wraping">
                          <span>
                            <img
                              data-toggle="modal"
                              data-target={`#${this.props.title}`}
                              src={this.props.src}
                              className="img-responsive cursor"
                              alt="history"
                            />
                          </span>
                        </li>
                      </div>
                      <div className="righting-wrap">
                        <li>
                          <p className="importo">{this.props.text}</p>
                        </li>
                      </div>
                      <div className="clear" />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          className="modal fade bd-example-modal-lg"
          tabIndex="-1"
          id={this.props.title}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="container-fluid">
                <img className="img-fluid" src={this.props.src} alt="big" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
