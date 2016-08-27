var app= angular.module("app",[]);
app.controller("appcontroller",function($scope,$http){
    $scope.datos=[];
    $http.get("https://jsonplaceholder.typicode.com/posts")
   .success(function(data){
  
      $scope.datos=data;
   })
   .error(function(err){
       
   });
        
})