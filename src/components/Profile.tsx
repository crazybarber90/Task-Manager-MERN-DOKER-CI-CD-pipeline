import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { BACK_BUTTON } from '../assets/dummy'
import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import type { UserI } from '../types/userType'

const API_URL = 'http://localhost:4000'

type ProfileProps = {
  setCurrentUser: React.Dispatch<React.SetStateAction<UserI | null>>
  onLogout: () => void
}

type SingleProfileUser = {
  name: string
  email: string
}
const INIT_PROFILE: SingleProfileUser = {
  name: '',
  email: '',
}

type Passwords = {
  current: string
  new: string
  confirm: string
}
const INIT_PASSWORDS: Passwords = {
  current: '',
  new: '',
  confirm: '',
}

const Profile = ({ setCurrentUser, onLogout }: ProfileProps) => {
  const [profile, setProfile] = useState<SingleProfileUser>(INIT_PROFILE)
  const [password, setPassword] = useState<Passwords>(INIT_PASSWORDS)
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="max-w-4xl mx-auto p-6">
        <button className={BACK_BUTTON} onClick={() => navigate(-1)}>
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to dashboard
        </button>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-linear-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
            \{}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
