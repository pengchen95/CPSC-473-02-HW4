(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  var order_id = "";

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val) {
    $.post(this.serverUrl, val, function(serverResponse) {
      console.log(serverResponse);
      order_id = serverResponse.id;

      return order_id;
    });
  };

  RemoteDataStore.prototype.getAll = function(cb) {
    $.get(this.serverUrl, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl + "/" + key, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    $.ajax(this.serverUrl + "/" + order_id, {
      type: "DELETE"
    });
    console.log("Order with email:" + key + " is removed.");
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
