import React, { Component } from "react";
import centennial from "../../img/logo.PNG";
import { Link } from "react-router-dom";
import centennialForm from "../../download/Centennial_SponsorshipOpportunities+ReplyForm-toFill.pdf";
export default class CentennialIntro extends Component {
  render() {
    return (
      <div className="container">
        <img
          src={centennial}
          alt="centennial"
          className="img-fluid cursor center"
        />
        <h1 className="ulem-text-primary mt-4">100 YEARS IN THE MAKING</h1>
        <section className="mt-5">
          <h3>
            THE URBAN LEAGUE OF EASTERN MA IS CELEBRATING 100 YEARS OF SERVING
            METROPOLITIAN BOSTON
          </h3>
          <p>
            One hundred years ago, local business and civic leaders of diverse
            backgrounds and ethnicity created what was known as the Boston Urban
            League. In 1919, the League brought together individuals that were
            doing similar work to share in one large appeal to help individuals
            move from dependency to self-sufficiency. While our role in the
            community has not changed throughout the years, we continue to bring
            together the resources to thousands of individuals and families
            seeking to live out the American Dream of life, liberty and the
            pursuit of happiness. This historic centennial offers an
            unparalleled opportunity to commemorate a milestone of the civil
            rights movement and to explore its relevance to the issues of
            diversity and inclusion today.
          </p>
          <p>For more information download the sponsorship packet below:</p>
          <a href={centennialForm} download>
            Download
          </a>
        </section>
        <section className="mt-5">
          <h3>OUR HISTORY</h3>
          <p>
            A lot has happened at Urban League of Eastern MA and in our
            community over the past 100 years.{" "}
            <Link to="/centennial">Click here</Link> to see a timeline of what
            we’ve accomplished together.
          </p>
        </section>
        <section class="mt-5">
          <h3>CELEBRATE WITH US</h3>
          <p>
            We have a lot of reasons to celebrate this year!{" "}
            <Link to="/events">Click here</Link> to see our all our events.
          </p>
        </section>
      </div>
    );
  }
}
