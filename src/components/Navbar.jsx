import {Link} from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
  const {user}=useAuthContext()
  const {isPending, logout} = useLogout()
  return (
    <nav className="navbar navbar-dark bg-dark py-3">
  <div className="container-fluid container">
    <div className='d-flex flex-row align-items-center'>
  <FontAwesomeIcon icon={faUnlockKeyhole} className='fs-3 me-4'style={{color: "#ffffff",}} />
   <h1 className='navbar-brand fs-2 mt-2'>U Passwords</h1>
    </div>
    <div className="d-flex">
      {user &&
      <div>
      <Link className='mx-3 text-light' to='/passwords/saved'>Saved</Link>
      <Link className='mx-3 text-light' to='/passwords/eval'>Check</Link>
      <Link className='mx-3 text-light' to='/passwords/create'>Create</Link>
    {!isPending && <button onClick={logout} className="btn btn-outline-light mx-3">Logout</button>}
    {isPending && <button disabled className="btn btn-outline-light mx-3">Loading...</button>}
      </div>
}
      {!user &&
      <div>
      <Link  className='mx-3 text-light' to='/signup'>Signup</Link>
      <Link   className='mx-3 text-light' to='/login'> Login </Link>
      </div>
}
    </div>
  </div>
</nav>
  )
}
