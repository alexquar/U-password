import NewPassWord from "../components/NewPassWord"
export default function NewPassword() {
  return (
    <div className="container my-5">
          <div className="row">
        <div className="col-12 col-md-10 offset-md-2 offset-lg-4 col-lg-8">
          <h1>Create a New Password</h1>
      </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-10 offset-md-2 offset-lg-4 col-lg-8">
      <NewPassWord />
      </div>
      </div>
    </div>
  )
}
