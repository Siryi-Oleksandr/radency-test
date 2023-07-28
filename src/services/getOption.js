export function getOption(e) {
  const btnDelete =
    e.target.className === 'js-btn-delete'
      ? e.target
      : e.target.closest('#btn-delete');

  const btnEdit =
    e.target.className === 'js-btn-edit'
      ? e.target
      : e.target.closest('#btn-edit');

  const btnArchiv =
    e.target.className === 'js-btn-archiv'
      ? e.target
      : e.target.closest('#btn-archiv');

  return { btnArchiv, btnDelete, btnEdit };
}
