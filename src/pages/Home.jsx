
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className="container my-5">
    <div class="card">
    <div class="card-header text-center py-3">
      Welcome!
    </div>
    <div class="card-body text-center">
      <h5 class="card-title">Get to know U Passwords</h5>
      <p class="card-text">We offer a wide range of services that can handle all of your password needs!</p>
      <div className="d-flex flex-column justify-content-center ">
      <Link to="/" class="btn my-1 btn-primary col-3 align-self-center">Go to your account</Link>
      <button type="button" class="btn p-3 my-1 btn-primary col-6 align-self-center" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
  Learn More!
</button>
</div>
<div className="my-5">
<p class="card-text fs-3 fw-bold text-decoration-underline">Account Options</p>
<p class="card-text">Set your default passwords:</p>
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-secondary">Weak</button>
  <button type="button" class="btn btn-outline-secondary">Medium</button>
  <button type="button" class="btn btn-outline-secondary">Strong</button>
</div>
</div>
    </div>
  </div>
  </div>
  )
}
