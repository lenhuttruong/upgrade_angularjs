
    'use strict';

    import angular from 'angular';

    initApplication();

    function initApplication() {
        bootstrapApplication();
      }

    function bootstrapApplication() {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['app']);
        });
    }



