import './TableHead.css'



const TableHead = () => {
  
  <table class="table table-hover">

    <div class="tableFilter">
      <i id="refresh" class="fa-solid fa-arrows-rotate refresh"></i>
      <form class="form">
        <button id="checkboxSuccess"></button>
        <p class="inline">Land Success</p>
        <button id="checkboxReuse"></button>
        <p class="inline">Reuse</p>
        <button id="checkboxReddit"></button>
        <p class="inline">With Reddit</p>
      </form>
    </div>

    <thead class="tablehead">
      <tr>
        <th scope="col">Badge</th>
        <th scope="col">Rocket Name</th>
        <th scope="col">Upcoming</th>
        <th scope="col">Launch Date</th>
        <th scope="col">Details</th>
        <th scope="col">Flight #</th>
        <th scope="col">Article</th>
      </tr>
    </thead>

  </table>
}





export default TableHead;
