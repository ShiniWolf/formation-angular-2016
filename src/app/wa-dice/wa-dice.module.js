import angular from 'angular';

import {WaDiceComponent} from './wa-dice.component'

export const WaDiceModule = angular.module('WaDiceModule', [])
  .component('waDice', WaDiceComponent)
  .name;
