import { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
