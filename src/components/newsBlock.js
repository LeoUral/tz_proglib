import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

export default function NewsBlock(props) {

    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h5>{props.title}</h5>
                    <p> </p>
                    <p>{props.text}</p>
                </Container>
            </Jumbotron>
        </>
    );
}