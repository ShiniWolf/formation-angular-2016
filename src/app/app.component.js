class WaAppController {
  constructor () {
  }

  log (res) {
    console.log(res);
  }
}

export const WaAppComponent = {
  template:   require('./app.component.html'),
  controller: WaAppController
};