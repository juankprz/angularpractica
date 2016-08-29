var app=angular.module("app",[]);

app.controller("appcontroller",function($scope,$http){
    $scope.datos=[]; 
    $scope.nuevopost={};
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .success(function(data){
      $scope.datos=data  
    }).error(function(err){
        console.log("error")
    })
    $scope.guardar=function(){
        $http.post("https://jsonplaceholder.typicode.com/posts",{
            title:$scope.nuevopost.title,
            body:$scope.nuevopost.body,
            userId:1
        }).success(function(data,status,headers,config){
            $scope.datos.push(data);
            $scope.nuevopost={};
            alert("Datos agregados")
            
        }).error(function(error,status,headers,config){
            console.log("error de insercion de nuevo post")
        })
        
    }
    
    
})