

import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const pasos = [
    {
        title: 'Busca',
        descripcion: `Crea un perfil con tu portafolio.
                      Busca ofertas y postulate en el 
                      proyecto que mas  te guste`,
        url: '/img/lupa.png'
    },
    {
        title: 'Ofrece',
        descripcion: `Sube los servicios que ofreces con 
                      los precios que quieras para que 
                      puedas ser elegido dentro del 
                      catalogo de servicios`,
        url: '/img/ofrece.png'

    },
    {
        title: 'Contrata',
        descripcion: `Postula tu oferta de trabajo para 
                      que muchos cerebritos se postulen 
                      o elige el experto que mas te guste.`,
        url: '/img/contrata.png'
    },
    {
        title: 'Pagos',
        descripcion: `La facturacion y los pagos se 
                      realizaran dentro de la plataforma.
                      Te garantizamos que recibiras tus pagos
                      a tiempo.`,
        url: '/img/pagos.png'
    }
]

export default class _ extends React.PureComponent {
    render() {
        return (
            <div style={{}}>
                <div style={{ marginTop: 90, textAlign: 'center' }}>
                    <h3 style={{ fontSize: 37, fontWeight: 'bold', color: '#13bedf', margin: 0 }}>
                        Como funciona
                        </h3>
                </div>

                <Container style={{ padding: '40px 0' }}>
                    <Row>
                        {pasos.map((value, index) => (
                            <Col key={index} md={3} sm={6} xs={12}>
                                <div style={{
                                    margin: '40px 0',
                                    textAlign: 'center',
                                    boxShadow: '0 0 5px #d0d0d0',
                                    borderRadius: 10
                                }}>
                                    <img alt='' style={{ width: 100, marginTop: -50 }} src={value.url} />
                                    <div style={{ margin: 20, paddingBottom: 20 }}>
                                        <div style={{ fontSize: 24, color: '#5c5c5c' }}>
                                            {value.title}
                                        </div>
                                        <div style={{ fontSize: 14, color: '#868686' }}>
                                            {value.descripcion}
                                        </div>
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