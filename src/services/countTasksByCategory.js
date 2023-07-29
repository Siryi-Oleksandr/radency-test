export function countTasksByCategory(tasks) {
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
