var app = new Vue ({
  el : '#app',
  data : {
    api_key : 'e80da7051f772c008b17e92730ad435f',
    language : '',
    query:'',
  },
  methods : {
    search() {
      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=', {params : {
          api_key : this.api_key,
          language : this.language,
          query : this.query
        }
        })
        .then((result) => {
          console.log(result.data);
        });
    }
  }
});
