import operate from './operate'
import isNumber from './isNumber'

export default (state, buttonName) => {
    if (buttonName === 'AC') {
        return {
            total: '',
            next: '',
            operation: '',
        };
    }

    if (isNumber(buttonName)) {
        if (buttonName === '0' && state.next === '0') {
            return {};
        }

        if (state.operation) {
            if (state.next) {
                return {next: state.next + buttonName};
            }
            return {next: buttonName};
        }

        if (state.next) {
            return {
                next: state.next + buttonName,
                total: '',
            };
        }

        return {
            next: buttonName,
            total: '',
        };
    }


    if (buttonName === '.') {
        if (state.next) {
            if (state.next.includes('.')) {
                return {};
            }
            return {next: state.next + '.'};
        }
        return {next: '0.'};
    }

    if (buttonName === '=') {
        if (state.next && state.operation) {
            return {
                total: operate(state.total, state.next, state.operation),
                next: '',
                operation: '',
            };
        } else {
            return {};
        }
    }

    if (state.operation) {
        return {
            total: operate(state.total, state.next, state.operation),
            next: '',
            operation: buttonName,
        };
    }

    if (!state.next) {
        return {operation: buttonName};
    }

    return {
        total: state.next,
        next: '',
        operation: buttonName,
    };
}