import './TableFilter.css'

const TableFilter = () => {
  return (

    <div className="tableFilter">
      <i id="refresh" className="fa-solid fa-arrows-rotate refresh"></i>
      <form className="form">
        <button id="checkboxSuccess"></button>
        <p className="inline">Land Success</p>
        <button id="checkboxReuse"></button>
        <p className="inline">Reuse</p>
        <button id="checkboxReddit"></button>
        <p className="inline">With Reddit</p>
      </form>
    </div>
  )

}

export default TableFilter