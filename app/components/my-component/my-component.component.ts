
namespace components {

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
        showBtn = true;
        hello = 'hello world!';
        test?: boolean;
        init() {
            // TODO
        }
        // #endregion

        // #region private methods
        // #endregion
    }

    angular.module('components').component('myComponent', {
        templateUrl : 'components/my-component/my-component.component.html',
        bindings : {
            test: '<?',
        },
        controllerAs : 'ctrl',
        controller : MyComponentController,
    });
}