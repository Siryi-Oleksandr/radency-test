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
      dates: [created],
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

  editTask(taskId, updatedTask) {
    const newTask = {
      id: taskId,
      name: updatedTask.name,
      created: updatedTask.created,
      category: updatedTask.category,
      content: updatedTask.content,
      dates: updatedTask.dates,
    };

    // if (created !== updatedTask.created) {
    //   newTask.dates.push(updatedTask.created);
    // }

    const taskIndex = this.tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
      console.error('Task not found');
    }

    this.tasks.splice(taskIndex, 1, newTask);
    return true;
  }

  getTasks() {
    return this.tasks;
  }

  getTaskById(taskId) {
    return this.tasks.find(task => task.id === taskId);
  }

  getArchivedTasks() {
    return this.archivedTasks;
  }
}
