var app=angular.module("app",[]);
angular.module("app").factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
	  config.headers['x-shoply-auth'] = localStorage.getItem('token');
      onfig.headers['x-shoply-company'] = localStorage.getItem('company');
      return config;
    }
  };
}).config(function ($httpProvider) {
  $httpProvider.interceptors.push('httpRequestInterceptor');
});