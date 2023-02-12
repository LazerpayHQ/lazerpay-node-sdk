export const API_URL = 'https://api.lazerpay.engineering/api/v1';

export const API_URL_INIT_TRANSACTION = `${API_URL}/transaction/initialize`;
export const API_URL_CONFIRM_TRANSACTION = `${API_URL}/transaction/verify`;
export const API_URL_GET_ACCEPTED_COINS = `${API_URL}/coins`;
export const API_URL_TRANSFER_FUNDS = `${API_URL}/crypto/payouts/initiate`;
export const API_URL_PAYMENT_LINK = `${API_URL}/payment-links`;
export const API_URL_CRYPTO_SWAP = `${API_URL}/swap/crypto`;
export const API_URL_GET_CRYPTO_AMOUNT_OUT = `${API_URL}/swap/crypto/amount-out`;
export const API_URL_GET_WALLET_BALANCE = `${API_URL}/wallet/balance`;

export const API_URL_GET_ONRAMP_RATE = `${API_URL}/bank/funding/rate`;
export const API_URL_INITIATE_ONRAMP = `${API_URL}/bank/funding/initiate`;
export const API_URL_GET_ONRAMP_ACCOUNTS = `${API_URL}/bank/funding/accounts`;
