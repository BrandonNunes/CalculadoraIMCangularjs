app.controller("lista", ($scope) =>{
    $scope.titulo = "Lista Telefônica"
    $scope.contatos = [
        {nome:'Pedro',tel:'9999-9999', data:new Date()},
        {nome:'Maria',tel:'9888-8888', data:new Date()},
        {nome:'joaquin',tel:'9777-777', data:new Date()}
    ];
    $scope.adicionar = function(contato){
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    }
    $scope.remover = function (contatos){
            $scope.contatos = contatos.filter((contato)=>{
                if (!contato.selecionado) return contato
            })
    }
    $scope.operadoras=[
        {nome:"Oi", codigo:14, categoria:"celular"},
        {nome:"Vivo", codigo:15, categoria:"celular"},
        {nome:"Claro", cocdgo:31, categoria:"celular"},
        {nome:"Tim", codigo:41, categoria:"celular"},  
        {nome:"GVT", codigo:25, categoria:"fixo"},
        {nome:"Embratel", codigo:21, categoria:"fixo"}
    ];
    $scope.contatoSelecionado = function (contatos){
      return contatos.some((contato)=>{
          return  contato.selecionado
      });
         
                
        
    }
})