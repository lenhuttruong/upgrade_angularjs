
    'use strict';

    import sayGoodbyeWorld from 'sayGoodbyeWorld.module';

    sayGoodbyeWorld.controller('sayGoodbyeWorldController', sayGoodbyeWorldControllerFn);

    sayGoodbyeWorldControllerFn.$inject = ['$scope'];

    function sayGoodbyeWorldControllerFn($scope){
        var vm = this;
        vm.message = 'Goodbye World :(';
    }
    
