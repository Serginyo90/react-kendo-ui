import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as kendo from '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';
import { getNames } from './actions/names.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  handleAddName() {
    console.log('handleAddName', this.refInput.value);
    this.props.onAddName(this.refInput.value);
    this.refInput.value = '';
  }

  handleFindName() {
    this.props.onFindName(this.refSearch.value);
    this.refSearch.value = '';
  }
  render() {
    console.log('this.props.names');
    console.log(this.props.names);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <input type='text' ref={(input) => {this.refInput = input}} />
          <button onClick={this.handleAddName.bind(this)}>Add name</button>
        </div>
        <div>
          <input type='text' ref={(input) => {this.refSearch = input}} />
          <button onClick={this.handleFindName.bind(this)}>Find name</button>
        </div>
        <div>
          <button onClick={this.props.onGetNameList}>Get name list</button>
        </div>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.props.names.map((el, i) => 
            <li key={i}>{el.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    names: state.names.filter(el => el.name.includes(state.filterNames))
  }),
  dispatch => ({
    onAddName: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      }
      dispatch({type: 'ADD_NAME', payload});
    },
    onFindName: (name) => {
      dispatch({type: 'FILTER_NAMES', payload: name});
    },
    onGetNameList: () => {
      dispatch(getNames());
    }
  })
)(App);
