export function getIcon(category) {
  switch (category) {
    case 'Task':
      return 'cart';
    case 'Random Thought':
      return 'bubble';
    case 'Idea':
      return 'lightbulb';

    default:
      return 'lightbulb';
  }
}
