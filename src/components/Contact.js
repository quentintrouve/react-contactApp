import React, { Component } from 'react'

class Contact extends Component {

  state = {
    show: true
  }

  showContact = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  render() {
    return (
      <div className='card card-body mb-3 text-center'>
        <h4>{this.props.nom}&nbsp; <i className={this.state.show ? 'fas fa-caret-up' : 'fas fa-caret-down'} onClick={this.showContact} style={{cursor: 'pointer'}}></i></h4>
        {this.state.show ? (
          <ul className='card card-body mb-3'>
            <li className='list-group-item'>
              Email : {this.props.email}
            </li>
            <li className='list-group-item'>
              Téléphone : {this.props.tel}
            </li>
          </ul>) : null}
      </div>
    )
  }
}

export default Contact;
