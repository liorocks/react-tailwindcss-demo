import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <header className="bg-purple-darker m-6 p-6 rounded shadow-lg">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-white text-3xl">Welcome to React</h1>
        </header>
        <div className="text-base pt-4">
          <a
            className="bg-purple-darker text-white p-3 rounded no-underline hover:bg-purple-dark mr-2"
            href="https://medium.com/@Landish/how-to-use-tailwind-css-with-react-16e9d478b8b1"
            target="_blank"
          >
            Post on Medium
          </a>
          <a
            className="bg-purple-darker text-white p-3 rounded no-underline hover:bg-purple-dark ml-2"
            href="https://github.com/Landish/react-tailwindcss-demo"
            target="_blank"
          >
            Source on Github
          </a>
        </div>
      </div>
    );
  }
}

export default App;
