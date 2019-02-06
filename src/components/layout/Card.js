import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Train for Employment</h5>
          <p class="card-text">
            Need job skills? Interested in learning a new skill? Let us help
            you!
          </p>
          <a href="#" class="btn btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
