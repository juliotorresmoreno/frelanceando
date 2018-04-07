

import React from 'react';

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
                        <button style={{
                            width: 170,
                            borderRadius: 20,
                            fontWeight: 'bold',
                            height: 43, color: 'white',
                            background: '#13bedf'
                        }}>
                            Ver tienda
                        </button>&nbsp;
                        <button style={{
                            marginLeft: 20,
                            width: 230,
                            borderRadius: 20,
                            fontWeight: 'bold',
                            height: 43, color: 'white',
                            background: '#ffbe4b'
                        }}>
                            Publicar trabajo
                        </button>
                    </div>
                </div>
                <img alt="" src='/img/banner.png' style={{ width: '100%' }} />
            </div>
        );
    }
}