
namespace view1 {

    // #region types
    // #endregion

    @autoBindClass
    class MyComponentController extends ComponentBase {

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
        init() {
            // TODO
        }
        // #endregion

        // #region private methods
        // #endregion
    }

    angular.module('view1').component('myComponent', {
        templateUrl : 'view1/components/my-component/my-component.component.html',
        bindings : {
            // TODO
        },
        controllerAs : 'ctrl',
        controller : MyComponentController,
    });
}