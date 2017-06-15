module.exports = class extends think.Controller {
  __before(){
    this.indexService = this.service('index');
  }
}