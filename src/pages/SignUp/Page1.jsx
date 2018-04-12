
import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import FormInput from './FormInput';

class _ extends Component {
    static defaultProps = {
        firstname: '',
        lastname: '',
        email: '',
        onNext: () => {},
        onChange: () => {}
    }
    render() {
        const state = !(this.props.firstname && this.props.lastname && this.props.email);
        const { firstname, lastname, email } = this.props;
        return (
            <div>
                <Row>
                    <Col md={12}>
                        <FormInput
                            name='firstname'
                            label='Nombres'
                            value={firstname}
                            onChange={this.props.onChange}
                            style={{ marginRight: 10 }} />
                    </Col>
                    <Col md={{ span: 12 }}>
                        <FormInput
                            name='lastname'
                            label='Apellidos'
                            value={lastname}
                            onChange={this.props.onChange}
                            style={{ marginLeft: 10 }} />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 16 }}>
                        <FormInput
                            name='email' label='Email'
                            type='email' value={email}
                            onChange={this.props.onChange}
                            style={{ marginRight: 10 }} />
                    </Col>
                    <Col md={{ span: 8 }}>
                        <Button
                            type='button'
                            onClick={() => this.props.onNext()}
                            disabled={state}
                            style={{
                                backgroundColor: state ? '#CCC' : '#ffbe4b',
                                marginTop: 24,
                                width: '100%',
                                borderRadius: 20,
                                border: 0,
                                color: 'white',
                                cursor: 'pointer',
                                marginLeft: 10
                            }}>
                            Continuar
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default _;