export function getOption(e) {
  const btnDelete =
    e.target.className === 'js-btn-delete'
      ? e.target
      : e.target.closest('#btn-delete');

  const btnEdit =
    e.target.className === 'js-btn-edit'
      ? e.target
      : e.target.closest('#btn-edit');

  const btnArchive =
    e.target.className === 'js-btn-archive'
      ? e.target
      : e.target.closest('#btn-archive');

  return { btnArchive, btnDelete, btnEdit };
}
