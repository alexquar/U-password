import { useState } from "react"

export default function AddPasswordForm() {
    const [service, setService]= useState('')
    const [password,setPassword]=useState('')
    handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={()=> handleSubmit(e)}>
            <h1>Add New Password</h1>
            <p>Just add the password and what it is for then hit save!</p>
        <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="Login for ..."
        onChange={(e)=>setService(e.target.value)}
        value={service}
        required
        />
         <label for="floatingInput">What service?</label>
        </div>
        <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        required
        />
        <label for="floatingPassword">Password?</label>
        </div>
        <button className="btn">Save</button>
        </form>
    </div>
  )
}
