import PasswordCard from "./PasswordCard";

export default function CardGrid(passwords) {
  return (
    <div className="container text-center gx-5 gy-3">
        <div className="row justify-content-center">
    {passwords && passwords.map(password => (
        <div className="col-12 col-md-6 col-lg-4">
       <PasswordCard password={password.password} createdAt={password.createdAt} service={password.service}/>
       </div>
    ))}
    </div>
    </div>
  )
}
