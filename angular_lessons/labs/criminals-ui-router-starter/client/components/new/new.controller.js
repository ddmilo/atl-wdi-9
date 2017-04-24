NewController.$inject = ['$state', 'CriminalsService'];

function NewController($state, CriminalsService){
  const vm = this;
  vm.addNew = addNew;
  vm.newCriminal = {};


  activate();

  function activate(){

  }
  function addNew(){
    CriminalsService
      .addNew(vm.newCriminal)
      .then(function resolve(response){
        console.log(response);
        $state.go('criminals');
      });
  }
}

module.exports = NewController;
