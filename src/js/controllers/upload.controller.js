function UploadController ($scope, $http, SERVER, $state) {


  $scope.addPhoto = (photo) => {
    $http.post(SERVER.URL, photo).then( (res) => {
      $state.go('root.home');
    });
  };
}

UploadController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { UploadController };
