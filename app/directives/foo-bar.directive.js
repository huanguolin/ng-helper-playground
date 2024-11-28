'use strict';
angular.module('app.directives').directive('fooBar', [
    function () {
        return {
            restrict : 'AE',
            scope : {
                foo : '?@',
                bar : '?<',
            },
            template: `
            <div ng-if="bar">{{foo}}</div>
            `,
            link : function (scope, element, attrs, ctrl) {
            },
        };
    },
]);