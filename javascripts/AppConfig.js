app.config(function($routeProvider) {
  $routeProvider
    .when('/hwyhome', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/roadway/overseas', {
      templateUrl: 'partials/overseas-hwy.html',
      controller: 'OverseasCtrl'
    })
    .when('/roadway/lincoln', {
      templateUrl: 'partials/lincoln-hwy.html',
      controller: 'LincolnCtrl'
    })
    .otherwise('/hwyhome');
});