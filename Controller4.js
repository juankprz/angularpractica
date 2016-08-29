var app= angular.module("app",[]);
app.controller("appcontroller",function($scope,$http){
    $scope.datos=[];
    $http.get("https://jsonplaceholder.typicode.com/photos?id=5000&id=1")
   .success(function(data){
  
      $scope.datos=data;
      $scope.datos.reverse()
   })
   .error(function(err){
       
   });
        
})