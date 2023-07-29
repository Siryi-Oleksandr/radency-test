import { refs } from '../js/refs';

export function closeModal(refElement) {
  let parentModal = refElement.closest('.modal');
  parentModal.classList.remove('active');
  refs.modalOverlay.classList.remove('active');

  refElement.reset();
}
