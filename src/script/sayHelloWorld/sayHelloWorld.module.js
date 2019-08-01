
    'use strict';

    import angular from 'angular';
    import 'angular-route';
    import sayHelloWorldConfig from './sayHelloWorld.route';
    import sayHelloDirective from './sayHelloWorld.directive';

    var sayHelloWorld = angular.module('sayHelloWorld', ['ngRoute'])
        .config(sayHelloWorldConfig)
        .directive('sayHelloWorldDirective', sayHelloDirective)
        .name;

    export default sayHelloWorld;
