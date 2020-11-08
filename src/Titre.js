import { Component } from 'react';

class Titre extends Component {
  render() {
    return (
      <h1>Bienvenue {this.props.name}.</h1>
    )
  }
}

export default Titre