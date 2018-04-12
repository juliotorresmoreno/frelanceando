

import React from 'react';
import { Button } from 'antd';
const bannerIcon = '/img/banner.png';

export default class _ extends React.PureComponent {
    render() {
        return (
            <div className="banner">
                <div className='header'>
                    <div className='title'>
                        Crece tu empresa
                    </div>
                    <div style={{ color: 'white', fontSize: 22.5, marginTop: 8 }}>
                        <div style={{ marginBottom: 17 }}>
                            Encuentra soluciones con freelancers
                        </div>
                        <Button style={{
                            width: 170, border: '2px solid white',
                            borderRadius: 20, cursor: 'pointer',
                            fontWeight: 'bold',
                            height: 43, color: 'white',
                            background: '#13bedf',
                            fontSize: 20
                        }}>
                            Ver tienda
                        </Button>
                        &nbsp;
                        <Button style={{
                            marginLeft: 20,
                            width: 230,
                            borderRadius: 20, cursor: 'pointer',
                            fontWeight: 'bold',
                            height: 43, color: 'white',
                            background: '#ffbe4b',
                            border: 0,
                            fontSize: 20
                        }}>
                            Publicar trabajo
                        </Button>
                    </div>
                </div>
                <img alt="" src={bannerIcon} style={{ width: '100%' }} />
            </div>
        );
    }
}