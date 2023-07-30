import { nanoid } from 'nanoid';

export class TasksAPI {
  static _countTasksByCategory(tasks) {
    const initialCount = {
      Task: 0,
      Idea: 0,
      'Random Thought': 0,
    };

    return tasks.reduce((acc, task) => {
      const category = task.category;
      if (category in acc) {
        acc[category]++;
      }
      return acc;
    }, initialCount);
  }

  #tasks;
  #archivedTasks;

  constructor(tasks) {
    this.#tasks = tasks;
    this.#archivedTasks = [];
  }

  isValidDateFormat(dateString) {
    const dateRegex = /^\d{4}-\d{2}-\d{8}$/;
    return dateRegex.test(dateString);
  }

  createTask(values) {
    // Validate the date format before creating the task
    if (!this.isValidDateFormat(values.created)) {
      console.error(
        'Invalid date format. Date must be in "yyyy-mm-dd" format.'
      );
      return false;
    }

    const newTask = {
      id: nanoid(),
      name: values.name,
      created: values.created,
      category: values.category,
      content: values.content,
      dates: [values.created],
    };

    this.#tasks.push(newTask);
    return newTask;
  }

  deleteTask(taskId) {
    this.#tasks = this.#tasks.filter(task => task.id !== taskId);
    return true;
  }

  deleteAllTasks() {
    this.#tasks = [];
    return true;
  }

  archiveTask(taskId) {
    const archivedTask = this.#tasks.find(task => task.id === taskId);
    this.#archivedTasks.push(archivedTask);
    this.deleteTask(taskId);
    return true;
  }

  archiveAllTasks() {
    this.#archivedTasks.push(...this.#tasks);
    this.deleteAllTasks();
    return true;
  }

  editTask(taskId, updatedTask) {
    // Validate the date format before updating the task
    if (!this.isValidDateFormat(updatedTask.created)) {
      console.error(
        'Invalid date format. Date must be in "yyyy-mm-dd" format.'
      );
      return false;
    }

    const newTask = {
      id: taskId,
      name: updatedTask.name,
      created: updatedTask.created,
      category: updatedTask.category,
      content: updatedTask.content,
    };

    const currentTask = this.getTaskById(taskId);

    if (currentTask.created !== updatedTask.created) {
      newTask.dates = [...currentTask.dates, updatedTask.created];
    } else {
      newTask.dates = [...currentTask.dates];
    }

    const taskIndex = this.#tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
      console.error('Task not found');
    }

    this.#tasks.splice(taskIndex, 1, newTask);
    return true;
  }

  unzipTask(taskId) {
    const unzipedTask = this.#archivedTasks.find(task => task.id === taskId);
    this.#tasks.push(unzipedTask);
    this.#archivedTasks = this.#archivedTasks.filter(
      task => task.id !== taskId
    );
    return true;
  }

  unzipAllTasks() {
    this.#tasks.push(...this.#archivedTasks);
    this.#archivedTasks = [];
    return true;
  }

  getTasks() {
    return this.#tasks;
  }

  getTaskById(taskId) {
    return this.#tasks.find(task => task.id === taskId);
  }

  getArchivedTasks() {
    return this.#archivedTasks;
  }

  getCountTasks() {
    return TasksAPI._countTasksByCategory(this.#tasks);
  }

  getCountArchivedTasks() {
    return TasksAPI._countTasksByCategory(this.#archivedTasks);
  }
}
