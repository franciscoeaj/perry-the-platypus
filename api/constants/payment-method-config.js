// PagSeguro WebService configuration
const paymentMethodConfigs = {
  PS_REQUEST_PROTOCOL: "https",
  PS_REQUEST_HOST: "ws.sandbox.pagseguro.uol.com.br"
};

const paymentMethodApiEndpoints = {
  checkout: "/v2/checkout"
};

module.exports = {
  endpoints: paymentMethodApiEndpoints,
  constants: paymentMethodConfigs
};
