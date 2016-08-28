var app=angular.module("app",['LocalStorageModule']);

app.controller("appcontroller",function($scope,localStorageService){
  if(localStorageService.get("listado")){
      $scope.datos=localStorageService.get("listado");
  }else{
      $scope.datos=[];  
  }
 
  $scope.guardar=function(){
    $scope.datos.push($scope.nuevodato)
    $scope.nuevodato={};
    localStorageService.set("listado",$scope.datos);
  }  
    $scope.borrar=function(){
      
  }  
     
    
})