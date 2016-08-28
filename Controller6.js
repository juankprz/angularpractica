var app=angular.module("app",['LocalStorageModule']);

app.controller("appcontroller",function($scope,$http,localStorageService){
  if(localStorageService.get("listado")){
      $scope.datos=localStorageService.get("listado");
  }else{
      $scope.datos=[];  
  }
$http.get("") 
 
  $scope.guardar=function(){
    $scope.datos.push($scope.nuevodato)
    $scope.nuevodato={};
    localStorageService.set("listado",$scope.datos);
  }  
    $scope.borrar=function(){
      $scope.datos=[]
       localStorageService.set("listado",$scope.datos);
  }  
     
    
})