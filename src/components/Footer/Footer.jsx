

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Icon } from 'react-fa';
import { Link } from 'react-router-dom';

export default class _ extends React.PureComponent {
    render() {
        return (
            <footer style={{ backgroundColor: '#f2f2f4', minHeight: 250 }}>
                <Container style={{ paddingTop: 50 }}>
                    <Row>
                        <Col md={{ size: 3, offset: 1 }}>
                            <div style={{ color: '#5c5c5c', fontWeight: 'bold', fontSize: 36 }}>
                                Frelance
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ display: 'inline-block' }}>
                                    <Link style={{ color: '#5c5c5c' }} to=''>
                                        <Icon style={{ color: '#5c5c5c', fontSize: 26 }} name='facebook' />
                                    </Link>
                                </li>&nbsp;&nbsp;
                                <li style={{ display: 'inline-block' }}>
                                    <Link style={{ color: '#5c5c5c' }} to=''>
                                        <Icon style={{ color: '#5c5c5c', fontSize: 26 }} name='instagram' />
                                    </Link>
                                </li>&nbsp;&nbsp;
                                <li style={{ display: 'inline-block' }}>
                                    <Link style={{ color: '#5c5c5c' }} to=''>
                                        <Icon style={{ color: '#5c5c5c', fontSize: 26 }} name='twitter' />
                                    </Link>
                                </li>&nbsp;&nbsp;
                                <li style={{ display: 'inline-block' }}>
                                    <Link style={{ color: '#5c5c5c' }} to=''>
                                        <Icon style={{ color: '#5c5c5c', fontSize: 26 }} name='youtube' />
                                    </Link>
                                </li>&nbsp;&nbsp;
                            </ul>
                        </Col>
                        <Col md={{ size: 3 }}>
                            <div style={{ color: '#5c5c5c', fontWeight: 'bold', fontSize: 18 }}>
                                Acerca
                                </div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>
                                    <Link style={{ color: '#5c5c5c' }} to=''>
                                        Politica de privacidad
                                    </Link>
                                </li>
                                <li>
                                    <Link style={{ color: '#5c5c5c' }} to=''>
                                        Terminos de servicio
                                    </Link>
                                </li>
                                <li>
                                    <Link style={{ color: '#5c5c5c' }} to=''>
                                        Sobre nosotros
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col md={{ size: 3 }}>
                            <div style={{ color: '#5c5c5c', fontWeight: 'bold', fontSize: 18 }}>
                                Soporte
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ color: '#5c5c5c' }}>
                                    <Link style={{ color: '#5c5c5c' }} to=''>
                                        Contacto
                                    </Link>
                                </li>
                                <li style={{ color: '#5c5c5c' }}>
                                    <Link style={{ color: '#5c5c5c' }} to=''>
                                        Ayuda
                                    </Link>
                                </li>
                                <li style={{ color: '#5c5c5c' }}>
                                    <Link style={{ color: '#5c5c5c' }} to=''>
                                        Seguridad
                                    </Link>
                                </li>
                                <li style={{ color: '#5c5c5c' }}>
                                    <Link style={{ color: '#5c5c5c' }} to=''>
                                        Ventas y compra de servicio
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}