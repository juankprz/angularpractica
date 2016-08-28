var app=angular.module("app",[]);
app.controller("appcontroller",function($scope,$http){
    $scope.datos=[];
    $scope.c;
    
    $http.get("https://jsonplaceholder.typicode.com/users")
    .success(function(data){
      $scope.datos=data
    $scope.datos.reverse()
    }).error(function(err){
        console.log("error")
    })
    $scope.ordenar=function(){
      $scope.c=$scope.datos.id+$scope.datos.id;
    }
})