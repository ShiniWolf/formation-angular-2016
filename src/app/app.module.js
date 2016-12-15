import angular from 'angular';
import routeModule from 'angular-route';

import {WaAppComponent} from './app.component';
import {WaLibraryModule} from './wa-library/wa-library.module';
import {WaDiceModule} from './wa-dice/wa-dice.module';

angular.module('app', [
  routeModule,
  WaLibraryModule,
  WaDiceModule
])
  .component('waApp', WaAppComponent);
