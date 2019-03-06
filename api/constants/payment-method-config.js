// PagSeguro WebService configuration
const paymentMethodConfigs = {
  PS_REQUEST_PROTOCOL: "https",
  PS_REQUEST_HOST: "sandbox.pagseguro.uol.com.br"
};

const paymentMethodApiEndpoints = {
  checkout: "v2/checkout",
  notifications: "v3/transactions/notifications"
};

module.exports = {
  endpoints: paymentMethodApiEndpoints,
  constants: paymentMethodConfigs
};
