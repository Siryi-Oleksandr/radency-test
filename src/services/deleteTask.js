export function deleteTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}
