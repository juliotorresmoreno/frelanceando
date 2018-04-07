

import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const servicios = [
    {
        title: 'Desarrollo web',
        url: '/img/desarrollo_web.png'
    },
    {
        title: 'Desarrollo movil',
        url: '/img/desarrollo_movil.png'
    },
    {
        title: 'Diseño grafico',
        url: '/img/diseno_grafico.png'
    },
    {
        title: 'Marketing y ventas',
        url: '/img/marketing_ventas.png'
    },
    {
        title: 'Consultores',
        url: '/img/consultores.png'
    },
    {
        title: 'Academia',
        url: '/img/academia.png'
    }
]

export default class _ extends React.PureComponent {
    render() {
        return (
            <div style={{ width: '100%' }}>
                <div style={{ marginTop: 50, textAlign: 'center' }}>
                    <h3 style={{ fontSize: 37, fontWeight: 'bold', color: '#13bedf', margin: 0 }}>
                        Trabaja con un cerebrito
                        </h3>
                    <div style={{ fontSize: 24, margin: 0, color: '#adadad' }}>
                        Pon en marcha tu proyecto
                        </div>
                </div>
                <Container style={{ padding: '40px 0' }}>
                    <Row>
                        {servicios.map((value, index) => (
                            <Col key={index} >
                                <div style={{ margin: '20px 0', textAlign: 'center' }}>
                                    <img alt='' style={{ width: 120 }} src={value.url} />
                                    <div style={{ fontSize: 14, color: '#868686' }}>
                                        {value.title}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}