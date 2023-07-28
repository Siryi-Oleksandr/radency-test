export function deleteTask(tasks, taskId) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex === -1) {
    return console.log(`Task with ID ${taskId} was not found.`);
  }
  tasks.splice(taskIndex, 1);
}
