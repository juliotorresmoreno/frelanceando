import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse, Navbar,
    NavbarToggler,
    Nav, NavItem,
    Container
} from 'reactstrap';

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
    render() {
        return (
            <div style={{ width: '100%', boxShadow: '0px 5px 20px #dcdcde', marginBottom: 7 }}>
                <Container>
                    <Navbar expand="md">
                        <Link className="navbar-brand" to="/">
                            <span style={{ color: '#13bedf' }}>Free</span>
                            <span style={{ color: '#707070' }}>lance</span>
                        </Link>
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
                                        style={{ color: '#707070' }}>
                                        Freelancers
                                    </Link>
                                </NavItem>
                                <NavItem style={{ marginRight: 20 }}>
                                    <Link
                                        className="nav-link" to="/works"
                                        style={{ color: '#707070' }}>
                                        Trabajos
                                    </Link>
                                </NavItem>
                            </Nav>
                            <Nav className='ml-right' navbar>
                                <NavItem style={{ marginRight: 20 }}>
                                    <Link
                                        className="nav-link" to="/sign-in"
                                        style={{ color: '#707070' }}>
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