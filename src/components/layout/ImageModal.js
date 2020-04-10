import React from "react";
import logo from "../../img/modal-logo.jpg";
import mask from "../../img/modal-mask.png";
import signature from "../../img/modal-signature.PNG";

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
          <div className="modal-body">
            <div className="text-center">
              <img src={logo} alt="logo" width="99" class="mb-1" />
            </div>
            <div className="text-center">
              <img src={mask} alt="mask" width="203" class="mb-1" />
            </div>
            <div className="px-5">
              <p className="modal-p">Dear Partners and Friends,</p>
              <p className="modal-p">
                I hope this correspondence finds you, your family & friends and
                all those you care about safe and healthy during these
                unprecedented times of COVID-19.{" "}
              </p>
              <p className="modal-p">
                For the protection of our students, staff and community, The
                Urban League of Eastern Massachusetts, has been closed since
                Thursday, March 12, 2020.
              </p>
              <p className="modal-p">
                Our staff has been working remotely, enabling us to perpetuate
                our mission of overcoming racial & social barriers, economic
                inequities and sexual & domestic violence, while creating
                employment and economic development opportunities.
              </p>
              <h1 className="text-center modal-h1">
                ULEM Update – April 8, 2020
              </h1>
              <p className="modal-p">
                The Board of Directors and administrative leadership have
                evaluated the current situation and decided to take the
                following actions:
              </p>
              <ul className="modal-list">
                <li className="modal-p">
                  Remain closed until Thursday, May 7, 2020 - ULEM staff access
                  only.
                </li>
                <li className="modal-p">
                  Re-Open to the Public Monday, May 11, 2020.
                </li>
                <li className="modal-p">
                  Engage in COVID-19 related service opportunities that support
                  our community.
                </li>
                <li className="modal-p">
                  Switch our classroom workforce development programs to a
                  virtual platform, for the foreseeable future.
                </li>
                <li className="modal-p">
                  Cancel all live events until further notice.
                </li>
                <li className="modal-p">
                  Explore alternative fundraising opportunities in light of
                  social distancing.
                </li>
              </ul>
              <h1 className="text-center modal-h1">
                COVID-19 MA & Boston Resources
              </h1>
              <p className="modal-p">
                ULEM believes it is important to stay informed about COVID-19.
                The State of Massachusetts and City of Boston have created the
                following local resources:
              </p>
              <p className="modal-p">
                <b>Massachusetts:</b>
              </p>
              <p className="modal-p">
                <div>
                  Text Updates - Text: COVIDMA to 888-777 Phone Call: 211 Lost
                </div>
                <div>
                  Work Support Due to Quarantine: 617-727-3465 Community
                  Tracing:
                </div>
                <div>www.mass.gov/covid</div>
              </p>
              <p className="modal-p">
                <b>City of Boston:</b>
              </p>
              <p className="modal-p">
                <div>Text Updates – Text: BOSCOVID to 994-11</div>
                <div>www.Boston.gov/coronavirus</div>
                <div>www.boston.gov/BusinessRelief </div>
              </p>
              <p className="modal-p">
                <b>New Boston Guidelines:</b>
              </p>
              <ul className="modal-list">
                <li className="modal-p">
                  All are urged to wear a mask or cloth face covering while in
                  public
                </li>
                <li className="modal-p">
                  All are to adhere to a 9 pm to 6 am curfew until May 4
                </li>
                <li className="modal-p">
                  City Hall is only open to the public Tuesdays & Fridays, 9 am
                  - 5 pm
                </li>
              </ul>
              <h1 className="text-center modal-h1">
                Announcing ULEM’s Laptops for Learning Fund
              </h1>
              <p className="modal-p">
                As we move to a virtual learning platform in our coding and
                graphic design programs, we recognize that our students come
                from underserved communities, thereby needing laptop computers
                to participate at home.
              </p>
              <p className="modal-p">
                Many of you joined us this January during our Annual Meeting,
                themed “Celebration of Leadership: Preparing Now for the Next
                100 Years”. The support expressed then and now, has been
                overwhelming and inspiring. Although we are all adjusting to
                exceptional pressures and challenges, we want to give you the
                opportunity to inspire our students with the gift of learning.
              </p>
              <p className="modal-p">
                So we are introducing our <b>Laptops for Learning Fund</b>. It
                will allow ULEM to provide laptops and internet service for
                students, who will be able to use them through the duration of
                the program and upon completion return for the next group.{" "}
              </p>
              <p className="modal-p">
                Will you consider giving the gift of learning? Click:{" "}
                <a
                  className="modal-link"
                  target="_blank"
                  href="https://charity.gofundme.com/o/en/campaign/laptops-for-learning"
                >
                  <b>Laptops for Learning</b>
                </a>
              </p>
              <p className="modal-p">
                By making a tax-deductible gift, you will ensure that a
                disadvantaged student will have access to the tools he or she
                needs on the path to changing their future.
              </p>
              <p className="modal-p">
                Your generosity is most appreciated, especially in these times.
              </p>
              <p className="modal-p">Warm Regards,</p>
              <img src={signature} width="169" />
              <p className="modal-p">
                <div>
                  <b>J. Keith Motley, PhD</b>
                </div>
                <div>
                  <b>Consultant & President/CEO</b>
                </div>
              </p>
              {/* <img src={img} alt="Announcement" className="img-fluid" /> */}
            </div>
            {/* <div className='modal-footer'>
            <a
              className='btn btn-lg ulem-btn-primary link-white m-auto'
              href='https://ul100.eventbrite.com/'
            >
              Purchase Ticket Now
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
