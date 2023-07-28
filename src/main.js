import { nanoid } from 'nanoid';
import { refs } from './js/refs';
import { tasks } from './js/tasks';
import { createTableMarkup } from './js/notesTableMarkup';
import { deleteTask } from './services/deleteTask';
const archivedTasks = [];

refs.mainTable.innerHTML = createTableMarkup(tasks);

refs.formCreate.addEventListener('submit', function (event) {
  event.preventDefault();

  // Отримуємо значення введених користувачем даних з полів форми
  const name = document.getElementById('name').value;
  const created = document.getElementById('created').value;
  const category = document.getElementById('category').value;
  const content = document.getElementById('content').value;

  const newTask = {
    id: nanoid(),
    name,
    created,
    category,
    content,
    dates: [],
  };

  refs.formCreate.reset();
  // close modals
  var parentModal = this.closest('.modal');
  parentModal.classList.remove('active');
  refs.modalOverlay.classList.remove('active');

  tasks.push(newTask);
  refs.mainTable.innerHTML = createTableMarkup(tasks);
});

refs.mainTable.addEventListener('click', handleOptions);

function handleOptions(e) {
  const btnDelete =
    e.target.className === 'js-btn-delete'
      ? e.target
      : e.target.closest('#btn-delete');

  const btnEdit =
    e.target.className === 'js-btn-edit'
      ? e.target
      : e.target.closest('#btn-edit');

  const btnArchiv =
    e.target.className === 'js-btn-archiv'
      ? e.target
      : e.target.closest('#btn-archiv');

  if (btnDelete) {
    const taskId = btnDelete.dataset.task;
    deleteTask(tasks, taskId);
    refs.mainTable.innerHTML = createTableMarkup(tasks);
    return console.log(`Task with ID ${taskId} has been deleted.`);
  }
  if (btnEdit) {
    console.log('😍 Edit', btnEdit.dataset.task);
  }
  if (btnArchiv) {
    console.log('🥰 Archiv', btnArchiv.dataset.task);
  }
}
