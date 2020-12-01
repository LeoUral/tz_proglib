import React from 'react';
import { Container } from 'react-bootstrap';

export default class Profile extends React.Component {

    componentDidMount() {
        if (localStorage.getItem('verification') === 'false') {
            document.location.href = '/login';
        }
    }

    componentWillUnmount() {
        localStorage.setItem('verification', false);
    }

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