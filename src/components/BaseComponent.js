import React from 'react';
class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.bindMethodsToThis();
        this.loading();
        this.displayErrors();
    }

    getMethodNames() {
        const excludes = [
            'constructor',
            'componentWillMount',
            'render',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
            'bindMethodsToThis',
        ];
        const props = Object.getOwnPropertyNames(this.constructor.prototype);
        const names = [];
        for (let p of props) {
            const p2 = this[p];
            if (typeof p2 === 'function' && excludes.indexOf(p) === -1) {
                names.push(p);
            }
        }
        return names;
    }

    bindMethodsToThis() {
        const methods = this.getMethodNames();

        methods.forEach((item) => {
            this[item] = this[item].bind(this);
        });
    }
    loading() {
        return <div id="status">
            <div className="spinner">
                Please wait Some Time.Loading....
            </div>
        </div>;
    }

    displayErrors(data) {
        if (data) {
            data.Errors.forEach(item => {
               // toastr.error(item);
            });
        }
    }
}
export default BaseComponent;