
namespace view1 {

    // #region types
    // #endregion

    @autoBindClass
    class HelloWorldController extends ComponentBase {

        // #region injections
        static $inject = [
            '$scope',
        ];
        constructor(
            private $scope: ng.IScope,
        ) {
            super();
        }
        // #endregion

        // #region private props
        // #endregion

        // #region bindings
        // #endregion

        // #region vm props & methods
        hello = 'hello world!';
        foo = {
            bar: (s: string) => 'foo bar ' + s,
            obj: {
                prop: 'obj prop',
            },
            num: 42,
        };
        init() {
            // TODO
        }
        // #endregion

        // #region private methods
        // #endregion
    }

    angular.module('view1').component('helloWorld', {
        templateUrl : 'view1/components/hello-world/hello-world.component.html',
        bindings : {
            // TODO
        },
        controllerAs : 'ctrl',
        controller : HelloWorldController,
    });
}