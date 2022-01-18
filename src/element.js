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
    div.addEventListener("click", function() {
      this.removeElement();
    });
  }
}
