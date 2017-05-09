(function(){
	angular.module('<%= ngapp %>')
	  .controller('<%= ngctrl %>', [function() {
		var vm=this;
		vm.world="world";
	  }])
})();