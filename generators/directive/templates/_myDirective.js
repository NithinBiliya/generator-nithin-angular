(function(){
	angular.module('<%= ngapp %>')
	  .directive('<%= directiveName %>', function() {
		return {
			restrict: 'E',
			templateUrl: '<%= directiveName %>.tmpl.html',
			scope: {

			},
			link: function(scope, element, attrs) {

			}
		};
	  });
})();
