'use strict';

/**
 * @ngdoc function
 * @name myCallApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myCallApp
 */
angular.module('myCallApp', ['firebase'])
  .controller('MainCtrl', function ($scope, $firebaseObject, $firebaseArray) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var ref = new Firebase("https://mycall.firebaseio.com/");

    $scope.submitData = {};
    $scope.submitData.username = '';
    // $scope.data = $firebaseObject(ref);
    $scope.data = $firebaseArray(ref);
debugger;
	// syncObject.$bindTo($scope, "data");

    $scope.postData = function () {
    	debugger;
	 	$scope.data.$add({
	      text: $scope.submitData.username
    	});

    	$scope.submitData.username = '';
    };
  });