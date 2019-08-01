
    'use strict';

    import angular from 'angular';
    import 'angular-route';
    import sayHelloWorld from './sayHelloWorld/sayHelloWorld.module';
    import appController from './appController';
    import appDirective from './appDirective.html';
    import '../styles/main.styl'



    appDirectiveFn.$inject = [];

    function appDirectiveFn(){
        return {
            scope: {},
            restrict: 'E',
            controller: appController,
            controllerAs: 'vm',
            template: appDirective
        };
    }

    var appModule = angular.module('app', [
        'ngRoute',
        'sayHelloWorld'
        ])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    redirectTo: '/say-hello-world'
                })
                // .when(ovRouteProvider.base('/wlandashboard'), {
                //   redirectTo: ovRouteProvider.base('/dashboard/wlan')
                // })
                .otherwise({
                    redirectTo: '/say-hello-world'
                });
        }])
        .directive('appDirective', appDirectiveFn)
        .controller('IndexCtr', function($scope, $rootScope){

            $rootScope.message = "UPGRADE AJS";
        });

    export default appModule;

