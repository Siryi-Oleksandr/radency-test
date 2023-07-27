export function createTableMarkup(tasks) {
  return tasks
    .map(task => {
      const { name, created, category, content, dates } = task;
      //   const filterGenres = trimGenresLibraryList(genres);

      return `<li class="films__item js-target" data-id="${id}">
                  <div class="films__img-wrapper">
                   <img
                    src="${
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : defaultImg
                    }"
                    alt="${title}"
                    class="films__img" loading="lazy"
                   />
                   <div class="rating">
                     <p class="films__desk">
                       <span class="films__rating--text"> Rating: </span>
                       <span class="films__rating">${vote_average.toFixed(
                         1
                       )}</span>
                     </p>
                    </div>
                  </div>
               <div class="films__info">
                 <p class="films__name">${title}</p>
                 <p class="films__desk">
                   <span class="films__genre">${filterGenres}</span> |
                    <span class="films__year">${Number.parseInt(
                      release_date
                    )}</span>
                  </p>
               </div>
             </li>`;
    })
    .join('');
}
