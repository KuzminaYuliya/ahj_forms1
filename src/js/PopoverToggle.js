/* eslint-disable linebreak-style */
export default class PopoverToggle {
  constructor() {
    this.tooltipContainer = null;
    this.btn = null;
    this.arrow = null;
  }

  init() {
    const tooltipContainer = document.querySelector('.tooltip_container');
    const btn = document.querySelector('.btn');
    const arrow = document.querySelector('.arrow');
    this.tooltipContainer = tooltipContainer;
    this.btn = btn;
    this.arrow = arrow;
    this.btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.buttonClick();
    });
  }

  buttonClick() {
    this.tooltipContainer.classList.toggle('display_yes');
    this.tooltipContainer.classList.toggle('display_none');
    this.tooltipContainer.style.top = `-${this.btn.offsetTop + this.btn.offsetHeight + this.btn.offsetHeight / 2 + this.arrow.offsetHeight}px`;
    this.tooltipContainer.style.left = `-${this.btn.offsetLeft - this.btn.offsetWidth / 2}px`;
    this.arrow.style.left = `${this.btn.offsetWidth / 2 + this.arrow.offsetWidth / 2}px`;
  }
}
