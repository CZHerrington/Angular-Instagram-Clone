function UploadController ($scope, $http, SERVER, $state) {
$scope.photo = {}
$scope.photo.likes = 0

  $scope.addPhoto = (photo) => {
    $http.post(SERVER.URL, photo).then( (res) => {
      $state.go('root.home');
      console.log("photo", photo)
    });
  };
}

UploadController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { UploadController };
