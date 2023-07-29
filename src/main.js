import { refs } from './js/refs';
import { tasks } from './js/tasks';
import { createTableMarkup } from './js/notesTableMarkup';
import { createArchivedTableMarkup } from './js/archivedTableMarkup';
import { TasksAPI } from './js/TasksAPI';
import { getFormValues } from './js/getFormValues';
import { getOption, openModal, closeModal } from './services';
import { editModalMarkup } from './js/editModalMarkup';

const tasksAPI = new TasksAPI(tasks);

refs.mainTable.innerHTML = createTableMarkup(tasksAPI.getTasks()); // Initial main table render

refs.formCreate.addEventListener('submit', handleFormCreateTask); // handle form task create

refs.mainTable.addEventListener('click', handleOptions); // handle management each task throught the options

refs.toggler.addEventListener('change', handleToggler); // show current notes or archive notes

console.log(tasksAPI.getCountTasks());
console.log(tasksAPI.getCountArchivedTasks());

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
  const {
    btnArchive,
    btnDelete,
    btnEdit,
    btnUnzip,
    btnDeleteAll,
    btnArchiveAll,
    btnUnzipAll,
  } = getOption(e);

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
      } else {
        throw new Error(`Task with ID ${taskId} was not found.`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  if (btnArchiveAll) {
    tasksAPI.archiveAllTasks();
    refs.mainTable.innerHTML = createTableMarkup(tasksAPI.getTasks());
  }

  if (btnUnzip) {
    const taskId = btnUnzip.dataset.task;

    try {
      const isUnziped = tasksAPI.unzipTask(taskId);
      if (isUnziped) {
        refs.mainTable.innerHTML = createArchivedTableMarkup(
          tasksAPI.getArchivedTasks()
        );
      } else {
        throw new Error(`Task with ID ${taskId} was not found.`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  if (btnUnzipAll) {
    tasksAPI.unzipAllTasks();
    refs.mainTable.innerHTML = createArchivedTableMarkup(
      tasksAPI.getArchivedTasks()
    );
  }

  if (btnDeleteAll) {
    tasksAPI.deleteAllTasks();
    refs.mainTable.innerHTML = createTableMarkup(tasksAPI.getTasks());
  }
}

function handleToggler() {
  const isChecked = this.checked;

  if (isChecked) {
    refs.mainTable.innerHTML = createArchivedTableMarkup(
      tasksAPI.getArchivedTasks()
    );
  } else {
    refs.mainTable.innerHTML = createTableMarkup(tasksAPI.getTasks());
  }
}
