export class TaskCountObserver {
  constructor(tasksAPI) {
    this.tasksAPI = tasksAPI;
  }

  update() {
    const updatedCountTasks = this.tasksAPI.getCountTasks();
    const updatedCountArchivedTasks = this.tasksAPI.getCountArchivedTasks();

    console.log('Task counts updated:', updatedCountTasks);
    console.log('Task counts Arch updated:', updatedCountArchivedTasks);
  }
}
