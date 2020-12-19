import LOG_IN from '../action/logIn';

export default function logIner(action) {
    return {
        type: LOG_IN,
        btnLog: action
    };
}