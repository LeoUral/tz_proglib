import LOG_IN from './action/logIn';
import LOG_OUT from './action/logOut';


export default function reducer(state, action) {
    switch (action.type) {

        case LOG_IN:
            return { btnLog: 'Log Out' };

        case LOG_OUT:
            return { btnLog: 'Log In' };

        default: return state;
    }
}