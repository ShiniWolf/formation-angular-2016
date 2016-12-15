class WaBookController {
  constructor ($routeParams, WaBooksService) {
    'ngInject';
    this.$routeParams = $routeParams;
    this.WaBooksService = WaBooksService;
  }

  $onInit () {
    this.WaBooksService.getBook(this.$routeParams.id).then((book) => {
      this.book = book;
      this.step = this.book.steps[0];
    });
  }

  changeStep(newStep) {
    this.step = this.book.steps.find((step) => {
      return step.id === newStep;
    });
  }
}

export const WaBookComponent = {
  template:   require('./wa-book.component.html'),
  controller: WaBookController
};