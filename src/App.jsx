import React, { useEffect, useState } from 'react'
import LoginPage from './pages/LoginPage'
import RoomPage from './pages/RoomPage'
import { onAuthStateChanged } from 'firebase/auth'




const App = () => {

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user)
    })
  }, [])

  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />
  return (
    <RoomPage />
  )
}

export default App