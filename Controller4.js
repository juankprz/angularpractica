var app= angular.module("app",[]);
app.controller("appcontroller",function($scope,$http){
    $scope.datos=[];
    $http.get("https://jsonplaceholder.typicode.com/users")
   .success(function(data){
  
      $scope.datos=data;
   })
   .error(function(err){
       
   });
        
})