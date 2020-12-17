import React from 'react';
import { Container } from 'react-bootstrap';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.dataSend = {
            email: 'max@test.com',
            password: '12345'
        };
    }

    // получение ID пользователя, по вводу email и password
    async postResponse() {
        this.response = await fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.dataSend)
        })
        this.dataPost = await this.response.json();// ждем окончание асинхронного запроса
        console.log(this.dataPost.data.id); //полученные данные ID с сервера
    };
    //получение данных по ID пользоветеля
    async getResponse() {
        this.response = await fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/1');
        this.dataGet = await this.response.json();
        console.log(this.dataGet.data.city);
    }

    componentDidMount() {
        if (localStorage.getItem('verification') === 'false') {
            document.location.href = '/login';
        } else {
            this.postResponse();
            this.getResponse();

        }


    }

    // componentWillUnmount() {
    //     localStorage.setItem('verification', false);
    // }

    render() {
        return (
            <>
                <Container>
                    <h1>Страница ПРОФИЛЬ</h1>
                    <h5>Доступ на эту страницу ограничен паролем!!!</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugit esse, sit iusto ipsa laboriosam dolorem, possimus deleniti, ipsam eum doloremque assumenda. Consequuntur quaerat ipsa veritatis vel tenetur corrupti error quia tempora. Enim cum sint aperiam quam dolores maxime sequi mollitia debitis vero, repellat harum quibusdam porro non placeat quod magnam nihil! Deleniti nesciunt tempore iure recusandae illo numquam. Iure exercitationem deleniti sit minima quam totam unde autem praesentium deserunt.</p>
                </Container>
            </>
        );
    }
}