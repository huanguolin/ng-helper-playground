// ref: https://github.com/andreypopp/autobind-decorator/blob/master/src/index.js

// eslint-disable-next-line valid-jsdoc
/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
const autoBindMethod: MethodDecorator = function (target, key, descriptor) {
    let fn = descriptor.value;

    if (typeof fn !== 'function') {
        throw new TypeError(`@boundMethod decorator can only be applied to methods not: ${typeof fn}`);
    }

    // In IE11 calling Object.defineProperty has a side-effect of evaluating the
    // getter for the property which is being replaced. This causes infinite
    // recursion and an "Out of stack space" error.
    let definingProperty = false;

    return {
        configurable : true,
        get() {
            if (definingProperty || this === (target as any).prototype || (this as any).hasOwnProperty(key) ||
                typeof fn !== 'function') {
                return fn;
            }

            const boundFn = fn.bind(this);
            definingProperty = true;
            Object.defineProperty(this, key, {
                configurable : true,
                get() {
                    return boundFn;
                },
                set(value) {
                    fn = value;
                    delete this[key];
                },
            });
            definingProperty = false;
            return boundFn;
        },
        set(value) {
            fn = value;
        },
    };
};

// eslint-disable-next-line valid-jsdoc
/**
 * Use boundMethod to bind all methods on the target.prototype
 */
const autoBindClass: ClassDecorator = function (target) {
    // (Using reflect to get all keys including symbols)
    let keys: any[];
    // Use Reflect if exists
    if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
        keys = Reflect.ownKeys(target.prototype);
    } else {
        keys = Object.getOwnPropertyNames(target.prototype);
        // Use symbols if support is provided
        if (typeof Object.getOwnPropertySymbols === 'function') {
            keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
        }
    }

    keys.forEach(key => {
        // Ignore special case target method
        if (key === 'constructor') {
            return;
        }

        const descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

        // Only methods need binding
        if (descriptor && typeof descriptor.value === 'function') {
            Object.defineProperty(target.prototype, key, autoBindMethod(target, key, descriptor) as any);
        }
    });
    return target;
};
