import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse, Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav, NavItem,
    Container
} from 'reactstrap';
//import Registro from '../Registro'

export default class _ extends React.Component {
    state = {
        isOpen: false,
        register: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    /*handleToggleRegister = () => {
        this.setState({
            register: !this.state.register
        });
    }*/
    render() {
        //const register = this.state.register;
        //const toggleRegister = this.handleToggleRegister;
        return (
            <div style={{ position: 'absolute', width: '100%' }}>
                <Container>
                    <Navbar color='dark' dark expand="md">
                        <NavbarBrand href="/">Freelance</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem style={{ marginRight: 20 }}>
                                    <Link
                                        className="nav-link" to="/categories"
                                        style={{ color: 'white' }}>
                                        Categorias
                                    </Link>
                                </NavItem>
                                <NavItem style={{ marginRight: 20 }}>
                                    <Link
                                        className="nav-link" to="/freelancers"
                                        style={{ color: 'white' }}>
                                        Freelancers
                                    </Link>
                                </NavItem>
                                <NavItem style={{ marginRight: 20 }}>
                                    <Link
                                        className="nav-link" to="/works"
                                        style={{ color: 'white' }}>
                                        Trabajos
                                    </Link>
                                </NavItem>
                            </Nav>
                            <Nav className='ml-right' navbar>
                                <NavItem style={{ marginRight: 20 }}>
                                    <Link
                                        className="nav-link" to="/sign-in"
                                        style={{ color: 'white' }}>
                                        Ingresar
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link
                                        className="nav-link" to="/sign-up"
                                        onClick={this.handleToggleRegister}
                                        style={{
                                            borderRadius: 20, width: 150,
                                            backgroundColor: '#ffbe4b',
                                            textAlign: 'center',
                                            color: 'white'
                                        }}>
                                        Registrarse
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
                {/*<Registro open={register} toggle={toggleRegister} />*/}
            </div >
        );
    }
}