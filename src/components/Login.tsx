import React from 'react'
import type { UserI } from '../types/userType'

type LoginProps = {
  onSubmit: (data: UserI) => void
  onSwitchMode: () => void
}

const Login = ({ onSubmit, onSwitchMode }: LoginProps) => {
  return <div>Login</div>
}

export default Login
