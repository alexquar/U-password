import { useState } from "react"
export default function CheckPassword({option}) {
    const [password,setPassword] = useState(option)
    const [strengthBar, setStrengthBar]= useState('')
    const checkPassword =()=>{
        let strength=0;
        if (password.match(/[a-z]+/)){
            strength+=1;
        }
        if (password.match(/[A-Z]+/)){
            strength+=1;
        }
        if (password.match(/[0-9]+/)){
            strength+=1;
        }
        if (password.match(/[$@#&!*^.%,<>;;`~?]+/)){
            strength+=1;
    
            }
        setStrengthBar(`${strength}`)
    }
  return (
    <div className="container text-center my-5 py-5">
<div className="card text-center">
  <div className="card-header py-5">
    Test Password Strength Here
  </div>
  <div className="card-body py-5">
    <h5 className="card-title">Special title treatment</h5>
    <form onSubmit={checkPassword} className="row m-3 justify-content-center">
  <label htmlFor="colFormLabel" className="col-6 col-md-3 col-form-label">Password:</label>
  <div className="col-6">
    <input type="text" className="form-control" id="colFormLabel" placeholder="Password Here!"/>
  </div>
  <div className="col-3 mt-3 mt-md-0">
  <button className="btn btn-secondary px-4">Test</button>
  </div>
</form>
  </div>
  <div className="card-footer py-5 text-muted">
    2 days ago
  </div>
</div>
    </div>
  )
}
