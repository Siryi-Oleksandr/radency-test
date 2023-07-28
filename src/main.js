import { refs } from './js/refs';
import { tasks } from './js/tasks';
import { createTableMarkup } from './js/notesTableMarkup';

refs.mainTable.innerHTML = createTableMarkup(tasks);

refs.formCreate.addEventListener('submit', function (event) {
  // Відмінимо типову поведінку форми (відправку на сервер), щоб ми могли обробити дані локально
  event.preventDefault();

  // Отримуємо значення введених користувачем даних з полів форми
  const name = document.getElementById('name').value;
  const created = document.getElementById('created').value;
  const category = document.getElementById('category').value;
  // Отримуємо значення текстової області (textarea) форми
  const content = document.getElementById('content').value;

  // Тепер можемо використовувати отримані дані для подальшої обробки
  console.log('Name:', name);
  console.log('Created:', created);
  console.log('Selected Categories:', category);
  console.log('Content:', content);

  refs.formCreate.reset();
  // close modals
  var parentModal = this.closest('.modal');
  parentModal.classList.remove('active');
  refs.modalOverlay.classList.remove('active');
});
