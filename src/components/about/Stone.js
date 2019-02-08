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
                          <a href="#">
                            <img
                              src={this.props.src}
                              class="img-responsive"
                              alt="user-image"
                            />
                          </a>
                        </li>
                      </div>
                      <div class="righting-wrap">
                        <li>
                          <a href="#" class="importo">
                            {this.props.text}
                          </a>
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
                          <a href="#">
                            <img
                              src={this.props.src}
                              class="img-responsive"
                              alt="user-image"
                            />
                          </a>
                        </li>
                      </div>
                      <div class="righting-wrap">
                        <li>
                          <a href="#" class="importo">
                            {this.props.text}
                          </a>
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
      </React.Fragment>
    );
  }
}
