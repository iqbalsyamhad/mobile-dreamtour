dreamtour.controller('AuthController', ['$scope', '$http','cfpLoadingBar', '$auth', 
  function AuthController($scope, $http, cfpLoadingBar, $auth) 
{
    $scope.data = {};
    $scope.currentUser = {};

    $scope.login = function() 
    {
        var credentials = {
            email: $scope.data.email,
            password: $scope.data.password
        }

        console.log(credentials);

        // Use Satellizer's $auth service to login
        $auth.login(credentials).then(function(data) {

            // If login is successful, redirect to the users state
            console.log(data);
            var user = JSON.stringify(data.data.user);

            // Set the stringified user data into local storage
            localStorage.setItem('user', user);

            // Putting the user's data on $rootScope allows
            // us to access it anywhere across the app
            $scope.currentUser = data.data.user;

            var user1 = localStorage.getItem('user');
            console.log(user1);

        }, function(error) {
            console.log(error);
        });
    }


}]);
