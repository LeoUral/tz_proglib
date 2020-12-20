import LOG_IN from './action/logIn';
import LOG_OUT from './action/logOut';
import ID_USER from './action/idUser';


export default function reducer(state, action) {
    switch (action.type) {

        case LOG_IN:
            return Object.assign({}, state, {
                btnLog: action.btnLog
            });// TODO изменяем state через создание копии Object.assign()

        case LOG_OUT:
            return Object.assign({}, state, {
                btnLog: action.btnLog
            });

        case ID_USER:
            return Object.assign({}, state, {
                idUser: action.idUser
            });

        default: return state;
    }
}