import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { usePass } from './usePassContext'
export const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const {changePassword} = usePass()
  const logout = async () => {
    setError(null)
    setIsPending(true)

    try {
      await projectAuth.signOut()
            dispatch({ type: 'LOGOUT' })
            changePassword('')
        setIsPending(false)
        setError(null)
    } 
    catch(err) {

        setError(err.message)
        setIsPending(false)

    }
  }

  return { logout, error, isPending }
}