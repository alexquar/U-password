import { useState } from "react"

export default function PasswordCard({password : data}) {
    const [showPassword, setShowPassword]= useState(false)
    const {service, password, createdAt} = data
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
    {createdAt &&  <p className="cart-text">Password created/changed: {createdAt.seconds}</p>}
    {!showPassword &&  <button className="btn" onClick={handleClick}>Show Password</button>}
    {showPassword &&  <button className="btn" onClick={handleClick}>Show Password</button>}
    {showPassword && <p className="card-text">Password: {password}</p>}
    </div>
  </div>
  )
}
