import React, { Component } from 'react';
import ulem100 from '../../img/ulem100.png';
import united_way from '../../img/united_way.jpg';
import southwest from '../../img/southwest.png';
import { HashLink as Link } from 'react-router-hash-link';
import tsn from '../../img/tsn.jpg';
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='ulem-bg-primary' id='footer-line' />
        <div className='container-fluid'>
          <div className='row mt-4'>
            <div className='col-lg-2 text-center mt-5 m-lg-0'>
              <Link to='/centennial'>
                <img
                  src={ulem100}
                  className='img-fluid p-4'
                  id='footer-img-height'
                  alt=''
                />
              </Link>
            </div>
            <div className='col-lg-1' />
            <div className='col-lg-2 text-center text-lg-left my-5 m-lg-0'>
              <h5 className='font-weight-bold text-uppercase my-4  '>About</h5>
              <ul className='list-unstyled'>
                <li>
                  <p>
                    <Link className='text-dark' to='/about'>
                      Missions & Overview
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link className='text-dark' to='/centennial'>
                      Our Milestones
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link className='text-dark' to='/leadership'>
                      Leadership
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link className='text-dark' to='/board'>
                      Board of Directors
                    </Link>
                  </p>
                </li>
              </ul>
            </div>

            <div className='col-lg-2 text-center text-lg-left mb-5 mb-lg-0'>
              <h5 className='font-weight-bold text-uppercase my-4 '>Address</h5>
              <ul className='list-unstyled'>
                <li>
                  <p>
                    <i className='fas fa-home mr-3' /> 88 Warren Street,
                    Roxbury, MA 02119
                  </p>
                </li>
                <li>
                  <p>
                    <i className='fas fa-envelope mr-3' /> info@ulem.org
                  </p>
                </li>
                <li>
                  <p>
                    <i className='fas fa-phone mr-3' /> 617 442 4519
                  </p>
                </li>
                <li>
                  <p>
                    <i className='fas fa-print mr-3' /> 617 442 0562
                  </p>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 text-center mb-5 mb-lg-0'>
              <h5 className='font-weight-bold text-uppercase my-4 '>
                Community Sponsor
              </h5>
              <div className='logos'>
                <div className='d-flex justify-content-center'>
                  <a
                    target='_blank'
                    href='https://www.unitedway.org/local/united-states/massachusetts'
                    rel='noopener noreferrer'
                  >
                    <img
                      src={united_way}
                      className='img-fluid'
                      alt='United Way'
                    />
                  </a>

                  <a
                    target='_blank'
                    href='https://www.timothysmithnetwork.org/'
                    rel='noopener noreferrer'
                  >
                    <img src={tsn} className='img-fluid' alt='TSN' />
                  </a>
                </div>
                <h5 className='font-weight-bold text-uppercase my-4 '>
                  Official Airline
                </h5>
                <a
                  target='_blank'
                  href='https://www.southwest.com/'
                  rel='noopener noreferrer'
                >
                  <img
                    src={southwest}
                    className='img-fluid px-3 pb-3'
                    alt='Southwest'
                  />
                </a>
              </div>
            </div>
            <div className='col-lg-2 text-center'>
              <h5 className='font-weight-bold text-uppercase my-4'>
                Follow Us
              </h5>
              <div className='row'>
                <div className='col-lg-6 text-center mb-5'>
                  <a
                    href='https://www.facebook.com/theulem/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-facebook fa-3x text-dark' />
                  </a>
                </div>
                <div className='col-lg-6 text-center mb-5'>
                  <a
                    href='https://twitter.com/theULEM'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-twitter-square fa-3x text-dark' />
                  </a>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6 text-center mb-5'>
                  <a
                    href='https://www.linkedin.com/company/urban-league-of-eastern-massachusetts/about/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-linkedin fa-3x text-dark' />
                  </a>
                </div>
                <div className='col-lg-6 text-center mb-5'>
                  <a
                    href='https://www.instagram.com/theulem/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-instagram fa-3x text-dark' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center'>&copy; 2019 Copyright: ULEM</div>
      </footer>
    );
  }
}
