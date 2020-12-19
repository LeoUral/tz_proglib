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
    async getResponse() {
        this.response = await fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/1');
        this.dataGet = await this.response.json();
        console.log(this.dataGet);
        console.log(this.dataGet.data);
        this.setState({ dataUser: this.dataGet.data });
        this.setState({ dataLanguages: this.dataGet.data.languages });
        this.setState({ dataSocial: this.dataGet.data.social[0] });
        console.log(this.state.dataUser);
    }

    componentDidMount() {
        if (localStorage.getItem('verification') === 'false') {
            document.location.href = '/login';
        } else {
            store.dispatch(logIner()); // ! меняем store на LogOut при входе
            this.getResponse();
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
                        <span>City: </span>
                        <span>{data.city}</span>
                    </div>
                    <div>
                        <span>Languages: </span>
                        <span>{languages[0]}</span>
                        <span>{' '}</span>
                        <span>{languages[1]}</span>
                    </div>
                    <div>
                        <span>{social.label}</span>
                        <sapn>{' '}</sapn>
                        <a href={social.link}>{social.link}</a>
                    </div>
                </Container>
            </>
        );
    }
}