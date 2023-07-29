import { refs } from './js/refs';
import { tasks } from './js/tasks';
import { createTableMarkup } from './js/notesTableMarkup';
import { TasksAPI } from './js/TasksAPI';
import { getFormValues } from './js/getFormValues';
import { getOption } from './services/getOption';
import { closeModal } from './services/closeModal';
import { openModal } from './services/openModal';
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

    tasksAPI.createTask(name, created, category, content);
    refs.mainTable.innerHTML = createTableMarkup(tasksAPI.getTasks());
    closeModal(refs.formCreate);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

function handleFormEditTask(e, refForm, taskId) {
  e.preventDefault();

  try {
    const formValues = getFormValues(refForm);
    const { name, created, category, content } = formValues;

    if (!name || !created || !category || !content) {
      throw new Error('All fields are required.');
    }

    tasksAPI.editTask(taskId, formValues);
    refs.mainTable.innerHTML = createTableMarkup(tasksAPI.getTasks());
    closeModal(refForm);

    // tasksAPI.createTask(name, created, category, content);
    // refs.mainTable.innerHTML = createTableMarkup(tasksAPI.getTasks());
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
    const taskId = btnEdit.dataset.task;
    refs.formEditContainer.innerHTML = editModalMarkup(
      tasksAPI.getTaskById(taskId)
    );

    const refFormEdit = document.getElementById('form-edit');
    openModal(refFormEdit);
    refFormEdit.addEventListener('submit', e =>
      handleFormEditTask(e, refFormEdit, taskId)
    ); // handle form task edit
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
