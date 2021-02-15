var app = new Vue ({
  el : '#app',
  data : {
    movies : [],
    api_key : 'e80da7051f772c008b17e92730ad435f',
    language : 'it-IT',
    query : '',
    url_img : 'https://image.tmdb.org/t/p/w342/',
  },
  methods : {
    search() {
      axios
      .get('https://api.themoviedb.org/3/search/movie', {params : {
        api_key : this.api_key,
        language : this.language,
        query : this.query
      }
    })
    .then((result) => {
      this.movies = result.data.results;
      console.log(this.movies);
    });
  }
}
});
