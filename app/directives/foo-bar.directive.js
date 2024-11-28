'use strict';
angular.module('app.directives').directive('fooBar', [
    '$translate',
    function ($translate) {
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