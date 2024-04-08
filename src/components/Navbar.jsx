import {Link} from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
export default function Navbar() {
  const {user}=useAuthContext()
  const {isPending, logout} = useLogout()
  return (
    <nav class="navbar navbar-dark bg-dark py-3">
  <div class="container-fluid container">
    <Link class="navbar-brand" to='/'> <h1>U Passwords</h1></Link>
    <div class="d-flex">
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
