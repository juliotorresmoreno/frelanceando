

import React from 'react';
import { Row, Col } from 'reactstrap';
import './index.css';

export default class _ extends React.PureComponent {
    render() {
        return (
            <div className='explore' style={{}}>
                <div className='container'>
                    <Row>
                        <Col md={{ offset: 6, size: 6 }} xs={{ offset: 6, size: 6 }}>
                            <div className='title'>
                                Tienda de servicios
                            </div>
                        </Col>
                        <Col md={{ offset: 6, size: 6 }} xs={{ offset: 6, size: 6 }}>
                            <div className='subtitle'>
                                Selecciona los productos que necesitas a un precio y tiempo fijo
                            </div>
                        </Col>
                        <Col md={{ offset: 6, size: 6 }} xs={{ offset: 6, size: 6 }}>
                            <button>
                                Explorar
                            </button>
                        </Col>
                    </Row>
                </div>
                <img alt="" style={{ width: '100%', minWidth: 767 }} src='/img/explorar.png' />
            </div>
        );
    }
}