
import React from 'react';
import {
    Input, Form, Select
} from 'antd';

export default ({ name, label, type = 'text', children, value, onChange = () => { }, ...rest }) => (
    type !== 'select' ?
        <div {...rest}>
            <Form.Item label={label}>
                <Input
                    type={type} name={name}
                    id={name} label={label} 
                    value={value} onChange={onChange}
                    style={{ borderRadius: 20, height: 30 }}/>
            </Form.Item>
        </div> :
        <div {...rest}>
            <Form.Item label={label}>
                <Select
                    type={type} name={name}
                    id={name} label={label}
                    value={value} onChange={onChange}
                    style={{ borderRadius: 20, height: 30 }}>
                    {children}
                </Select>
            </Form.Item>
        </div>
)

/*
import React from 'react';
import {
    FormGroup, Label, Input
} from 'reactstrap';

export default ({ name, label, type = 'text', children, onChange = () => { }, ...rest }) => (
    <FormGroup {...rest}>
        <Label
            for={name}
            style={{ marginBottom: 0 }}>
            {label}
        </Label>
        <Input
            type={type} name={name} id={name}
            style={{ borderRadius: 20, height: 30 }}>
            {children}
        </Input>
    </FormGroup>
);
*/