export function getIcon(category) {
  switch (category) {
    case 'Task':
      return 'cart';
    case 'thought':
      return 'hangouts';
    case 'idea':
      return 'lightbulb';

    default:
      return 'lightbulb';
  }
}
