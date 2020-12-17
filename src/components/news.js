import React from 'react';
import { Container } from 'react-bootstrap';

export default class News extends React.Component {

    async getNews() {
        this.response = await fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/news');
        this.dataNews = await this.response.json();
        console.log('---------------------------------------');
        console.log(this.dataNews.data);
        console.log(this.dataNews.data[0].title);
        console.log(this.dataNews.data[0].text);
        console.log('---------------------------------------');
        console.log(this.dataNews.data[1].title);
        console.log(this.dataNews.data[1].text);
        console.log('---------------------------------------');
    };

    componentDidMount() {
        this.getNews();
    }

    render() {
        return (
            <>
                <Container>
                    <h1>Страница с новостями</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo placeat a quisquam tenetur sunt delectus, perferendis aliquam quae repellendus adipisci iure et, consequatur veritatis eum optio vero pariatur fugit soluta necessitatibus aut cumque excepturi vitae! Corporis, exercitationem saepe? Suscipit libero beatae tempora veritatis repellat reiciendis voluptate tempore, quae eaque!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis libero perferendis quam architecto neque consequuntur non quidem ipsam autem ad assumenda maxime quae sequi ab dolorum voluptate possimus, natus nostrum laboriosam aspernatur quia aliquid provident veniam. Cupiditate fugit sunt delectus praesentium! Id optio ipsum quos atque blanditiis voluptatem numquam dignissimos.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis libero perferendis quam architecto neque consequuntur non quidem ipsam autem ad assumenda maxime quae sequi ab dolorum voluptate possimus, natus nostrum laboriosam aspernatur quia aliquid provident veniam. Cupiditate fugit sunt delectus praesentium! Id optio ipsum quos atque blanditiis voluptatem numquam dignissimos.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis libero perferendis quam architecto neque consequuntur non quidem ipsam autem ad assumenda maxime quae sequi ab dolorum voluptate possimus, natus nostrum laboriosam aspernatur quia aliquid provident veniam. Cupiditate fugit sunt delectus praesentium! Id optio ipsum quos atque blanditiis voluptatem numquam dignissimos.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis libero perferendis quam architecto neque consequuntur non quidem ipsam autem ad assumenda maxime quae sequi ab dolorum voluptate possimus, natus nostrum laboriosam aspernatur quia aliquid provident veniam. Cupiditate fugit sunt delectus praesentium! Id optio ipsum quos atque blanditiis voluptatem numquam dignissimos.</p>
                </Container>
            </>
        );
    }
}