class WaBookFormController {
  constructor ($location, WaBooksService) {
    'ngInject';

    this.$location = $location;
    this.WaBooksService = WaBooksService;

    this.book = {
      title:       '',
      description: ''
    };
  }

  onSubmit (form) {
    if (form.$valid) {
      this.WaBooksService.createBook(this.book).then((book) => {
        this.$location.path('/');
      });
    }
  }
}

export const WaBookFormComponent = {
  template:   require('./wa-book-form.component.html'),
  controller: WaBookFormController
};