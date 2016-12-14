import angular from 'angular';

import {WaAppComponent} from './app.component'
import {WaLibraryModule} from './wa-library/wa-library.module'
import {WaDiceModule} from './wa-dice/wa-dice.module'

angular.module('app', [
  WaLibraryModule,
  WaDiceModule
])
  .component('waApp', WaAppComponent);
