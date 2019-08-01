
    'use strict';

    var sayHelloWorldController = sayHelloWorldControllerFn;

    sayHelloWorldControllerFn.$inject = ['$scope'];

    function sayHelloWorldControllerFn($scope){
        var vm = this;
        vm.message = 'Hello World :)';
    }

    export default sayHelloWorldController;
