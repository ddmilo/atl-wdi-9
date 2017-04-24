angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http){
  var vm = this;

    vm.addPresident = addPresident;
    vm.all = [];
    vm.loadingAll = true;
    vm.newPresident = { name: 'Joshua' };
    // vm.title = 'blah';
    vm.removePresident = removePresident;


  activate();

  function activate() {
    loadAllPresidents();

  }

    //todo : Add presidents#create connection
  function addPresident(){
    console.log('Adding...');
    console.log(vm.newPresident);


    $http
      .post('/presidents', vm.newPresident)
      .then(function someName(response) {
        vm.all.push(response.data.president)
        vm.newPresident = {};
      });
  }

    // //old
    // vm.all.push(vm.newPresident);
    // vm.newPresident = {};


  function loadAllPresidents(){
    $http
      .get('/presidents')
      .then(function handleSuccess(response){
        vm.all = response.data.presidents;
        vm.loadingAll = false;
      }, function handleError(err){
        vm.loadingAll = false;
      });

  }

//Delete President
  function removePresident(president, index ){
    $http
    .delete('/presidents/' + president._id)
    .then(function someName(response){
      vm.all.splice(index, 1)
    })
  }
}
