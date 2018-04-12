import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import App from './components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const Root = class _ extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            document.querySelector("#root").style.display = '';
        }, 200);
    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );
    }
}

document.addEventListener("scroll", function (e) {
    const top = document.body.scrollTop || document.documentElement.scrollTop;
    const g = top / 560;
    let header = document.querySelector('#root > div > div > div.ant-layout-header');
    let p = g > 1 ? 1 : g;
    if (!header) return;
    header.style.backgroundColor = `rgba(19,190,223,${p})`;
});


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
