import React, { Component } from "react";

export default class Stone extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.direction === "left" ? (
          <div class="row timeline-movement">
            <div class="timeline-badge" />
            <div class="col-sm-6 timeline-item">
              <div class="row">
                <div class="col-sm-11">
                  <div class="timeline-panel credits anim animate fadeInLeft">
                    <ul class="timeline-panel-ul">
                      <div class="lefting-wrap">
                        <li class="img-wraping">
                          <span>
                            <img
                              data-toggle="modal"
                              data-target={`#${this.props.title}`}
                              src={this.props.src}
                              class="img-responsive cursor"
                              alt="history"
                            />
                          </span>
                        </li>
                      </div>
                      <div class="righting-wrap">
                        <li>
                          <p class="importo">{this.props.text}</p>
                        </li>
                      </div>
                      <div class="clear" />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="row timeline-movement">
            <div class="timeline-badge center-right" />
            <div class="offset-sm-6 col-sm-6  timeline-item">
              <div class="row">
                <div class="offset-sm-1 col-sm-11">
                  <div class="timeline-panel debits  anim animate  fadeInRight">
                    <ul class="timeline-panel-ul">
                      <div class="lefting-wrap">
                        <li class="img-wraping">
                          <span>
                            <img
                              data-toggle="modal"
                              data-target={`#${this.props.title}`}
                              src={this.props.src}
                              class="img-responsive cursor"
                              alt="history"
                            />
                          </span>
                        </li>
                      </div>
                      <div class="righting-wrap">
                        <li>
                          <p class="importo">{this.props.text}</p>
                        </li>
                      </div>
                      <div class="clear" />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          class="modal fade bd-example-modal-lg"
          tabindex="-1"
          id={this.props.title}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
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
