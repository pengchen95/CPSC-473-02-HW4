(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-payment-info=\"payment\"]";
  var PAYMENT_SELECTOR = "[data-payment-info=\"payment\"]";
  var App = window.App;

  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR);
  var formHandlerPayment = new FormHandler(PAYMENT_SELECTOR);

  formHandlerPayment.addPaymentHandler(PAYMENT_SELECTOR);

  console.log(formHandler);
})(window);
