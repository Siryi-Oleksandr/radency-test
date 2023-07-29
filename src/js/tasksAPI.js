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
    this.observers = []; // Array to store registered observers
  }

  // Method to register an observer
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Method to notify all observers when tasks are updated
  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update();
    });
  }

  createTask(name, created, category, content) {
    const newTask = {
      id: nanoid(),
      name,
      created,
      category,
      content,
      dates: [created],
    };

    this.#tasks.push(newTask);
    this.notifyObservers();
    return newTask;
  }

  deleteTask(taskId) {
    this.#tasks = this.#tasks.filter(task => task.id !== taskId);
    this.notifyObservers();
    return true;
  }

  deleteAllTasks() {
    this.#tasks = [];
    this.notifyObservers();
    return true;
  }

  archiveTask(taskId) {
    const archivedTask = this.#tasks.find(task => task.id === taskId);
    this.#archivedTasks.push(archivedTask);
    this.deleteTask(taskId);
    this.notifyObservers();
    return true;
  }

  archiveAllTasks() {
    this.#archivedTasks.push(...this.#tasks);
    this.deleteAllTasks();
    this.notifyObservers();
    return true;
  }

  editTask(taskId, updatedTask) {
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
    this.notifyObservers();
    return true;
  }

  unzipTask(taskId) {
    const unzipedTask = this.#archivedTasks.find(task => task.id === taskId);
    this.#tasks.push(unzipedTask);
    this.#archivedTasks = this.#archivedTasks.filter(
      task => task.id !== taskId
    );
    this.notifyObservers();
    return true;
  }

  unzipAllTasks() {
    this.#tasks.push(...this.#archivedTasks);
    this.#archivedTasks = [];
    this.notifyObservers();
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
