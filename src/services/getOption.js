export function getOption(e) {
  const btnDelete =
    e.target.className === 'js-btn-delete'
      ? e.target
      : e.target.closest('#btn-delete');

  const btnDeleteAll =
    e.target.className === 'js-btn-delete-all'
      ? e.target
      : e.target.closest('#btn-delete-all');

  const btnEdit =
    e.target.className === 'js-btn-edit'
      ? e.target
      : e.target.closest('#btn-edit');

  const btnArchive =
    e.target.className === 'js-btn-archive'
      ? e.target
      : e.target.closest('#btn-archive');

  const btnUnzip =
    e.target.className === 'js-btn-unzip'
      ? e.target
      : e.target.closest('#btn-unzip');

  const btnArchiveAll =
    e.target.className === 'js-btn-archive-all'
      ? e.target
      : e.target.closest('#btn-archive-all');

  const btnUnzipAll =
    e.target.className === 'js-btn-unzip-all'
      ? e.target
      : e.target.closest('#btn-unzip-all');

  return {
    btnArchive,
    btnDelete,
    btnEdit,
    btnUnzip,
    btnDeleteAll,
    btnArchiveAll,
    btnUnzipAll,
  };
}
