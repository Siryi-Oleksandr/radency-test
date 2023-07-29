export function editModalMarkup(task) {
  const { id, name, created, category, content } = task;

  return `<div class="modal" data-modal="2">
  <!--   Svg icon for close modal  -->
  <svg
    class="modal__cross js-modal-close"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
    />
  </svg>

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
  </form>
</div>`;
}
