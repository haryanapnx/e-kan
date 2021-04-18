import ReactDOM from 'react-dom';
import LayoutApp from 'layouts';
import reportWebVitals from './reportWebVitals';
import { reducers } from 'context';
import { Provider, applyMiddleware } from 'libs/stores';
import './assets/scss/global.scss';
import 'antd/dist/antd.css';

const logger = console.log
const md = applyMiddleware(logger);

ReactDOM.render(
  <Provider reducers={reducers} applyMiddleware={md}>
    <LayoutApp />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
