import { refs } from './js/refs';
import { tasks } from './js/tasks';
import { createTableMarkup } from './js/notesTableMarkup';
import { nanoid } from 'nanoid';

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
