module.exports = function($stateProvider) {
	$stateProvider
	  .state('stateName', {
	    url: '/stateName',
	    templateUrl: '/js/templates/pages/stateName.html',
	    controller: 'stateNameCtrl',
	    data: {
	      containerClass: 'landing-page'
	    }
	  });
}