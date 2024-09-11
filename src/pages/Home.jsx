
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className="container my-5">

      {/* modal for weak */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Set your default weak password here</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        This password is best used for services that don't store much personal infomation where security is not your primary concern.
      </div>
      <div class="modal-body">
        Your current password is: 
      </div>
      <div class="modal-body">
      <form >
      <label htmlFor="colFormLabel" className="col-6 col-md-3 col-form-label">Password:</label>
  <div className="col-6">
    <input type="text" className="form-control" id="colFormLabel" placeholder="Password Here!"
    />
  </div>
        </form>    
    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-dark">Save changes</button>
      </div>
    </div>
  </div>
</div>


    <div class="card">
    <div class="card-header text-center py-3">
      Welcome!
    </div>
    <div class="card-body text-center">
      <h5 class="card-title">Get to know U Passwords</h5>
      <p class="card-text">We offer a wide range of services that can handle all of your password needs!</p>
      <div className="d-flex flex-column justify-content-center ">
      <Link to="/" class="btn my-1 btn-outline-dark col-3 align-self-center">Go to your account</Link>
      <button type="button" class="btn p-3 my-1 btn-outline-dark col-6 align-self-center" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
  Learn More!
</button>
</div>
<div className="my-5">
<p class="card-text fs-3 fw-bold text-decoration-underline">Account Options</p>
<p class="card-text">Set your default passwords:</p>
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Weak</button>
  <button type="button" class="btn btn-outline-secondary">Medium</button>
  <button type="button" class="btn btn-outline-secondary">Strong</button>
</div>
</div>
    </div>
  </div>
  </div>
  )
}
