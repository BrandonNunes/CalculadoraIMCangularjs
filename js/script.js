var app = angular.module("imc",[]);
app.controller("imcCtrl", function($scope){
    $scope.titulo = "Calculadora IMC";
    $scope.peso = "";
    $scope.altura = "";
    $scope.resultado = null;
    $scope.erro = "";
    $scope.mensagem = "";
    $scope.calcular = function(){
       $scope.resultado = Number($scope.peso/($scope.altura*$scope.altura)).toFixed(2);
        $scope.diagnostico();
    }
    $scope.diagnostico = function(){
    
        if($scope.resultado < 18.5){
            $scope.mensagem = "Seu IMC é "+$scope.resultado+" e você está abaixo do peso!"
        }else if($scope.resultado < 24.9){
            $scope.mensagem = "Seu IMC é "+$scope.resultado+" e você está com peso normal!"
        }else if($scope.resultado < 30){
            $scope.mensagem = "Seu IMC é "+$scope.resultado+" e você está com sobrepeso!"
        }else if($scope.resultado < 35){
            $scope.mensagem = "Seu IMC é "+$scope.resultado+" e você está com Obesidade grau I!"
        }else if($scope.resultado < 39.9){
            $scope.mensagem = "Seu IMC é "+$scope.resultado+" e você está com Obesidade grau II!"
        }else if($scope.resultado > 39.9){
            $scope.mensagem = "Seu IMC é "+$scope.resultado+" e você está com Obesidade morbida CUIDADO!"
        }
}
});