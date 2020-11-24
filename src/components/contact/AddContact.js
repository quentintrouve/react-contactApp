import React, { Component } from 'react'
import {Consumer} from '../../context'

class AddContact extends Component {

  state = {
    nom: '',
    email: '',
    tel: '',
  }

  onChange = event => this.setState({[event.target.name]: event.target.value})

  onSubmit = (dispatch,event) => {
    event.preventDefault()
    const newContact = {
      nom: this.state.nom,
      email: this.state.email,
      tel: this.state.tel,
    }

    dispatch({type: 'ADD_CONTACT', payload: newContact})

    //remise à zéro des input après submit
    this.setState({
      nom: '',
      email: '',
      tel: '',
    })
  }

  render() {
    return (
      <Consumer>
        {value => {
           return (
            <div className='card mb-3'>
              <div className='card-header'>Ajouter un contact</div>
              <div className='card-body'>
                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                  <div className='form-group'>
                    <label htmlFor='nom'>Nom</label>
                    <input
                      type='text'
                      name='nom'
                      placeholder='Ajouter un nom'
                      className='form-control form-control-lg'
                      value={this.state.nom}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='text'
                      name='email'
                      placeholder='Ajouter un email'
                      className='form-control form-control-lg'
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='tel'>Téléphone</label>
                    <input
                      type='text'
                      name='tel'
                      placeholder='Ajouter un téléphone'
                      className='form-control form-control-lg'
                      value={this.state.tel}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type='submit'
                    value='Ajouter un contact'
                    className='btn btn-block btn-primary'
                  />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;
