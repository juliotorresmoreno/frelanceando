
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Form from './Form';
import {
    Container, Badge
} from 'reactstrap';

class _ extends Component {
    state = {
        step: 1
    }
    handleNext = () =>
        this.setState({
            step: this.state.step + 1
        });
    renderStep = ({ step }) => {
        const _step = this.state.step;
        const color = _step >= step ? '#13bedf' : '#cecdcd';
        return (
            <span>
                <div style={{ display: 'inline-block', margin: 0 }}>
                    <div style={{ width: 22, background: color, height: 2, marginTop: -5 }} />
                </div>
                <Badge style={{
                    backgroundColor: color,
                    borderRadius: 10,
                    width: 18, height: 18
                }}>
                    {step}
                </Badge>
            </span>
        );
    }
    render() {
        return (
            <div style={{ minWidth: 767 }}>
                <NavBar />
                <div style={{ backgroundColor: '#f2f2f4' }}>
                    <div style={{ padding: '60px 0 150px 0', zIndex: 100, minHeight: 600 }}>
                        <div style={{
                            background: 'white', borderRadius: 10,
                            boxShadow: '0px 0px 20px #dfdfe0',
                            padding: 25, width: 550, margin: '75px auto 0'
                        }}>
                            <h3 style={{ color: '#13bedf', fontWeight: 'bold', margin: 0 }}>
                                Registrarse
                            </h3>
                            <div>
                                <Badge style={{
                                    backgroundColor: '#13bedf',
                                    borderRadius: 10,
                                    width: 18, height: 18
                                }}>
                                    1
                                    </Badge>
                                <this.renderStep step={2} />
                                <this.renderStep step={3} />
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <Form step={this.state.step} onNext={this.handleNext} />
                            </div>
                        </div>
                    </div>
                    <Container>
                        <hr style={{ margin: 0 }} />
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}

export default _;