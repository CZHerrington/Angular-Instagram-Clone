function DetailController ($scope, $stateParams, $http, SERVER) {

  $scope.singlePhoto = {};

  init();

  function init () {

    $http.get(SERVER.URL + $stateParams.id).then( (res) => {
      $scope.singlePhoto = res.data;
      console.log("detail ", $scope.singlePhoto)
    });

  }

}

DetailController.$inject = ['$scope', '$stateParams', '$http', 'SERVER'];
export { DetailController };


// ADD CORRECT CODE TO HOME TO GENERATE THE LINK BASED ON ID, ALSO FUCKING EDIT THE CONFIG TO REPRESENT THAT
