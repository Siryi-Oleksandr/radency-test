export function editModalMarkup(task) {
  const { id, name, created, category, content } = task;

  return `
  <form id="form-edit" class="form-edit" action="/submit" method="post">
    <label for="name"
      >Name:
      <input type="text" id="name" name="name" value=${name} required />
    </label>

    <label for="created"
      >Created:
      <input type="date" id="created" name="created" value=${created} required />
    </label>

    <label for="category"
      >Category:
      <select id="category" name="category">
        <option value="Task">Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea">Idea</option>
      </select>
    </label>

    <label for="content"
      >Content:
      <textarea id="content" name="content" required>${content}</textarea>
    </label>

    <input type="submit" value="Submit" />
  </form>`;
}
