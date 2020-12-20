import React from 'react';
import { Container } from 'react-bootstrap';
import logIner from './actionCreator/logIner';
import store from './store';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUser: [],
            dataLanguages: [],
            dataSocial: []
        }
    }

    //получение данных по ID пользоветеля
    async getResponse(numId) {
        this.response = await fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${numId}`);
        this.dataGet = await this.response.json();
        console.log(this.dataGet);

        this.setState({
            dataUser: this.dataGet.data,
            dataLanguages: this.dataGet.data.languages,
            dataSocial: this.dataGet.data.social[0]
        });
        console.log(this.state.dataUser);
    }

    componentDidMount() {
        if (localStorage.getItem('verification') === 'false') {
            document.location.href = '/login';
        } else {
            store.dispatch(logIner('Log Out')); // ! меняем store на LogOut при входе

            this.getResponse(store.getState().idUser); // * запрос на сервер с полученным ID

        }
    }

    render() {

        const data = this.state.dataUser;
        const languages = this.state.dataLanguages;
        const social = this.state.dataSocial;

        return (
            <>
                <Container>
                    <h1>Страница ПРОФИЛЬ</h1>
                    <h5>Доступ на эту страницу ограничен паролем!!!</h5>
                    <div>
                        <div>City: </div>
                        <div>{data.city}</div>
                    </div>
                    <div>
                        <div>Languages: </div>
                        <div>{languages[0]}</div>
                        <div>{languages[1]}</div>
                    </div>
                    <div>
                        <div>{social.label}</div>
                        <a href={social.link}>{social.link}</a>
                    </div>
                </Container>
            </>
        );
    }
}