const controller = require('./new.controller.js');
const template = require('./new.html');


const newComponent = {
  controller: controller,
  template: template
};

angular
  .module('criminals')
  .component('newCriminal', newComponent)
