'use strict';

/**
 * @ngdoc function
 * @name myCallApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myCallApp
 */
angular.module('myCallApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
