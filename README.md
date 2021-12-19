<p>
<img title="Lazerpay" src="https://raw.githubusercontent.com/LazerPay-Finance/website/master/public/images/logo-blue-variant.svg?token=AJHZVGPDKXS5ZPZ5FFLGYJ3BPP7ZM" />
</p>
# Lazerpay v1 NodeJS SDK

### How to use

`npm install lazerpay-node-sdk`

```javascript
const LazerPay = require('lazerpay-node-sdk');

const lazerpay = new LazerPay(LAZER_PUBLIC_KEY);
```

For staging, Use TEST API Keys and for production, use LIVE API KEYS.
You can get your LAZER_PUBLIC_KEYS from the Lazerpay dashboard.

## Lazerpay Methods exposed by the sdk

**1**. **PAYMENT**

    * Initialize Payment
    * Confirm Payments

#### `Initialize Payment`

This describes to allow your customers to initiate a crypto payment transfer.

```javascript
const LazerPay = require('lazerpay-node-sdk');

const lazerpay = new LazerPay(LAZER_PUBLIC_KEY);

const payment_tx = async () => {
  try {
    const transaction_payload = {
      customer_name: 'Njoku Emmanuel',
      customer_email: 'kalunjoku123@gmail.com',
      coin: 'USDC',
      currency: 'NGN',
      fiatAmount: '10',
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

const lazerpay = new LazerPay(LAZER_PUBLIC_KEY, LAZER_SECRET_KEY);

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

#### `Get Accepted Coins`

This gets the list of accepted cryptocurrencies on Lazerpay

```javascript
const LazerPay = require('lazerpay-node-sdk');

const lazerpay = new LazerPay(LAZER_PUBLIC_KEY);

const get_accepted_coins = async () => {
  try {
    const response = await lazer.Payment.getAcceptedCoins();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```
