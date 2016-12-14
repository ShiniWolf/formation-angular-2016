import angular from 'angular';

import {WaBooksService} from './wa-books.service';
import {WaLibraryComponent} from './wa-library.component';

export const WaLibraryModule = angular.module('WaLibraryModule', [])
  .service('WaBooksService', WaBooksService)
  .component('waLibrary', WaLibraryComponent)
  .name;
