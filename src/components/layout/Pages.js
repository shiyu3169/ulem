import React, { Component } from "react";

export default class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: 10
    };
  }

  countPages = async () => {
    await this.setState({
      pages: Math.ceil(this.props.length / 20)
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.length !== prevProps.length) {
      this.countPages();
    }
  }

  componentDidMount() {
    this.countPages();
  }

  handleClick = page => {
    this.props.changePage(page);
  };

  createList() {
    const ul = [];
    if (this.props.page !== 1) {
      ul.push(
        <React.Fragment key={1}>
          <li className="list-inline-item">
            <span className="cursor" onClick={this.handleClick.bind(this, 1)}>
              1
            </span>
          </li>
          {this.props.page - 3 > 1 && <span className="mr-2">......</span>}
        </React.Fragment>
      );
    }
    // Add Pages Before
    if (this.props.page - 2 > 1) {
      ul.push(
        <React.Fragment key={this.props.page - 2}>
          <li className="list-inline-item">
            <span
              className="cursor"
              onClick={this.handleClick.bind(this, this.props.page - 2)}
            >
              {this.props.page - 2}
            </span>
          </li>
          <li className="list-inline-item">
            <span
              className="cursor"
              onClick={this.handleClick.bind(this, this.props.page - 1)}
            >
              {this.props.page - 1}
            </span>
          </li>
        </React.Fragment>
      );
    } else if (this.props.page - 1 > 1) {
      ul.push(
        <li key={this.props.page - 1} className="list-inline-item">
          <span
            className="cursor"
            onClick={this.handleClick.bind(this, this.props.page - 1)}
          >
            {this.props.page - 1}
          </span>
        </li>
      );
    }
    // Add current page
    ul.push(
      <li key={this.props.page} className="list-inline-item">
        <span
          className="cursor"
          onClick={this.handleClick.bind(this, this.props.page)}
        >
          <strong>{this.props.page}</strong>
        </span>
      </li>
    );
    // Add Pages After
    if (this.props.page + 1 <= this.state.pages) {
      ul.push(
        <li key={this.props.page + 1} className="list-inline-item">
          <span
            className="cursor"
            onClick={this.handleClick.bind(this, this.props.page + 1)}
          >
            {this.props.page + 1}
          </span>
        </li>
      );
    }
    if (this.props.page + 2 <= this.state.pages) {
      ul.push(
        <li key={this.props.page + 2} className="list-inline-item">
          <span
            className="cursor"
            onClick={this.handleClick.bind(this, this.props.page + 2)}
          >
            {this.props.page + 2}
          </span>
        </li>
      );
    }
    if (this.props.page + 3 <= this.state.pages) {
      ul.push(
        <React.Fragment key={this.state.pages}>
          <span className="mr-2">......</span>
          <li key={this.state.pages} className="list-inline-item">
            <span
              className="cursor"
              onClick={this.handleClick.bind(this, this.state.pages)}
            >
              {this.state.pages}
            </span>
          </li>
        </React.Fragment>
      );
    }
    return ul;
  }

  render() {
    return (
      <div className="text-center">
        <span>Pages</span>
        <ul className="list-inline">{this.createList()}</ul>
      </div>
    );
  }
}
