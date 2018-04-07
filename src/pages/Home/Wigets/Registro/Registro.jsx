/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { actionsCreators as actionsCreators0 } from '../../../../actions/messages';
import { actionsCreators as actionsCreators1 } from '../../../../actions/auth';
import { connect } from 'react-redux';

const defaultStyles = {
    submit: {
        background: '#13bedf',
        border: 0,
        color: 'white'
    }
};

const mapProps = (state) => ({

});

class _ extends React.Component {
    static defaultProps = {
        open: false,
        toggle: () => 0
    }

    state = {
        modal: false,
        firstname: "",
        lastname: "",
        password: "",
        password_confirmation: "",
        email: "",
        active: 1,
        phone: "",
        time_zone: "bogota/colombia",
        postal_code: "08000",
        group_id: 1,
        errors: {}
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
            errors: {
                ...this.state.errors,
                [name]: ''
            }
        });
    }
    FormInput = ({ name, label, type = 'text' }) => (
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Input
                type={type} name={name} id={name}
                onChange={this.handleChange}
                value={this.state[name]} />
            {this.state.errors[name] ?
                <p className="text-danger">
                    {this.state.errors[name]}
                </p> :
                false}
        </FormGroup>
    )
    handleSubmit = () => {
        const {
            firstname, lastname, password,
            password_confirmation, email,
            active, phone, time_zone,
            postal_code, group_id
        } = this.state;
        const data = {
            firstname, lastname, password,
            password_confirmation, email,
            active, phone, time_zone,
            postal_code, group_id
        };
        this.props.register(data)
            .then(() => {
                this.props.info("Creado correctamente");
                this.props.toggle();
            })
            .catch((error) => {
                if (!error.success) {
                    if(error.messages && error.messages.length) {
                        this.setState({
                            errors: error.messages[0]
                        });
                    } else if (error.message) {
                        this.props.alert(error.message);
                    } else {
                        console.log(error);
                        this.props.alert("Ocurrio un error desconocido.");
                    }
                }
            });
    }
    render() {
        const { open, toggle } = this.props;
        return (
            <Modal isOpen={open} toggle={toggle} className='register'>
                <ModalHeader toggle={toggle}>Registrese</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col>
                                <this.FormInput name='firstname' label='Nombres' />
                            </Col>
                            <Col>
                                <this.FormInput name='lastname' label='Apellidos' />
                            </Col>
                        </Row>
                        <this.FormInput name='email' type='email' label='Email' />
                        <this.FormInput name='phone' type='phone' label='Telefono' />
                        <Row>
                            <Col>
                                <this.FormInput name='password' label='Contraseña' />
                            </Col>
                            <Col>
                                <this.FormInput name='password_confirmation' label='Confirmar Contraseña' />
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        style={defaultStyles.submit}
                        onClick={this.handleSubmit}>
                        Registrarme
                    </Button>{' '}
                    <Button color="" onClick={toggle}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default connect(mapProps, {
    ...actionsCreators0,
    ...actionsCreators1
})(_);