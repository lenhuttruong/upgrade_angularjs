
    'use strict';

    import sayHelloTemplate from './sayHelloWorld.html';

    var sayHelloWorldConfig = sayHelloWorldConfigFn;

    sayHelloWorldConfigFn.$inject = ['$routeProvider'];

    function sayHelloWorldConfigFn($routeProvider){

        var config = {
            template: sayHelloTemplate,
            appId: 'sayHelloWorld'
          };

        $routeProvider
            .when('/say-hello-world', config);
        }

    export default sayHelloWorldConfig;
