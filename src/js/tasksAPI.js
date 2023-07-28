import { nanoid } from 'nanoid';

export class TasksAPI {
  constructor(tasks) {
    this.tasks = [];
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
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      return true;
    } else {
      return false;
    }
  }

  getTasks() {
    return this.tasks;
  }
}
