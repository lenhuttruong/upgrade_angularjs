
    'use strict';

    var appController = appControllerFn;

    appControllerFn.$inject = ['$rootScope'];

    function appControllerFn($rootScope){
        $rootScope.message = "UPGRADE AJS";
    }

    export default appController;
