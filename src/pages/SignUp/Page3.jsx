
import React, { Component } from 'react';
import { Row, Col, Select } from 'antd';
import FormInput from './FormInput';

const Option = Select.Option;

class _ extends Component {
    static defaultProps = {
        activeTab: 0,
        toggle: () => () => { },
        onNext: () => { },
        onChange: () => { }
    }
    render() {
        const { trabajo, onChange } = this.props;
        return (
            <div>
                <Row>
                    <Col>
                        <FormInput
                            name='trabajo' type='select'
                            onChange={(value) => onChange({
                                target: {
                                    name: 'trabajo',
                                    value: value
                                }
                            })}
                            value={trabajo}
                            label='Profesion o categoria en la que trabajas'>
                            <Option value="1">Trabajo 1</Option>
                            <Option value="2">Trabajo 2</Option>
                            <Option value="3">Trabajo 3</Option>
                        </FormInput>
                    </Col>
                </Row>
                <div style={{ marginTop: 5, textAlign: 'center' }}>
                    <button
                        type='submit'
                        disabled={!trabajo}
                        style={{
                            marginTop: 22,
                            width: 150,
                            backgroundColor: !trabajo ? '#CCC' : '#ffbe4b',
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
    }
}

export default _;