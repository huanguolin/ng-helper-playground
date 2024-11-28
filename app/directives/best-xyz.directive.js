'use strict';
angular.module('app.directives').directive('bestXyz', [
    function () {
        return {
            restrict : 'AE',
            scope : {
                x : '?@',
                y : '?<',
                z : '?&',
                xyz : '?=all',
            },
            templateUrl: 'app/directives/best-xyz.directive.html',
            link : function (scope, element, attrs, ctrl) {
            },
        };
    },
]);