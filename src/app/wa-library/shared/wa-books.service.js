export class WaBooksService {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
  }

  getBooks () {
    return this.$http
      .get('http://localhost:3000/books')
      .then(response => response.data)
      .catch(this.handleError);
  }

  getBook (id) {
    return this.$http
      .get('http://localhost:3000/books/' + id)
      .then(response => response.data)
      .catch(this.handleError);
  }

  createBook (book) {
    return this.$http
      .post('http://localhost:3000/books', book)
      .then(response => response.data)
      .catch(this.handleError);
  }

  handleError (err) {
    console.log(err);
  }
}