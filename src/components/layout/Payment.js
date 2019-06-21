import React, { Component } from 'react';
import SquarePaymentForm, {
  CreditCardNumberInput,
  CreditCardExpirationDateInput,
  CreditCardPostalCodeInput,
  CreditCardCVVInput,
  CreditCardSubmitButton,
  MasterpassButton
} from 'react-square-payment-form';
import 'react-square-payment-form/lib/default.css';
import Axios from 'axios';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessages: []
    };
  }

  createPaymentRequest() {
    return {
      requestShippingAddress: false,
      requestBillingInfo: true,
      currencyCode: 'USD',
      countryCode: 'US',
      total: {
        label: 'MERCHANT NAME',
        amount: '1',
        pending: false
      },
      lineItems: [
        {
          label: 'Subtotal',
          amount: '1',
          pending: false
        }
      ]
    };
  }

  cardNonceResponseReceived = (errors, nonce, cardData) => {
    if (errors) {
      this.setState({ errorMessages: errors.map(error => error.message) });
      return;
    }
    this.setState({ errorMessages: [] });
    // alert('nonce created: ' + nonce);
    Axios.post('/api/payments', { nonce: nonce });
  };

  render() {
    const loadingView = <div className='sq-wallet-loading' />;
    const unavailableView = (
      <div className='sq-wallet-unavailable'>Unavailable</div>
    );
    return (
      <div className='container'>
        <h1>Payment Page</h1>
        <SquarePaymentForm
          applicationId='sandbox-sq0idp-OfqC0M7Zle4IW-veWzvVlQ'
          locationId='CBASEMKYs1pNXgCZcvdmuOUXd_MgAQ'
          cardNonceResponseReceived={this.cardNonceResponseReceived}
          createPaymentRequest={this.createPaymentRequest}
        >
          <fieldset className='sq-fieldset'>
            <CreditCardNumberInput />
            <div className='sq-form-third'>
              <CreditCardExpirationDateInput />
            </div>

            <div className='sq-form-third'>
              <CreditCardPostalCodeInput />
            </div>

            <div className='sq-form-third'>
              <CreditCardCVVInput />
            </div>
          </fieldset>

          <CreditCardSubmitButton>Pay with Credit Card</CreditCardSubmitButton>
          <br />
          <MasterpassButton
            loadingView={loadingView}
            unavailableView={unavailableView}
          />
        </SquarePaymentForm>
        <div className='sq-error-message'>
          {this.state.errorMessages.map(errorMessage => (
            <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
          ))}
        </div>
      </div>
    );
  }
}
