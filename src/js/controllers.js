(function () {
    'use strict';

    /* Controllers */
    angular.module('demo.controllers', [])
        .controller('GenericController', ['$scope', function($scope) {
            console.log('salut!');
            console.log('hello!');
        }
    ]);
}());
