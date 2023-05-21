

const movie = {
    title: 'Appu',
    genre: 'Commercial, Action',
    director: 'Puri Jagannath',
    releaseYear: 2002,
    rating: 5
}

const getReview = function() {
    return `${movie.title}, a ${movie.genre} film directed by ${movie.director} was released on ${movie.releaseYear}. It received a rating of ${movie.rating}`;
}

console.log(getReview());
