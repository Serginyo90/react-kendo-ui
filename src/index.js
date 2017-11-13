import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css';
import Menu from './Menu';
import App from './App'
import About from './About'
import GridTable from './Grid'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

registerServiceWorker();

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Menu/>
          <Route exact={true} path='/' component={App}/>
          <Route path='/about' component={About}/>
          <Route path='/grid' component={GridTable}/>
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
);