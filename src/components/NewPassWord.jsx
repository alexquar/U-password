import { useState } from "react"

export default function NewPassWord() {
const [low, setLow] = useState(false)
const [up, setUp] = useState(false)
const [num, setNum] = useState(false)
const [spec, setSpec] = useState(false)
const [len, setLen] = useState(6)
const handleSubmit = (e)=>{
e.preventDefault()
//to be
}
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
      <div className="form-check form-switch my-4">
  <input className="form-check-input" type="checkbox" role="switch" 
onChange={(e)=>setLow(e.target.value)}
value={low}
  />
  <label className="form-check-label" >Lowercase letters</label>
</div>
<div className="form-check form-switch my-4">
  <input className="form-check-input" type="checkbox" role="switch" 
  onChange={(e)=>setUp(e.target.value)}
  value={up}
  />
  <label className="form-check-label" >Uppercase letters Letters</label>
</div>
<div className="form-check form-switch my-4">
  <input className="form-check-input" type="checkbox" role="switch"
  onChange={(e)=>setNum(e.target.value)}
  value={num}
  />
  <label className="form-check-label" >Numbers</label>
</div>
<div className="form-check form-switch my-4">
  <input className="form-check-input" type="checkbox" role="switch"
  onChange={(e)=>setSpec(e.target.value)}
  value={spec} 
  />
  <label className="form-check-label" >Special Charaters</label>
</div>
<div className="col-6">
<label className="form-label">Password Length:</label>
<input type="range" className="form-range" min="6" max="20" step="1" 
onChange={(e)=>setLen(e.target.value)}
value={len}
/>
</div>
<div className="my-3">
<button className="btn btn-dark"> Generate </button>
</div>
      </form>
    </div>
  )
}
