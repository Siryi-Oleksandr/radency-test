import { refs } from './js/refs';
import { tasks } from './js/tasks';
import { createTableMarkup } from './js/notesTableMarkup';

refs.mainTable.innerHTML = createTableMarkup(tasks);
