export function getChoosedOptionMarkup(category) {
  switch (category) {
    case 'Task':
      return `<option value="Task" selected>Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea">Idea</option>`;
    case 'Random Thought':
      return `<option value="Task">Task</option>
        <option value="Random Thought" selected>Random Thought</option>
        <option value="Idea">Idea</option>`;
    case 'Idea':
      return `<option value="Task">Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea" selected>Idea</option>`;

    default:
      return `<option value="Task" selected>Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea">Idea</option>`;
  }
}
