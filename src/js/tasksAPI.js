import { nanoid } from 'nanoid';

export class TasksAPI {
  constructor(tasks) {
    this.tasks = tasks;
    this.archivedTasks = [];
  }

  createTask(name, created, category, content) {
    const newTask = {
      id: nanoid(),
      name,
      created,
      category,
      content,
      dates: [],
    };
    this.tasks.push(newTask);
    return newTask;
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    return true;
  }

  deleteAllTasks() {
    this.tasks = [];
    return true;
  }

  archiveTask(taskId) {
    const archivedTask = this.tasks.find(task => task.id === taskId);
    this.archivedTasks.push(archivedTask);
    this.deleteTask(taskId);
    return true;
  }

  archiveAllTasks() {
    this.archivedTasks.push(...this.tasks);
    this.deleteAllTasks();
    return true;
  }

  getTasks() {
    return this.tasks;
  }

  getArchivedTasks() {
    return this.archivedTasks;
  }
}
