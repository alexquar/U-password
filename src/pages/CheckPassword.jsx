import { useState } from "react"
export default function CheckPassword({option}) {
    const [password,setPassword] = useState(option)
    const [strengthBar, setStrengthBar]= useState('0')
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
        if (password.length()>6){
                strength+=1;
                
         }
        if (password.length()>12){
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
    <h5 className="card-title">The strength of your password with be reflected in the bar as the bottom!</h5>
    <form onSubmit={checkPassword} className="row m-3 pt-3 justify-content-center">
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
    {
        strengthBar === '0' &&
        <div className="progress">
  <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" aria-label="Dark striped example" style={{width: '2%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>

    }

{
        strengthBar === '1' &&
        <div className="progress">
  <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" aria-label="Secondary striped example" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>

    }

{
        strengthBar === '2' &&
        <div className="progress">
  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-label="Danger striped example" style={{width: '20%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>

    }

{
        strengthBar === '3' &&
        <div className="progress">
  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-label="Warning striped example" style={{width: '40%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>

    }

{
        strengthBar === '4' &&
        <div className="progress">
  <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-label="Info striped example" style={{width: '60%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>

    }

{
        strengthBar === '5' &&
        <div className="progress">
  <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" aria-label="Primary striped example" style={{width: '80%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>

    }
    {
        strengthBar === '6' &&
        <div className="progress">
  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" aria-label="Success striped example" style={{width: '100%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>

    }
  </div>
</div>
    </div>
  )
}
