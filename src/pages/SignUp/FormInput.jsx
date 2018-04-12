
import React from 'react';
import {
    Input, Form, Select
} from 'antd';

export default ({ name, label, type = 'text', children, value, onChange = () => { }, ...rest }) => (
    <div {...rest}>
        <Form.Item label={label}>
            {type !== 'select' ?
                <Input
                    type={type} name={name}
                    id={name} label={label}
                    value={value} onChange={onChange}
                    style={{ borderRadius: 20, height: 30 }} /> :
                <Select
                    type={type} name={name}
                    id={name} label={label}
                    value={value} onChange={onChange}
                    style={{ borderRadius: 20, height: 30 }}>
                    {children}
                </Select>}
        </Form.Item>
    </div>
)
