import { getChoosedOptionMarkup } from './getChoosedOptionMarkup';

export function editModalMarkup(task) {
  const { name, category, content } = task;

  return `
  <form id="form-edit" class="form-edit" action="/submit" method="post">
    <label for="name"
      >Name:
      <input type="text" id="name" name="name" value="${name}" required />
    </label>

    <label for="category"
      >Category:
      <select id="category" name="category">
        ${getChoosedOptionMarkup(category)}
      </select>
    </label>

    <label for="content"
      >Content:
      <textarea id="content" name="content" required>${content}</textarea>
    </label>

    <input type="submit" value="Submit" />
  </form>`;
}
