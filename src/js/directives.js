(function () {
    'use strict';

    /* Directives */
    angular.module('demo.directives', []).
        directive('appversion', ['version', function(version) {
            return function(scope, elm, attrs) {
                elm.text('Version : ' + version);
            };
        }]);

}());
