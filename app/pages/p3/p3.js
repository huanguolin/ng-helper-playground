'use strict';
angular.module('app.pages').controller('P3Controller', [
    '$scope',
    '$uibModal',
    function (
        $scope,
        $uibModal
    ) {
        // Some code for demo
        $scope.openModel = function () {
            $uibModal.open({
                scope : $scope,
                templateUrl : 'app/pages/p3/model.html',
                controller : 'P2Controller',
            }).result.then(() => {
                // Do something
            });
        };
    },
]);
