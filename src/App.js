import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './context'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/interface/Header'
import Liste from './components/contact/Liste'
import AddContact from './components/contact/AddContact'

class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <div className='App'>
            <Header />
            <div className="container">
              <AddContact />
              <Route exact path='/liste' component={Liste} />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
