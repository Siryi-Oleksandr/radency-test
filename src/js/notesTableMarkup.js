import { getIcon } from '../services/getIcon';

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
        <button id="btn-archiv-all" class="btn btn--head" type="button">
          <svg class="icon" width="16" height="16">
            <use href="./images/sprite.svg#box-add"></use>
          </svg>
        </button>
        <button id="btn-delete-all" class="btn btn--head" type="button">
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
  <td>${name}</td>
  <td>${created}</td>
  <td>${category}</td>
  <td>${content}</td>
  <td>${dates}</td>
  <td class="options">
    <button id="btn-edit" class="btn js-btn-edit" type="button" data-task=${id}>
      <svg class="icon" width="16" height="16">
        <use href="./images/sprite.svg#pencil"></use>
      </svg>
    </button>
    <button id="btn-archiv" class="btn js-btn-archiv" type="button" data-task=${id}>
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
