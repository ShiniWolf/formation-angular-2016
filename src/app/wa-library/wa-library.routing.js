export function RouteConfig ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '<wa-library></wa-library>'
  })
    .when('/book-form', {
      template: '<wa-book-form></wa-book-form>'
    })
    .when('/book/:id', {
      template: '<wa-book></wa-book>'
    });

  $locationProvider.html5Mode(true);
}