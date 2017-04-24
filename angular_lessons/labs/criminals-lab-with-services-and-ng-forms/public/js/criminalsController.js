angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);

<<<<<<< HEAD
CriminalsController.$inject = ['$http', 'CriminalsService'];

function CriminalsController($http, CriminalsService){
=======
CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService){
>>>>>>> 4c31d1eb06fd288fe40473409d77498e8329c8ab
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

  getCriminals();

  function getCriminals(){
<<<<<<< HEAD
    CriminalsService.getCriminals().then(function (criminalsData){
=======
    CriminalsService.getCriminals().then(function (criminalsData) {
>>>>>>> 4c31d1eb06fd288fe40473409d77498e8329c8ab
      self.all = criminalsData;
    });
  }

  function addCriminal(){
<<<<<<< HEAD
    CriminalsService.addCriminal(self.newCriminal)
      .then(function(){
      self.getCriminals();
        self.newCriminal = {};
    });
=======
   CriminalsService.addCriminal(self.newCriminal).then(function(){
     self.getCriminals();
       self.newCriminal = {};
   });
>>>>>>> 4c31d1eb06fd288fe40473409d77498e8329c8ab
  }


  function deleteCriminal(criminal){
    CriminalsService.deleteCriminal(criminal)
<<<<<<< HEAD
    .then(function(response){
      var index = self.all.indexOf(criminal);
      self.all.splice(index, 1);
=======
      .then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
>>>>>>> 4c31d1eb06fd288fe40473409d77498e8329c8ab
      });
  }

}
