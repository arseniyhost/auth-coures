import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Container, ListGroup, Button, Row } from 'reactstrap';
import { TransitionGroup } from 'react-transition-group';
import { InputGroup, InputGroupAddon, Input, Spinner } from 'reactstrap';
import style from './List.module.css';

const List = (props) => {
    if(props.loading) {
        return <Spinner style={{ width: '3rem', height: '3rem' }} />
    }

    return (
        <Row>
            <InputGroup>
                <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
                <Input />
            </InputGroup>
            <ListGroup>
                <TransitionGroup className="row mt-3">
                    {
                        props.recipes.map((r) => {
                            return <div className="col-6 col-md-4">
                                <Card className="mb-5" >
                                    <CardImg src={r.urlPhoto} alt={r.title} />
                                    <CardBody>
                                        <CardTitle>
                                            <h3>{r.title}</h3>
                                        </CardTitle>
                                        <CardText>{r.description.substring(0, 20) + " . . ."}</CardText>
                                        <Button>More</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        })
                    }
                </TransitionGroup>
            </ListGroup>
        </Row>
    );
}


export default List;