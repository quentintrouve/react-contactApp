import { Component } from 'react';

class Titre extends Component {
  render() {
    return (
      <>
      <h1>Bienvenue {this.props.name}.</h1>
      <h2>{this.props.children}</h2>
      </>
    )
  }
}

export default Titre