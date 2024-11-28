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
            template: `
            <div>{{x}}</div>
            `,
            link : function (scope, element, attrs, ctrl) {
            },
        };
    },
]);