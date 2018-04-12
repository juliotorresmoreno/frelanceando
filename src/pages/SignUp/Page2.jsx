
import React, { Component } from 'react';
import { Row, Col, Select, Checkbox, Button } from 'antd';
import FormInput from './FormInput';
import classnames from 'classnames';

const Option = Select.Option;

class _ extends Component {
    static defaultProps = {
        activeTab: 0,
        toggle: () => () => { },
        onNext: () => { },
        onChange: () => { }
    }
    render() {
        const { pais, password, contrato, username, activeTab, onChange } = this.props;
        const state = !(
            pais && password && contrato && (activeTab === 2 || (activeTab === 1 && username))
        );
        return (
            <div>
                <Row>
                    <Col md={{ span: 12 }}>
                        <FormInput
                            name='pais' label='Pais'
                            type='select' value={pais}
                            onChange={(value) => onChange({
                                target: {
                                    name: 'pais',
                                    value: value
                                }
                            })}
                            style={{ marginRight: 10, borderRadius: 20 }} >
                            <Option value="colombia">Colombia</Option>
                            <Option value="chile">Chile</Option>
                        </FormInput>
                    </Col>
                    <Col md={{ span: 12 }}>
                        <FormInput
                            name='password'
                            label='Contraseña'
                            type='password'
                            onChange={onChange}
                            value={password}
                            style={{ marginLeft: 10 }} />
                    </Col>
                </Row>
                <h5 style={{ color: '#13bedf', textAlign: 'center' }}>Deseo</h5>
                <div style={{ margin: '0 auto 20px', textAlign: 'center' }}>
                    <Button
                        type='button'
                        onClick={this.props.toggle(1)}
                        className={classnames({ active: this.props.activeTab === 1 })}
                        style={{
                            width: 150,
                            border: 0, height: 30,
                            boxShadow: '0px 0px 10px #CCC',
                            color: this.props.activeTab === 1 ? 'white' : '#737373',
                            background: this.props.activeTab === 1 ? '#13bedf' : 'white'
                        }}>
                        Freelancer
                    </Button>
                    <Button
                        type='button'
                        onClick={this.props.toggle(2)}
                        className={classnames({ active: this.props.activeTab === 2 })}
                        style={{
                            width: 150,
                            border: 0, height: 30,
                            boxShadow: '0px 0px 10px #CCC',
                            color: this.props.activeTab === 2 ? 'white' : '#737373',
                            background: this.props.activeTab === 2 ? '#13bedf' : 'white'
                        }}>
                        Contratar
                    </Button>
                </div>
                {this.props.activeTab === 1 ?
                    <Row>
                        <Col md={{ offset: 3, size: 6 }}>
                            <FormInput
                                name='username'
                                label='Usuario'
                                value={username}
                                onChange={onChange} />
                        </Col>
                    </Row> : false}
                <Row>
                    <Col md={{ size: 10, offset: 1 }}>
                        <div style={{ fontSize: 11, lineHeight: '120%' }}>
                            <Checkbox
                                name='contrato'
                                checked={contrato}
                                onChange={onChange} />&nbsp;
                            Entiendo y acepto los terminos de servicio,
                            incluido el acuerdo del usuario final y la
                            politica de privacidad
                        </div>
                    </Col>
                </Row>
                <div style={{ marginTop: 20, textAlign: 'center' }}>
                    <Button
                        type='button'
                        onClick={this.props.onNext}
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
                    </Button>
                </div>
            </div>
        );
    }
}

export default _;