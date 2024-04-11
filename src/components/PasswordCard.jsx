import { useState } from "react"
import { useFirestore } from "../hooks/useFirestore"
export default function PasswordCard({password : data}) {
    const [showPassword, setShowPassword]= useState(false)
    const {service, password, createdAt, id} = data
    const {deleteDocument} = useFirestore('passwords')
    const handleClick= () =>{
        if(showPassword){
            setShowPassword(false)
        } else {
            setShowPassword(true)
        }
    }
    const handleDelete = () => {
      deleteDocument(id)
    }
  return (
    <div className="card text-bg-dark my-3">
    <div className="card-body">
      <h5 className="card-title">Password for {service}</h5>
    {createdAt &&  <p className="cart-text">Password created/changed: {createdAt.toDate().toDateString()}</p>}
    {!showPassword &&  <button className="btn btn-outline-light" onClick={handleClick}>Show Password</button>}
    {showPassword &&  <button className="btn btn-outline-light" onClick={handleClick}>Show Password</button>}
    <div>
    {showPassword && <p className=" block badge rounded-pill text-bg-light mt-3 mb-0 p-3">Password: {password}</p>}
    </div>
    <button onClick={handleDelete}>delete</button>
    </div>
  </div>
  )
}
