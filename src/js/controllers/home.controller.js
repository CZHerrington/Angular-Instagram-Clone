function HomeController ($scope, $http, SERVER, $state) {

  // remember initialize object to store image/data

  init()

      function init () {
        console.log("%cHomeController running", "color: #265896;")
      }
}

HomeController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { HomeController };
