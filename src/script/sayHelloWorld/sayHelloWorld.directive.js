
    'use strict';

    import sayHelloController from './sayHelloWorld.controller';
    import sayHelloTemplateDirective from './sayHelloWorld.directive.html';
    import './sayHelloWorld.styl';

    var sayHelloWorldDirective = sayHelloWorldDirectiveFn;

    sayHelloWorldDirectiveFn.$inject = [];

    function sayHelloWorldDirectiveFn(){
        return {
            scope: {},
            restrict: 'E',
            controller: sayHelloController,
            controllerAs: 'vm',
            template: sayHelloTemplateDirective
        };
    }

    export default sayHelloWorldDirective;
