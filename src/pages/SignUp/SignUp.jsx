
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import {
    Container, Row, Col, Badge,
    Form, FormGroup, Label,
    Input
} from 'reactstrap';
import { actionsCreators as actionsCreators0 } from '../../actions/messages';
import { actionsCreators as actionsCreators1 } from '../../actions/auth';
import { connect } from 'react-redux';
import classnames from 'classnames';

const mapProps = (state) => ({

});

class _ extends Component {
    state = {
        step: 1,
        activeTab: null,

        contrato: false,
        firstname: "",
        lastname: "",
        password: "",
        username: "",
        email: "",
        active: 1,
        phone: "",
        pais: '',
        time_zone: "bogota/colombia",
        postal_code: "08000",
        group_id: 1,
        errors: {}
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {
            firstname, lastname, password,
            password: password_confirmation,
            email, active, phone, time_zone,
            postal_code, group_id
        } = this.state;
        const data = {
            firstname, lastname, password,
            password_confirmation, email,
            active, phone, time_zone,
            postal_code, group_id
        };
        const action = this.state.activeTab === 1 ? 'register': 'registerUser';
        this.props[action](data)
            .then(() => {
                this.props.info("Creado correctamente");
            })
            .catch((error) => {
                if (!error.success) {
                    if (error.messages && error.messages.length) {
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
    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        });
    }
    toggle = (tab) => () => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    renderStep = ({ step }) => {
        const _step = this.state.step;
        const color = _step >= step ? '#13bedf' : '#cecdcd';
        return (
            <span>
                <div style={{ display: 'inline-block', margin: 0 }}>
                    <div style={{ width: 22, background: color, height: 2, marginTop: -5 }} />
                </div>
                <Badge style={{
                    backgroundColor: color,
                    borderRadius: 10,
                    width: 18, height: 18
                }}>
                    {step}
                </Badge>
            </span>
        );
    }
    handleNext = () => {
        this.setState({
            step: this.state.step + 1
        });
    }
    FormInput = ({ name, label, type = 'text', children }) => (
        <FormGroup>
            <Label
                for={name}
                style={{ marginBottom: 0 }}>
                {label}
            </Label>
            <Input
                type={type} name={name} id={name}
                style={{ borderRadius: 20, height: 30 }}
                onChange={this.handleChange}>
                {children}
            </Input>
        </FormGroup>
    )
    renderPage1 = () => {
        const state = !(this.state.firstname && this.state.lastname && this.state.email)
        return (
            <div>
                <Row>
                    <Col>
                        <this.FormInput name='firstname' label='Nombres' />
                    </Col>
                    <Col>
                        <this.FormInput name='lastname' label='Apellidos' />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 8 }}>
                        <this.FormInput name='email' label='Email' type='email' />
                    </Col>
                    <Col>
                        <button
                            type='button'
                            onClick={this.handleNext}
                            disabled={state}
                            style={{
                                backgroundColor: state ? '#CCC' : '#ffbe4b',
                                marginTop: 22,
                                width: '100%',
                                borderRadius: 20,
                                border: 0, height: 30,
                                color: 'white',
                                cursor: 'pointer'
                            }}>
                            Continuar
                    </button>
                    </Col>
                </Row>
            </div>
        );
    }
    renderPage2 = () => {
        const state = !(
            this.state.pais &&
            this.state.password &&
            this.state.contrato &&
            (
                this.state.activeTab === 2 ||
                (
                    this.state.activeTab === 1 &&
                    this.state.username
                )
            )
        );
        return (
            <div>
                <Row>
                    <Col>
                        <this.FormInput name='pais' label='Pais' type='select'>
                            <option value="colombia">Colombia</option>
                            <option value="chile">Chile</option>
                        </this.FormInput>
                    </Col>
                    <Col>
                        <this.FormInput name='password' label='Contraseña' type='password' />
                    </Col>
                </Row>
                <h5 style={{ color: '#13bedf', textAlign: 'center' }}>Deseo</h5>
                <div style={{ margin: '0 auto 20px', textAlign: 'center' }}>
                    <button
                        type='button'
                        onClick={this.toggle(1)}
                        style={{
                            width: 150,
                            border: 0, height: 30,
                            boxShadow: '0px 0px 10px #CCC',
                            color: this.state.activeTab === 1 ? 'white' : '#737373',
                            background: this.state.activeTab === 1 ? '#13bedf' : 'white'
                        }}>
                        Freelancer
                </button>
                    <button
                        type='button'
                        onClick={this.toggle(2)}
                        className={classnames({ active: this.state.activeTab === 2 })}
                        style={{
                            width: 150,
                            border: 0, height: 30,
                            boxShadow: '0px 0px 10px #CCC',
                            color: this.state.activeTab === 2 ? 'white' : '#737373',
                            background: this.state.activeTab === 2 ? '#13bedf' : 'white'
                        }}>
                        Contratar
                </button>
                </div>
                {this.state.activeTab === 1 ?
                    <Row>
                        <Col md={{ offset: 3, size: 6 }}>
                            <this.FormInput name='username' label='Usuario' />
                        </Col>
                    </Row> : false}
                <Row>
                    <Col md={{ size: 10, offset: 1 }}>
                        <Input
                            type='checkbox' name='contrato'
                            onChange={this.handleChange} />
                        <div style={{ fontSize: 11, lineHeight: '120%' }}>
                            Entiendo y acepto los terminos de servicio,
                            incluido el acuerdo del usuario final y la
                            politica de privacidad
                    </div>
                    </Col>
                </Row>
                <div style={{ marginTop: 20, textAlign: 'center' }}>
                    <button
                        type='button'
                        onClick={this.handleNext}
                        disabled={state}
                        style={{
                            backgroundColor: state ? '#CCC' : '#ffbe4b',
                            marginTop: 22,
                            width: 150,
                            borderRadius: 20,
                            border: 0, height: 30,
                            color: 'white',
                            cursor: 'pointer',
                            margin: '0 auto'
                        }}>
                        Continuar
                </button>
                </div>
            </div>
        );
    }
    renderPage3 = () => (
        <div>
            <Row>
                <Col>
                    <this.FormInput name='trabajo' label='Profesion o categoria en la que trabajas' type='select'>
                        <option>Trabajo 1</option>
                        <option>Trabajo 2</option>
                        <option>Trabajo 3</option>
                    </this.FormInput>
                </Col>
            </Row>
            <div style={{ marginTop: 5, textAlign: 'center' }}>
                <button
                    type='submit'
                    style={{
                        marginTop: 22,
                        width: 150,
                        backgroundColor: '#ffbe4b',
                        borderRadius: 20,
                        border: 0, height: 30,
                        color: 'white',
                        cursor: 'pointer',
                        margin: '0 auto',
                        fontWeight: 'bold'
                    }}>
                    Finalizar
                </button>
            </div>
        </div>
    );
    render() {
        return (
            <div style={{ minWidth: 767 }}>
                <NavBar />
                <div style={{ backgroundColor: '#f2f2f4' }}>
                    <div style={{ padding: '60px 0 150px 0', zIndex: 100, minHeight: 600 }}>
                        <div style={{
                            background: 'white', borderRadius: 10,
                            boxShadow: '0px 0px 20px #dfdfe0',
                            padding: 25, width: 550, margin: '75px auto 0'
                        }}>
                            <h3 style={{ color: '#13bedf', fontWeight: 'bold', margin: 0 }}>
                                Registrarse
                                </h3>
                            <div>
                                <Badge style={{
                                    backgroundColor: '#13bedf',
                                    borderRadius: 10,
                                    width: 18, height: 18
                                }}>
                                    1
                                    </Badge>
                                <this.renderStep step={2} />
                                <this.renderStep step={3} />
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <Form onSubmit={this.handleSubmit}>
                                    {this.state.step === 1 ?
                                        this.renderPage1() : false}
                                    {this.state.step === 2 ?
                                        this.renderPage2() : false}
                                    {this.state.step === 3 ?
                                        this.renderPage3() : false}
                                </Form>
                            </div>
                        </div>
                    </div>
                    <Container>
                        <hr style={{ margin: 0 }} />
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}

export default connect(mapProps, {
    ...actionsCreators0,
    ...actionsCreators1
})(_);