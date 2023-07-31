import { getIcon, showDates, cutString } from '../services';

export function createTableMarkup(tasks) {
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
        <button id="btn-archive-all" class="btn btn--head js-btn-archive-all" type="button">
          <svg class="icon" width="16" height="16">
            <use href="./images/sprite.svg#box-add"></use>
          </svg>
        </button>
        <button id="btn-delete-all" class="btn btn--head js-btn-delete-all" type="button">
          <svg class="icon" width="16" height="16">
            <use href="./images/sprite.svg#bin"></use>
          </svg>
        </button></th>
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
  <td>${showDates(dates)}</td>
  <td class="options">
    <button id="btn-edit" class="btn js-btn-edit js-open-modal" type="button" data-task=${id} data-modal="2">
      <svg class="icon" width="16" height="16">
        <use href="./images/sprite.svg#pencil"></use>
      </svg>
    </button>
    <button id="btn-archive" class="btn js-btn-archive" type="button" data-task=${id}>
      <svg class="icon" width="16" height="16">
        <use href="./images/sprite.svg#box-add"></use>
      </svg>
    </button>
    <button id="btn-delete" class="btn js-btn-delete" type="button" data-task=${id}>
      <svg class="icon" width="16" height="16">
        <use href="./images/sprite.svg#bin"></use>
      </svg>
    </button>
  </td>
</tr>`;
     })
     .join('')}
  </tbody>
</table>`;
}
