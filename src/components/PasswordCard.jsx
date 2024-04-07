import { useState } from "react"

export default function PasswordCard(service,createdAt, password ) {
    const [showPassword, setShowPassword]= useState(false)
    const handleClick= () =>{
        if(showPassword){
            setShowPassword(false)
        } else {
            setShowPassword(true)
        }
    }
  return (
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">Password for {service}</h5>
      <p className="cart-text">Password created/changed: {createdAt}</p>
    {!showPassword &&  <button className="btn" onClick={handleClick}>Show Password</button>}
    {showPassword &&  <button className="btn" onClick={handleClick}>Show Password</button>}
    {showPassword && <p className="card-text">Password: {password}</p>}
    </div>
  </div>
  )
}
