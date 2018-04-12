import React from 'react';
import { Menu, Layout, Row, Col } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './index.css';

const menus = [
    { key: "categorias", name: "Categorias" },
    { key: "freelancers", name: "Freelancers" },
    { key: "trabajos", name: "Trabajos" },
    { key: "ingresar", name: "Ingresar" }
];

class _ extends React.Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        if (e.key === 'registrarse') {
            this.props.history.push("/sign-up");
        } else {
            this.props.history.push(`/${e.key}`);
        }
    }
    render() {
        return (
            <Layout.Header style={{
                position: 'fixed',
                backgroundColor: 'rgba(0,0,0,0)',
                width: '100%', height: 80,
                zIndex: 100
            }}>
                <Row>
                    <Col md={{ span: 4, offset: 2 }} style={{ height: 80 }}>
                        <Link
                            to="/"
                            style={{
                                fontSize: 36,
                                color: 'white',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                marginTop: 10
                            }}>
                            Freelance
                        </Link>
                    </Col>
                    <Col md={{ span: 14, offset: 2 }} style={{ height: 80 }}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            style={{
                                backgroundColor: 'rgba(0,0,0,0)',
                                float: 'right', border: 0
                            }}
                        >
                            {menus.map((value) => (
                                <Menu.Item
                                    key={value.key}
                                    style={{
                                        fontSize: '1rem',
                                        color: 'white',
                                        paddingTop: 17
                                    }}>
                                    {value.name}
                                </Menu.Item>
                            ))}
                            <Menu.Item
                                key="registrarse"
                                
                                style={{
                                    marginTop: 21,
                                    borderRadius: 20, width: 150,
                                    border: 0,
                                    backgroundColor: '#ffbe4b',
                                    textAlign: 'center', color: 'white',
                                    lineHeight: '35px', height: 35,
                                }}>
                                Registrarse
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Layout.Header>
        );
    }
};

export default withRouter(_);