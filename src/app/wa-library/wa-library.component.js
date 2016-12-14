import './wa-library.component.css';

class WaLibraryController {
  constructor (WaBooksService) {
    this.WaBooksService = WaBooksService;
  }

  $onInit () {
    this.books = this.WaBooksService.getBooks();
  }
}

export const WaLibraryComponent = {
  template:   require('./wa-library.component.html'),
  controller: WaLibraryController,
};