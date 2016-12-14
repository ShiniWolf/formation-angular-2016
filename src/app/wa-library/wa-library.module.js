import angular from 'angular';

import {WaLibraryComponent} from './wa-library.component'

export const WaLibraryModule = angular.module('WaLibraryModule', [])
  .component('waLibrary', WaLibraryComponent)
  .name;
