'use strict';
angular.module('app.fileUpload', [
])

.controller('fileUploadCtrl', function($scope) {
  $scope.url = '';

  $scope.poop = function() {
    console.log($scope.url);
  }
});