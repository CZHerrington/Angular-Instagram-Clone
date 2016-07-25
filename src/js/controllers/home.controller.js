function HomeController ($scope, $http, SERVER, $state) {

  $scope.photos = [];

  init()

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.photos = res.data;
      console.log("HOME: ", $scope.photos)
    });
    // window.setInterval(sync, 5000);
  }
  //
  // function sync() {
  //   console.log($scope.photos)
  //   $http.post(SERVER.URL, $scope.photos)
  // }

  $scope.displayLike = function(photoObj, likes) {
  switch (likes) {
    case undefined:
      console.log(photoObj)
      // $http.post(SERVER.URL, photoObj)
    return 0 + " Likes"

    case 1:
      return likes + " Like"
      break;
    default:
      return likes + " Likes"
      }



  // $http.post(SERVER.URL, photo)
    }

  }

HomeController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { HomeController };
