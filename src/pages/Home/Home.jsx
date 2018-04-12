
import React, { Component } from 'react';
import Funcionamiento from './Wigets/Funcionamiento';
import Servicios from './Wigets/Servicios';
import Explorar from './Wigets/Explorar';
import NavBar from './Wigets/NavBar';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';

class _ extends Component {
	render() {
		return (
			<div style={{ minWidth: 767 }}>
				<NavBar />
				<Banner />
				<Servicios />
				<Explorar />
				<Funcionamiento />
				<Footer />
			</div>
		);
	}
}

export default _;