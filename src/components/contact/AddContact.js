import React, { Component } from 'react'

class AddContact extends Component {

  state = {
    nom: '',
    email: '',
    tel: '',
  }

  onChange = event => this.setState({[event.target.name]: event.target.value})

  onSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className='card mb-3'>
        <div className='card-header'>Ajouter un contact</div>
        <div className='card-body'>
          <form onSubmit={this.onSubmit}>
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
  }
}

export default AddContact;
