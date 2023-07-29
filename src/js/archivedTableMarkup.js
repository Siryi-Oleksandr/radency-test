import { getIcon, showDates, cutString } from '../services';

export function createArchivedTableMarkup(tasks) {
  return `<table class="table">
  <thead>
    <tr class="table__head">
      <th></th>
      <th>Name</th>
      <th>Created</th>
      <th>Category</th>
      <th>Content</th>
      <th>Dates</th>
      <th class="options-wrapper">
        <button id="btn-unzip-all" class="btn btn--head js-btn-unzip-all" type="button">
          <svg class="icon" width="16" height="16">
            <use href="./images/sprite.svg#box-remove"></use>
          </svg>
        </button>
       </th>
    </tr>
  </thead>
  <tbody class="table__body">
   ${tasks
     .map(task => {
       const { id, name, created, category, content, dates } = task;

       return `<tr>
  <td>
    <span class="icon-wrapper">
      <svg width="16" height="16">
        <use href="./images/sprite.svg#${getIcon(category)}"></use>
      </svg>
    </span>
  </td>
  <td>${cutString(name)}</td>
  <td>${created}</td>
  <td>${category}</td>
  <td>${cutString(content)}</td>
  <td>${dates?.length > 1 ? showDates(dates) : ''}</td>
  <td class="options">
    <button id="btn-unzip" class="btn js-btn-unzip" type="button" data-task=${id}>
      <svg class="icon" width="16" height="16">
        <use href="./images/sprite.svg#box-remove"></use>
      </svg>
    </button>
  </td>
</tr>`;
     })
     .join('')}
  </tbody>
</table>`;
}
