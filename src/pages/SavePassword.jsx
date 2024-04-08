import AddPasswordForm from "../components/AddPasswordForm";
import CardGrid from "../components/CardGrid";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
export default function SavePassword() {
    const {user}= useAuthContext()
    const {documents, error} = useCollection('passwords', ['user','==',user.uid], ['createdAt', 'asc'])
  return (
    <div className="container text-center">
      <AddPasswordForm  />
      {error && <div className="alert alert-danger"> {error} </div>}
      <CardGrid passwords={documents} />
    </div>
  )
}
