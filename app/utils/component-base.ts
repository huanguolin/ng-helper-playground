
class ComponentBase implements Pick<ng.IComponentController, '$onInit'> {
    $onInit(): void {
        const init = (this as any).init;
        if (typeof init === 'function') {
            init();
        }
    }
}