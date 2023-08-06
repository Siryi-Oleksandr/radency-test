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

  static _createFormatedDate() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  static _parseDates(str) {
    const dateRegex = /\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/g;
    const datesFound = str.match(dateRegex);

    return datesFound || [];
  }

  #tasks;
  #archivedTasks;

  constructor(tasks) {
    this.#tasks = tasks;
    this.#archivedTasks = [];
  }

  createTask(values) {
    const newTask = {
      id: nanoid(),
      name: values.name,
      created: TasksAPI._createFormatedDate(),
      category: values.category,
      content: values.content,
      dates: TasksAPI._parseDates(values.content),
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
    const newTask = {
      id: taskId,
      name: updatedTask.name,
      created: TasksAPI._createFormatedDate(),
      category: updatedTask.category,
      content: updatedTask.content,
      dates: TasksAPI._parseDates(updatedTask.content),
    };

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
