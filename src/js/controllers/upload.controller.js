function UploadController ($scope, $http, SERVER, $state) {

  // remember initialize object to store image/data

  init()

      function init () {
        console.log("%cUploadController running", "color: #265896;")
      }
}

UploadController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { UploadController };
