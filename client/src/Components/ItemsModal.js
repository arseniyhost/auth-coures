import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from './../store/actions/itemAction';
import PropTypes from 'prop-types';

class ItemModal extends React.Component {
    state = {
        modalEdit: false,
        name: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
      };

    toggle = () => {
        this.setState({
            modalEdit: !this.state.modalEdit
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }

        this.props.addItem(newItem);

        this.toggle();
    }

    render() {
        return (
            <div>
                {this.props.isAuthenticated ? <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Add Item</Button> : <h4 className="mb-3 ml-4">You can add a rew recipe but you need to login or register</h4> }
                

                <Modal
                    isOpen={this.state.modalEdit}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping item"
                                    onChange={this.onChange} />
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }} block
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

let mapStateToProps = state => ({
    recipes: state.recipes,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addItem })(ItemModal);