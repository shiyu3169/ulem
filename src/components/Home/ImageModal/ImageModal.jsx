import React from "react"

import styles from "./ImageModal.module.css"

import logo from "../../../assets/image/ulem_logo.png"
import signature from "../../../assets/image/signature.PNG"

const ImageModal = ({ id, title }) => {
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
          <div className={styles.modalBody}>
            <div className={styles.logoContainer}>
              <img src={logo} className={styles.logo} alt="ulem logo" />
            </div>
            <p>Dear Partners and Friends,</p>
            <p>
              I hope this correspondence finds you and yours safe and healthy.
            </p>
            <p>
              After 5 months of closure for the protection of our students,
              staff and the community The Urban League of Eastern Massachusetts
              plans to re-open in September. We are fortunate to have a
              world-class health system in Greater Boston and the very best
              minds in public health guiding our efforts.
            </p>
            <p>
              Based on this guidance, we have been developing our September
              re-opening plan, rooted in four pillars:
            </p>
            <ol>
              <li>Testing Tracing and Tracking</li>
              <li>Cleaning and Disinfecting</li>
              <li>Protecting Personal Space</li>
              <li>Vaccinating</li>
            </ol>
            <p>
              The Board of Directors and administrative leadership will continue
              to monitor the COVID-19 safety and health conditions and base
              decisions first and foremost on the well being of students, staff
              and the community served by ULEM.
            </p>
            <h1 className={styles.header}>COVID-19 MA & Boston Resources</h1>
            <p>
              ULEM believes it is important to stay informed about COVID-19.
              Here are some of the most recent MA state and City of Boston
              updates and resources.
            </p>
            <p>
              Boston - The deadline to complete the U.S. Census is now September
              30th. The U.S. Census will play a key role in providing relief for
              our small business owners, renters and healthcare centers. Filling
              out the 2020 Census ensures Boston gets its far share of billions
              of federal dollars to better recover from COVID-19. Go to:
              <a
                target="_blank"
                href="2020census.gov"
                rel="noopener noreferrer"
              >
                2020census.gov
              </a>{" "}
              or call (844) 330-2020 to respond now.
            </p>
            <p>
              Boston – To support Black and Brown owned Businesses in Boston,
              the City has a new directory to encourage residents to patronize
              black and brown businesses. Go to: Supporting{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.boston.gov/departments/small-business-development/supporting-black-and-brown-owned-businesses"
              >
                Black-and Brown-owned businesses
              </a>
            </p>
            <p>
              Boston has 20 COVID-19 testing sites available to those
              experiencing symptoms and their close contacts. Go to:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.boston.gov/departments/public-health-commission/map-covid-19-testing-sites"
              >
                Map of COVID-19 testing sites
              </a>
            </p>
            <p>
              Boston – Starting July 6th (97) youth meal sites opened throughout
              the City of Boston as part of the Summer Eats 2020 Program. Go to:
              <a href="https://www.boston.gov/departments/food-access/summer-eats">
                Boston Summer Eats Program
              </a>
            </p>
            <p>
              MA/Boston – Phase 3, Step 1 of the state’s reopening plan began
              Monday 7/6, except for Boston, where it began on Monday 7/13. Go
              to:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mass.gov/info-details/covid-19-updates-and-information"
              >
                COVID-19 Updates and Info
              </a>
            </p>
            <p>
              MA – MA launches stop the spread initiative, providing targeted
              free testing in 8 communities. Go to:{" "}
              <a
                href="http://mass.gov/covid-stopthespread"
                target="_blank"
                rel="noopener noreferrer"
              >
                mass.gov/covid-stopthespread
              </a>
            </p>
            <p>
              Boston- The City of Boston has created the Reopen Boston Fund to
              help small businesses purchase PPE and other safety tools. Go to:
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.boston.gov/departments/small-business-development/reopen-boston-fund"
              >
                Reopen Boston Fund
              </a>
            </p>
            <p>
              Boston – Buoy Health has created a free, online COVID-19 symptom
              assessment. For more information, go to:
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://bouy.com/mass"
              >
                bouy.com/mass
              </a>
            </p>
            <p>
              Boston – Ticketing enforcement during street sweeping operations
              will resume on Monday, August 10th in Boston. As part of the
              announcement, the Boston Transportation Department (BTD) will not
              tow vehicles until further notice. Residents can sign up for
              street sweeping alerts at:{" "}
              <a
                href="http://boston.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                boston.gov
              </a>
            </p>
            <p>
              MA – Travel Order Update: Rhode Island is no longer listed as a
              lower-risk state, specified in the MA Travel Order announced as
              effective August 1. Learn more:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mass.gov/info-details/covid-19-travel-order"
              >
                COVID-19 Travel Order
              </a>
            </p>
            <p>
              Boston – Boston’s pop-up COVID-19 testing site in partnership with
              the East Boston Neighborhood Health Center will now be located in
              South Boston starting Wednesday, August 5th to Saturday, August
              15th. No cost or appointment for symptomatic or asymptomatic but
              must register for results. To pre-register call: (617) 568-4500.
            </p>
            <p>
              Your generosity is most appreciated at this time. To give go to:
              <a
                href="https://theulem.square.site/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://theulem.square.site
              </a>
            </p>
            <p>Warm Regards,</p>
            <img className={styles.signature} src={signature} alt="signature" />
            <h2 className={styles.ceoName}>J. Keith Motley, PhD</h2>
            <h2 className={styles.ceoName}>Consultant & President/CEO</h2>
            <p>
              Download and View our 3rd Annual Equal Opportunity and Diversity
              Breakfast at:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://spaces.hightail.com/receive/LqQvI7LOk1"
              >
                https://spaces.hightail.com/receive/LqQvI7LOk1
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageModal
