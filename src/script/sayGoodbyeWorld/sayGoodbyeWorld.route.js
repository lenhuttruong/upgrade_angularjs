
    'use strict';

    import sayGoodbyeWorld from 'sayGoodbyeWorld.module';

    sayGoodbyeWorld.config(sayHelloWorldConfig);

    sayHelloWorldConfig.$inject = ['$routeProvider'];

    function sayHelloWorldConfig($routeProvider){

        var config = {
            templateUrl: 'sayGoodbyeWorld/sayGoodbyeWorld.html',
            appId: 'sayGoodbyeWorld',
            controller: 'sayGoodbyeWorldController',
            controllerAs: 'vm'
          };

        $routeProvider
            .when('/say-goodbye-world', config);
        }
    
