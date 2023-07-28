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

  archiveTask(taskId) {
    this.archivedTasks.push(taskId);
    this.deleteTask(taskId);
    return true;
  }

  getTasks() {
    return this.tasks;
  }

  getArchivedTasks() {
    return this.archivedTasks;
  }
}
