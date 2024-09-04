
namespace components {

    // #region types
    // #endregion

    @autoBindClass
    class CommonBtnController extends ComponentBase {

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
        title!: string;
        // #endregion

        // #region vm props & methods
        init() {
            // TODO
        }
        // #endregion

        // #region private methods
        // #endregion
    }

    angular.module('components').component('commonBtn', {
        templateUrl : '~/codeWork/workdir/ng-helper-playground/app/components/common-btn/common-btn.component.html',
        bindings : {
            title: "@",
        },
        controllerAs : 'ctrl',
        controller : CommonBtnController,
    });
}