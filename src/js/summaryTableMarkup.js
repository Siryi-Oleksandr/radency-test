export function createSummaryTableMarkup(tasks, archivedTasks) {
  return `<table class="table">
  <thead>
    <tr class="table__head">
      <th></th>
      <th>Note Category</th>
      <th>Active</th>
      <th>Archived</th>
    </tr>
  </thead>
  <tbody class="table__body">
  <tr>
  <td>
    <span class="icon-wrapper">
      <svg width="16" height="16">
        <use href="./images/sprite.svg#cart"></use>
      </svg>
    </span>
  </td>
  <td>13</td>
  <td>4</td>
 
</tr>
     
  </tbody>
</table>`;
}
