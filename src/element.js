export class Element {
  constructor() {
    this.el = null;
  }

  removeElement() {
    this.el.remove();
  }

  clickElement() {
    this.el.click();
  }

  render() {
    const div = document.createElement("div");
    this.el = div;
    var _this = this;
    div.addEventListener("click", () => { _this.removeElement() });
  }
}
