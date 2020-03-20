import React from 'react';

const ImageModal = ({ id, title, img1, img2 }) => {
  return (
    <div
      className='modal fade bd-example-modal-lg'
      id={id}
      tabIndex={-1}
      role='dialog'
      aria-labelledby='exampleModalCenterTitle'
      aria-hidden='true'
    >
      <div
        className='modal-dialog modal-dialog-centered modal-lg'
        role='document'
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{title}</h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>×</span>
            </button>
          </div>
          <div className='modal-body'>
            <img src={img1} alt='Centennial Gala' className='img-fluid' />
            <img src={img2} alt='Centennial Gala' className='img-fluid' />
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
  );
};

export default ImageModal;
