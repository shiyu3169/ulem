module.exports = function(app) {
  const squareConnect = require('square-connect');
  const defaultClient = squareConnect.ApiClient.instance;
  const accessToken =
    'EAAAELsddKB3J4eWZZ78db1lvE2raJy5GgL_nJN6qNmgkEH8On7k1sYn7EGutm9p';
  const locationId = 'CBASEMKYs1pNXgCZcvdmuOUXd_MgAQ';
  var oauth2 = defaultClient.authentications['oauth2'];
  oauth2.accessToken = accessToken;

  app.post('/api/payments', (req, res) => {
    const requestParams = req.body;

    const idempotencyKey = require('crypto')
      .randomBytes(64)
      .toString('hex');

    // Charge the customer's card
    const transactionsApi = new squareConnect.TransactionsApi();
    const requestBody = {
      card_nonce: requestParams.nonce,
      amount_money: {
        amount: 100, // $1.00 charge
        currency: 'USD'
      },
      idempotency_key: idempotencyKey
    };
    transactionsApi.charge(locationId, requestBody).then(
      function(data) {
        const json = JSON.stringify(data);
        res.status(200).json({
          title: 'Payment Successful',
          result: json
        });
      },
      function(error) {
        res.status(500).json({
          title: 'Payment Failure',
          result: error.response.text
        });
      }
    );
  });
};
