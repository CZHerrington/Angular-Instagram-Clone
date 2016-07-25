function config ($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController'
    })
    .state('root.detail', {
      url: '/pic/:id',
      templateUrl: 'templates/detail.tpl.html',
      controller: 'DetailController'
    })
    .state('root.upload', {
      url: '/upload',
      templateUrl: 'templates/upload.tpl.html',
      controller: 'UploadController'
    })

  $urlRouterProvider.otherwise('/');

}


config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
