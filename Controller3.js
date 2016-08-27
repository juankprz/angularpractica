var app = angular.module("app",[]);
app.controller("appcontroller",["$scope",function(n){
    n.juegos=[
        {
            nombre:"call of duty",
            fecha:"24/09/1996"
        },
        {
           nombre:"san andreas",
            fecha:"24/09/2016" 
            
        }
        
        
        ]
    
}])