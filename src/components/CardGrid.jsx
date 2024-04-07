import PasswordCard from "./PasswordCard";

export default function CardGrid({passwords}) {
  return (
    <div className="container text-center gx-5">
        <div className="row justify-content-start">
    {passwords && passwords.map(password => (
        <div className="col-12 col-md-6 col-lg-4">
       <PasswordCard key={password.id} password={password}/>
       </div>
    ))}
    </div>
    </div>
  )
}
