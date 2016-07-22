function HomeController ($scope, $http, SERVER, $state) {

  $scope.photos = [];

  init()

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.photos = res.data;
      console.log("HOME: ", $scope.photos)
    });
  }

}

HomeController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { HomeController };
