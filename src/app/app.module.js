import angular from 'angular';

import {WaAppComponent} from './app.component'
import {WaDiceModule} from './wa-dice/wa-dice.module'

angular.module('app', [
  WaDiceModule
])
  .component('waApp', WaAppComponent);
