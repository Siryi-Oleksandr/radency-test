import { refs } from '../js/refs';

export function openModal(refElement) {
  let parentModal = refElement.closest('.modal');
  parentModal.classList.add('active');
  refs.modalOverlay.classList.add('active');
}
