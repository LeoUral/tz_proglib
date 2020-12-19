import LOG_OUT from '../action/logIn';

export default function logOut(action) {
    return {
        type: LOG_OUT,
        btnLog: action
    };
}