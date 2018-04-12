
import React, { Component } from 'react';
import { Form } from 'antd';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { actionsCreators as actionsCreators0 } from '../../actions/messages';
import { actionsCreators as actionsCreators1 } from '../../actions/auth';
import { connect } from 'react-redux';

const mapProps = (state) => ({

});

class _ extends Component {
    static defaultProps = {
        onNext: () => { }
    }
    state = {
        activeTab: 0,
        contrato: false,
        firstname: "",
        lastname: "",
        password: "",
        username: "",
        email: "",
        active: 1,
        phone: "",
        pais: '',
        trabajo: '',
        time_zone: "bogota/colombia",
        postal_code: "08000",
        group_id: 1,
    }
    handleChange = ({ target: { name, value, checked } }) =>
        this.setState({
            [name]: value || checked
        });
    toggle = (tab) => () =>
        this.setState({
            activeTab: tab
        });
    handleSubmit = (e) => {
        e.preventDefault();
        const {
            firstname, lastname, password,
            password: password_confirmation,
            email, active, phone, time_zone,
            postal_code, group_id
        } = this.state;
        const data = {
            firstname, lastname, password,
            password_confirmation, email,
            active, phone, time_zone,
            postal_code, group_id
        };
        const action = this.state.activeTab === 1 ? 'register' : 'registerUser';
        this.props[action](data)
            .then(() => {
                this.props.info("Creado correctamente");
            })
            .catch((error) => {
                if (!error.success) {
                    if (error.messages && error.messages.length) {
                        const keys = Object.keys(error.messages[0]);
                        this.props.alert(error.messages[0][keys[0]][0]);
                        this.setState({
                            errors: error.messages[0]
                        });
                    } else if (error.message) {
                        this.props.alert(error.message);
                    } else {
                        console.log(error);
                        this.props.alert("Ocurrio un error desconocido.");
                    }
                }
            });
    }
    render() {
        const { firstname, lastname, email } = this.state;
        const { pais, password, contrato, activeTab } = this.state;
        const { trabajo } = this.state;
        const { onNext } = this.props;
        const toggle = this.toggle;
        return (
            <Form onSubmit={this.handleSubmit}>
                {this.props.step === 1 ?
                    <Page1
                        firstname={firstname}
                        lastname={lastname}
                        email={email}
                        onNext={onNext}
                        onChange={this.handleChange} /> : false}
                {this.props.step === 2 ?
                    <Page2
                        pais={pais}
                        toggle={toggle}
                        password={password}
                        contrato={contrato}
                        activeTab={activeTab}
                        onNext={onNext}
                        onChange={this.handleChange} /> : false}
                {this.props.step === 3 ?
                    <Page3
                        trabajo={trabajo}
                        onChange={this.handleChange}
                    /> : false}
            </Form>
        );
    }
}
export default connect(mapProps, {
    ...actionsCreators0,
    ...actionsCreators1
})(_);