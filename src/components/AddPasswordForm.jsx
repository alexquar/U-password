import { useState } from "react"

export default function AddPasswordForm() {
    const [service, setService]= useState('')
    const [password,setPassword]=useState('')
   const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className="row justify-content-center  my-5">
        <div className="col-6">
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h1>Add New Password</h1>
            <p>Just add the password and what it is for then hit save!</p>
        <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="Login for ..."
        onChange={(e)=>setService(e.target.value)}
        value={service}
        required
        />
         <label for="floatingInput">What service?</label>
        </div>
        <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        required
        />
        <label for="floatingPassword">Password?</label>
        </div>
        <div className="d-grid">
        <button className="btn btn-secondary btn-lg my-3">Save</button>
        </div>
        </form>
        </div>
    </div>
  )
}
