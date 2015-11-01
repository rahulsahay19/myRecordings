(function () {
    'use strict';
    var controllerId = 'angularJS';
    angular.module('app').controller(controllerId, ['common', angularJS]);

    function angularJS(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'AngularJS';
      
        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated angularJS View'); });
        }
    }
})();

