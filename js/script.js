var app = new Vue ({
  el : '#app',
  data : {
    movies : [],
    api_key : 'e80da7051f772c008b17e92730ad435f',
    language : 'it-IT',
    query : '',
    url_img : 'https://image.tmdb.org/t/p/w342/',
    films: '',
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
      axios
      .get('https://api.themoviedb.org/3/search/tv', {params: {
          api_key : this.api_key,
          language : this.language,
          query : this.query
        }
      })
      .then((res) => {
        this.movies = [...this.movies, ...res.data.results];
        console.log(this.movies);
      });

      this.query = ''

    });
  },
  star(a){
    let b = (a / 2);
    let star = Math.round(b);
    return star
  }
}
});
