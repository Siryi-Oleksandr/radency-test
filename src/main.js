import { refs } from './js/refs';
import { tasks } from './js/tasks';
import { createTableMarkup } from './js/notesTableMarkup';
import { TasksAPI } from './js/TasksAPI';
import { getFormValues } from './js/getFormValues';
import { getOption } from './services/getOption';
import { editModalMarkup } from './js/editModalMarkup';

const tasksAPI = new TasksAPI(tasks);

refs.mainTable.innerHTML = createTableMarkup(tasks); // Initial main table render

refs.formCreate.addEventListener('submit', handleFormCreateTask); // handle form task create

refs.mainTable.addEventListener('click', handleOptions); // handle management each task throught the options

// refs.formEdit.addEventListener('submit', handleFormCreateTask); // handle form task edit

function handleFormCreateTask(e) {
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
}

function handleFormEditTask(e) {
  e.preventDefault();

  try {
    const formValues = getFormValues(refs.formEdit);
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
}

function handleOptions(e) {
  const { btnArchive, btnDelete, btnEdit } = getOption(e);

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
    console.log('😍 Edit', btnEdit.dataset.task); // TODO
    const taskId = btnEdit.dataset.task;
    // console.log(editModalMarkup(tasksAPI.getTaskById(taskId)));
    refs.formEditContainer.innerHTML = editModalMarkup(
      tasksAPI.getTaskById(taskId)
    );
    const formEdit = document.getElementById('form-edit');
    formEdit.addEventListener('submit', handleFormCreateTask); // handle form task edit
  }

  if (btnArchive) {
    const taskId = btnArchive.dataset.task;

    try {
      const isArchived = tasksAPI.archiveTask(taskId);
      if (isArchived) {
        refs.mainTable.innerHTML = createTableMarkup(tasksAPI.getTasks());
        console.log('😎', tasksAPI.getArchivedTasks()); // TODO
      } else {
        throw new Error(`Task with ID ${taskId} was not found.`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
}
