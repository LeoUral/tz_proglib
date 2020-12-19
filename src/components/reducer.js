import LOG_IN from './action/logIn';
import LOG_OUT from './action/logOut';


export default function reducer(state, action) {
    switch (action.type) {

        case LOG_IN:
            return { btnLog: action.btnLog };

        case LOG_OUT:
            return { btnLog: action.btnLog };

        default: return state;
    }
}