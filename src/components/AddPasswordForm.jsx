import { useState } from "react"
import { useFirestore } from "../hooks/useFirestore"
import { useAuthContext } from "../hooks/useAuthContext"
export default function AddPasswordForm({password:pass}) {
    const {user} = useAuthContext()
    const [service, setService]= useState('')
    const [password,setPassword]=useState(pass)
    const {addDocument} = useFirestore('passwords')
    const [error, setError]= useState('')
    const [weak, setWeak]= useState(false)
    const [medium, setMedium]= useState(false)
    const [strong, setStrong]= useState(false)
   const handleSubmit=(e)=>{
        e.preventDefault()
        if ( password=='' && !weak && !medium && !strong || (weak && medium && strong) || (weak && medium) || (weak && strong) || (medium && strong) ) {
            setError('Please fill in all fields properly!')
        } else { 
        const doc = {
            service,
            password,
            user: user.uid
        }
        addDocument(doc)
        setService('')
        setPassword('')
        setError('')
        setMedium(false)
        setStrong(false)
        setWeak(false)
      }
    }
  return (
    <div className="row justify-content-center  my-5">
        <div className="col-12 col-md-10 col-lg-8">
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h1>Add New Password</h1>
            <p>Just add the password and what it is for then hit save!</p>
        <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="Login for ..."
        onChange={(e)=>setService(e.target.value)}
        value={service}
        required
        />
         <label htmlFor="floatingInput">What service?</label>
        </div>
        <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        required
        />
        <label htmlFor="floatingPassword">Password?</label>
        </div>
        <p className="mt-3 text-danger ">{error}</p>
        <div className="d-flex flex-column">
        <div className=" form-switch flex justify-content-center">
     <input className="form-check-input" type="checkbox" role="switch" 
      onClick={()=>setWeak(!weak)}
     />
   <label className="form-check-label ms-3" >Use default weak password?</label>
    </div>
    <div className=" form-switch">
  <input className="form-check-input" type="checkbox" role="switch"
  onClick={()=>setMedium(!medium)}
  />
  <label className="form-check-label ms-3" >Use default medium password</label>
</div>
<div className=" form-switch">
  <input className="form-check-input" type="checkbox" role="switch" 
  onClick={()=>setStrong(!strong)}
  />
  <label className="form-check-label ms-3" >Use default strong password</label>
</div>
        </div>
        <div className="d-grid">
        <button className="btn btn-secondary btn-lg my-3">Save</button>
        </div>
        </form>
        </div>
    </div>
  )
}
