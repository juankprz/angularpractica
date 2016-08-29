var app=angular.module("app",[]);
app.controller("appcontroller",function($scope,$http){
    $scope.datos=[];
    $scope.records=[];
    
    $http.get("https://jsonplaceholder.typicode.com/photos")
    .success(function(data){
      $scope.datos=data
    $scope.datos.reverse()
    }).error(function(err){
        console.log("error")
    })
    
})