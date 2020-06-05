import React from 'react';
import logo from './assets/wc3_logo.png';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            WC3
          </h1>
        </header>
      </Layout>
    </div>
  );
}

export default App;
