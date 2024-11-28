'use strict';
angular.module('app.directives').directive('numberCheck', [
    function () {
        return {
            restrict : 'A',
            require : 'ngModel',
            scope : {
                min : '?<',
                max : '?<',
                canNaN : '?<allowNan'
            },
            template: `
            <section>
                <best-xyz x="some text" y="value"></best-xyz>
                <div best-xyz x="hi" y="value"></div>
            </section>
            `,
            link : function (scope, element, attrs, ctrl) {
            },
        };
    },
]);