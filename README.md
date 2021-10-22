<p>
<img title="Lazerpay" src="https://drive.google.com/file/d/1pNCrFGdueMCspyAFfVzwhQ3X8QnCtRFM/view?usp=sharing" />
</p>
# Lazerpay v1 NodeJS SDK

### How to use

`npm install lazerpay-node-sdk`

```javascript
const LazerPay = require('lazerpay-node-sdk');

const lazerpay = new LazerPAY(API_KEY);
```

For staging, Use TEST API Keys and for production, use LIVE API KEYS.
You can get your API_KEYS from the Lazerpay dashboard.

## Lazerpay Methods exposed by the sdk

**1**. **PAYMENT**

    * Initialize Payment
    * Confirm Payments

#### `Initialize Payment`

This describes to allow your customers to initiate a crypto payment transfer.

```javascript
const LazerPay = require('lazerpay-node-sdk');

const lazerpay = new LazerPAY(API_KEY);

const payment_tx = async () => {
  try {
    const transaction_payload = {
      customer_name: 'Njoku Emmanuel',
      customer_email: 'kalunjoku123@gmail.com',
      amount: '10',
      coin: 'USDC',
    };

    const response = await lazer.Payment.initializePayment(transaction_payload);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

#### `Confirm Payment`

This describes to allow you confirm your customers transaction after payment has been made.

```javascript
const LazerPay = require('lazerpay-node-sdk');

const lazerpay = new LazerPAY(API_KEY);

const confirm_tx = async () => {
  try {
    const payload = {
      address: 'address generated from initializing payment',
    };

    const response = await lazer.Payment.confirmPayment(payload);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```
