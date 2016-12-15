import angular from 'angular';

import {RouteConfig} from './wa-library.routing';
import {WaBooksService} from './shared/wa-books.service';
import {WaLibraryComponent} from './wa-library.component';
import {WaBookComponent} from './wa-book/wa-book.component';
import {WaBookFormComponent} from './wa-book-form/wa-book-form.component';
import {WaStepComponent} from './wa-step/wa-step.component';

export const WaLibraryModule = angular.module('WaLibraryModule', [])
  .service('WaBooksService', WaBooksService)
  .config(RouteConfig)
  .component('waLibrary', WaLibraryComponent)
  .component('waBook', WaBookComponent)
  .component('waBookForm', WaBookFormComponent)
  .component('waStep', WaStepComponent)
  .name;
