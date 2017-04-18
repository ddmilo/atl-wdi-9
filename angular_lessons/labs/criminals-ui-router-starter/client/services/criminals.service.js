angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.create = create;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
<<<<<<< HEAD
	self.addNew = addNew;
=======

>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5

	// HOW IT DOES STUFF
	function create(criminalData) {
		return $http
			.post('/api/criminals', criminalData);
	}

	function loadAll() {
		return $http.get('/api/criminals');
	}
<<<<<<< HEAD
	function loadCurrent(id) {
		return $http.get(`/api/criminals/` + id);
	}
	function addNew(newCriminal){
		return $http.post('/api/criminals', newCriminal);
=======

	function loadCurrent(id) {
		return $http.get('/api/criminals/' + id);
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
	}
}
