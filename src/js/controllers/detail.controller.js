function DetailController ($scope, $http, SERVER, $state) {

  // remember initialize object to store image/data

  init()

      function init () {
        console.log("%cDetailController running", "color: #265896;")
      }
}

DetailController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { DetailController };
