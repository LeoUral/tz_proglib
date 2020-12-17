import React from 'react';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import NewsBlock from './newsBlock';

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = { renderData: [] };

    }

    async getNews() {
        this.response = await fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/news');
        this.dataNews = await this.response.json();

        this.setState({ renderData: this.dataNews.data });
    };


    componentDidMount() {
        this.getNews();
    }

    render() {
        const arrRender = [];

        this.state.renderData.forEach((elem) => {
            arrRender.push(
                <Fragment key={elem.id}>
                    <NewsBlock
                        title={elem.title}
                        text={elem.text}
                    />
                </Fragment>
            );
        });

        return (
            <>
                <Container>
                    {arrRender}
                </Container>
            </>
        );
    }
}