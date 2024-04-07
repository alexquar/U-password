import { useState } from "react"

export default function Signup() {
  const [password, setPassword]= useState('')
  const [email,setEmail]= useState('')
  const [displayName, setDisplayName]= useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container text-center py-5 my-5">
    <div className="row justify-content-center">
    <div class="card col-12 col-sm-10 col-lg-6">
    <div class="card-body">
      <form onSubmit={(e)=>handleSubmit(e)} className="d-flex flex-column" >
        <h2>
          Sign Up
        </h2>
      <label className="my-3" >
    <span className="card-text mx-2">
    Email:
    </span>
    <input type="email"   onChange={(e)=>setEmail(e.target.value)}
    value={email} />
      </label>
      <label className="my-3" >
    <span className="mx-2 card-text">
    Password:
    </span>
    <input type="password"   onChange={(e)=>setPassword(e.target.value)}
    value={password}/>
      </label>
      <label className="my-3">
    <span className="mx-2 card-text">
        Display Name:
    </span>
    <input   onChange={(e)=>setDisplayName(e.target.value)}
    value={displayName} type="text" />
      </label>
      <div className="d-grid mt-3 col-4 mx-auto">
      <button className="btn btn-dark">Submit</button>
      </div>
      </form>
    </div>
  </div>
  </div>
  </div>
  )
}
