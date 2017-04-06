const controller = require('./criminal.show.controller.js');
const template = require('./criminal.show.html')

const showComponent = {
  controller: controller,
  template: template
};

angular
  .module('criminals')
  .component('criminalsShow', showComponent);
