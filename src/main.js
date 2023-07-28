import { refs } from './js/refs';
import { tasks } from './js/tasks';
import { createTableMarkup } from './js/notesTableMarkup';
import { TasksAPI } from './js/TasksAPI';
import { getFormValues } from './js/getFormValues';
import { getOption } from './services/getOption';

const tasksAPI = new TasksAPI(tasks);

refs.mainTable.innerHTML = createTableMarkup(tasks);

refs.formCreate.addEventListener('submit', function (e) {
  e.preventDefault();

  try {
    const formValues = getFormValues(refs.formCreate);
    const { name, created, category, content } = formValues;

    if (!name || !created || !category || !content) {
      throw new Error('All fields are required.');
    }

    refs.formCreate.reset();
    // close modals
    var parentModal = this.closest('.modal');
    parentModal.classList.remove('active');
    refs.modalOverlay.classList.remove('active');

    tasksAPI.createTask(name, created, category, content);
    refs.mainTable.innerHTML = createTableMarkup(tasksAPI.getTasks());
  } catch (error) {
    console.error('Error:', error.message);
  }
});

refs.mainTable.addEventListener('click', handleOptions);

function handleOptions(e) {
  const { btnArchiv, btnDelete, btnEdit } = getOption(e);

  if (btnDelete) {
    const taskId = btnDelete.dataset.task;

    try {
      const isDeleted = tasksAPI.deleteTask(taskId);
      if (isDeleted) {
        refs.mainTable.innerHTML = createTableMarkup(tasksAPI.getTasks());
      } else {
        throw new Error(`Task with ID ${taskId} was not found.`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  if (btnEdit) {
    console.log('😍 Edit', btnEdit.dataset.task);
  }

  if (btnArchiv) {
    const taskId = btnArchiv.dataset.task;

    try {
      const isArchived = tasksAPI.archiveTask(taskId);
      if (isArchived) {
        refs.mainTable.innerHTML = createTableMarkup(tasksAPI.getTasks());
        console.log('😎', tasksAPI.getArchivedTasks());
      } else {
        throw new Error(`Task with ID ${taskId} was not found.`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
}
