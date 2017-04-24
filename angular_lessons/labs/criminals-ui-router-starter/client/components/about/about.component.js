const controller = require('./about.controller.js');
const template = require('./about.html');

<<<<<<< HEAD
const AboutComponent = {
  controller: controller,
  template: template
};

angular
  .module('criminals')
  .component('about', AboutComponent)
=======
const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('about', component);
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
