import React from "react";
import ulemLogo from "../../img/ulem-logo.png";
import signature from "../../img/signature.png";

const ImageModal = ({ id, title, img }) => {
  return (
    <div
      className="modal fade bd-example-modal-lg"
      id={id}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body image-modal">
            <div className="text-center">
              <img className="img-fluid" src={ulemLogo} alt="announcement" />
            </div>
            <p>Dear Partners and Friends,</p>
            <p>
              I hope this correspondence finds you, your family, friends and all
              those you care about safe and healthy.
            </p>
            <p>
              For the protection of our students, staff and community, The Urban
              League of Eastern Massachusetts will remain closed, with our staff
              working remotely until further notice.
            </p>
            <h2>
              Announcing: May is The Urban League of Eastern Massachusetts Month
            </h2>
            <p className="mb-0">
              <span>ULEM Membership & Donation Drive</span> – Founded 100 years
              ago on May 16, 1919, ULEM community support is built on 4 pillars:
              1. Learning & Development 2. Wealth Access 3. Health & Wellness
              and 4. Civic Engagement. As we face COVID-19 together, help us
              continue to Change Lives & Empower Our Community!
            </p>
            <p>
              Go to:{" "}
              <a href="https://theulem.square.site">
                https://theulem.square.site
              </a>
            </p>
            <p className="mb-0">
              <span>#GivingTuesdayNow – May 5th</span> – A second annual Giving
              Tuesday is established to address COVID-19. By making a
              tax-deductible donation to ULEM you will help continue our mission
              beyond COVID-19 of Empowering Communities and Changing Lives.{" "}
            </p>
            <p>
              To give Click:
              <a href="">charity.gofundme./ulemgivingtuesdaynow</a>
            </p>
            <p>
              <span>Grow With Google – May 6th</span> – Learn from Google how to
              manage your business remotely. See our website for more
              information: <a href="https://www.ulem.org">www.ulem.org</a>
            </p>
            <p>
              <span>
                ULEM Young Professionals Network (YPN) General Body Meeting
              </span>
              – May 14th at 6:00pm. Come learn more about YPN and network with
              other talented professionals. For More Information Go To:
              <a href="https://www.facebook.com/YPNULEM">
                www.Facebook.com/YPNULEM
              </a>
            </p>
            <p>
              <span>National Urban League Health Awareness Day</span> – Hosted
              May 16th by The ULEM Guild. Featuring speakers Gregory C. Scott,
              Leadership and Business Development Strategist and Reverend Traci
              Jackson Antoine, ULEM Director of Domestic and Sexual Violence
              Program. Details Coming Soon!!
            </p>
            <p>
              <span>Webinar: The Facts About Unemployment Insurance</span> – May
              20th Presented by the Commonwealth EOLWFD. Details Coming Soon!!
            </p>
            <p>
              <span>
                ULEM Diversity & Inclusion Breakfast: Small Business Restoration
              </span>
              – Mark your calendar for our virtual online 3rd Annual Breakfast,
              May 28th. Join us by donating as a New Member or by sponsoring a
              Virtual Table. Details Coming Soon!!
            </p>
            <h1>COVID-19 Massachusetts & City of Boston Resources</h1>
            <p>
              ULEM believes it is important to stay informed about COVID-19. The
              State of Massachusetts and City of Boston have recently made the
              following announcements:
            </p>
            <h3>Massachusetts</h3>
            <p>
              Gov. Baker signs executive order requiring use of face masks or
              coverings in public.
            </p>
            <p>Gov. Baker extends non-essential business closure until 5/18</p>
            <p>
              Need Work? Nursing Homes and Assisted Living facilities need help.
            </p>
            <p>Visit: Mass.gov/covid-otnw</p>
            <p>
              Gov. Baker announced distribution of 200,000 masks to first
              responders in MA.
            </p>
            <p>Visit: ma.gov/covid-msks</p>
            <p>
              MA extends closure of K-12 schools through the end of school year,
              non-emergency
            </p>
            <p>childcare programs through 6/29.</p>
            <p>Visit: mass.gov/covid-ddju</p>
            <h3>Boston</h3>
            <p>
              All public and private schools in Massachusetts will be closed for
              the remainder of the school year.
              bostonpublicschools.org/coronavirus
            </p>
            <p>
              The city of Boston has created a map with COVID-19 testing sites,
              including community health centers and hospitals. Residents are to
              call ahead to pre-screen and set appointment.
            </p>
            <p>Visit: Boston.gov/coronavirus</p>
            <p>
              City is letting restaurants sell grocery items. To get started
              visit: boston.gov/coronavirus
            </p>
            <p>
              <strong>
                MORE THAN 65% OF BOSTON COVID-19 CASES ARE UNDER 60 YEARS OLD –
                Please stay at home, wash your hands and do not socialize in
                person!!
              </strong>
            </p>
            <p>
              Your generosity is most appreciated, especially in these times.
            </p>
            <p>Warm Regards,</p>
            <img src={signature} alt="signature" />
            <p>J. Keith Motley, PhD</p>
            <p>Consultant & President/CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
