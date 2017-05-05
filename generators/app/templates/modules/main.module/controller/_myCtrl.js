(function(){
	angular.module('<%= ngapp %>')
	  .controller('<%= ngctrl %>', ['$scope', function($scope) {
		$scope.world="world";
	  }])
})();