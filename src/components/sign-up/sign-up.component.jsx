import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-btn/custom-btn.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import React, { Component } from 'react'

class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            label='Display Name'
            type='text'
            name='displayName'
            value={displayName}
            required
          />
          <FormInput
            onChange={this.handleChange}
            label='Email'
            type='email'
            name='email'
            value={email}
            required
          />
          <FormInput
            onChange={this.handleChange}
            label='Password'
            type='password'
            name='password'
            value={password}
            required
          />
          <FormInput
            onChange={this.handleChange}
            label='Confirm Password'
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
