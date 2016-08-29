angular.module("miApp").controller("loginController", function($scope, $http){
	$scope.login = function(){
		$http.post('shoply.com.co:8080/login', $scope.form.data).success(function(response){
			if(response){
				localStorage.setItem("token", response.token);
				localStorage.setItem("user", response.user);
			}
		});
	}
});