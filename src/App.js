import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Contact from './components/Contact'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    )
  }
}

export default App;
