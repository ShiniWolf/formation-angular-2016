import './wa-library.component.css';

class WaLibraryController {
  constructor () {
  }

  $onInit () {
    this.books = [
      { id: 1, title: 'La caverne maudite' },
      { id: 2, title: 'Le royaume des singes' }
    ]
  }
}

export const WaLibraryComponent = {
  template:   require('./wa-library.component.html'),
  controller: WaLibraryController,
};