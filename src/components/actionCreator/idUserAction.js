import ID_USER from '../action/idUser';

export default function idUser(idUser) {
    return {
        type: ID_USER,
        idUser: idUser
    };
}