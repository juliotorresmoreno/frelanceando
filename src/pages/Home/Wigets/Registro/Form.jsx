import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

export default class _ extends React.PureComponent {
	static defaulProps = {
		onChange: () => 0
	}
	state = {
		firstname: '',
		lastname: '',
		password: '',
		email: '',
		active: '',
		phone: '',
		time_zone: '',
		postal_code: '',
		group_id: '',
		location_country: '',
		location_state: '',
		location_city: '',
		location_zone: '',
		avatar: ''
	}
	handleChange = ({ name, value }) => {
		this.setState({
            [name]: value
		});
		this.props
	}
	FormInput = ({ name, label, type = 'text' }) => (
		<FormGroup>
			<Label for={name}>{label}</Label>
			<Input type={type} name={name} id={name} onChange={this.handleChange} />
		</FormGroup>
	)
	render() {
		return (
			<Form>
				<Row>
					<Col>
						<this.FormInput name='firstname' label='Nombres' />
					</Col>
					<Col>
						<this.FormInput name='lastname' label='Apellidos' />
					</Col>
				</Row>
				<this.FormInput name='email' type='email' label='Email' />
				<this.FormInput name='phone' type='phone' label='Telefono' />
				<Row>
					<Col>
						<this.FormInput name='password' label='Contraseña' />
					</Col>
					<Col>
						<this.FormInput name='password_confirmation' label='Confirmar Contraseña' />
					</Col>
				</Row>
			</Form>
		);
	}
}