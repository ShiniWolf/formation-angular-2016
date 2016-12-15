class WaStepController {
  constructor () {
  }

  launchDice (value) {
    let move = this.step.moves.find((move) => {
      return move.condition.indexOf(value) !== -1;
    });

    this.onNextStep({
      $event: move.step_id
    });
  }

  changeStep (move) {
    if (!this.step.event) {
      this.onNextStep({
        $event: move.step_id
      });
    }
  }
}

export const WaStepComponent = {
  template:   require('./wa-step.component.html'),
  controller: WaStepController,
  bindings:   {
    step:       '<',
    onNextStep: '&'
  }
};