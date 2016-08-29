var c=angular.module("ap",[]);
    c.controller("c",function($scope){
        $scope.nuevodato={};
        $scope.datos=[
            {
            id:123456,
            nombre:"juan camilo"
            },
            {
            id:098765432,
            nombre:"juan manuel"
            }
                     ];
        $scope.anuevodato=function(){
            $scope.datos.push($scope.nuevodato);
            $scope.nuevodato={};
        }
        
    });