import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    commonsuccess,
    error,
    commonerror,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function commonsuccess(message) {
    return { type: alertConstants.COMMONSUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function commonerror(message) {
    return { type: alertConstants.COMMONERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}