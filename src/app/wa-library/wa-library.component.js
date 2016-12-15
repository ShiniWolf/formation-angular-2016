import './wa-library.component.css';

class WaLibraryController {
  constructor (WaBooksService) {
    'ngInject';

    this.WaBooksService = WaBooksService;
  }

  $onInit () {
    this.WaBooksService.getBooks().then((books) => {
      this.books = books;
    });
  }
}

export const WaLibraryComponent = {
  template:   require('./wa-library.component.html'),
  controller: WaLibraryController,
};