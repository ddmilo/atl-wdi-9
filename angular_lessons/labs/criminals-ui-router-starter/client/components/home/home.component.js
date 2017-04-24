const controller = require('./home.controller.js');
<<<<<<< HEAD
const template = require('./home.html')

const HomeComponent = {
=======
const template = require('./home.html');

const component = {
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
  controller: controller,
  template: template
};

angular
<<<<<<< HEAD
    .module('criminals')
    .component('home', HomeComponent)
=======
  .module('criminals')
  .component('home', component);
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
