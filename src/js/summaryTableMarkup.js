export function createSummaryTableMarkup(tasks, archivedTasks) {
  console.log(tasks);
  console.log(archivedTasks);
  return ` <table class="table table--summary">
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
        <td>Task</td>
        <td>${tasks.Task}</td>
        <td>${archivedTasks.Task}</td>
      </tr>
      <tr>
        <td>
          <span class="icon-wrapper">
            <svg width="16" height="16">
              <use href="./images/sprite.svg#lightbulb"></use>
            </svg>
          </span>
        </td>
        <td>Idea</td>
        <td>${tasks.Idea}</td>
        <td>${archivedTasks.Idea}</td>
      </tr>
      <tr>
        <td>
          <span class="icon-wrapper">
            <svg width="16" height="16">
              <use href="./images/sprite.svg#bubble"></use>
            </svg>
          </span>
        </td>
        <td>Random Thought</td>
        <td>${tasks['Random Thought']}</td>
        <td>${archivedTasks['Random Thought']}</td>
      </tr>
    </tbody>
  </table>`;
}
