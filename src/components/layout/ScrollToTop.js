import { Component } from "react";
import { withRouter } from "react-router-dom";
import $ from "jquery";
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location !== prevProps.location &&
      this.props.location.pathname === "/centennial"
    ) {
      $("html, body").animate(
        { scrollTop: $(document).height() - $(window).height() },
        1500,
        function() {
          $(this).animate({ scrollTop: 0 }, 1500);
        }
      );
    } else if (this.props.location !== prevProps.location) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
