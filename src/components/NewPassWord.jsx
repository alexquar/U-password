

export default function NewPassWord() {
  return (
    <div className="container my-5">
      <form>
        <div className="row justify-content-center">
      <div className="form-check form-switch my-2">
  <input className="form-check-input" type="checkbox" role="switch" />
  <label className="form-check-label" >Default switch checkbox input</label>
</div>
</div>
<div className="form-check form-switch my-2">
  <input className="form-check-input" type="checkbox" role="switch" />
  <label className="form-check-label" >Default switch checkbox input</label>
</div>
<div className="form-check form-switch my-2">
  <input className="form-check-input" type="checkbox" role="switch" />
  <label className="form-check-label" >Default switch checkbox input</label>
</div>
<div className="form-check form-switch my-2">
  <input className="form-check-input" type="checkbox" role="switch" />
  <label className="form-check-label" >Default switch checkbox input</label>
</div>
<div className="col-6">
<label for="customRange3" className="form-label">Example range</label>
<input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
</div>
<button className="btn btn-light"> Generate </button>
      </form>
    </div>
  )
}
