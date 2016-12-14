import './wa-dice.component.css';

class WaDiceController {
  constructor () {
    this.value = '?';
  }

  launch () {
    this.value = ~~(Math.random() * this.sides + 1);
    this.onResult({
      $event: this.value
    });
  }
}

export const WaDiceComponent = {
  template:   require('./wa-dice.component.html'),
  controller: WaDiceController,
  bindings:   {
    sides:    '<',
    onResult: '&'
  }
};