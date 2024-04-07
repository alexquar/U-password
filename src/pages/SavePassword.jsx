import AddPasswordForm from "../components/AddPasswordForm";
import CardGrid from "../components/CardGrid";
import { useCollection } from "../hooks/useCollection";
export default function SavePassword() {
    const {documents, error} = useCollection('passwords')
  return (
    <div className="container text-center">
      <AddPasswordForm  />
      {error && <div className="alert alert-danger"> {error} </div>}
      <CardGrid passwords={documents} />
    </div>
  )
}
