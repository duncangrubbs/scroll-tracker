class ScrollTracker extends HTMLElement {
  constructor() {
    super();

    this.width = '0px';

    document.addEventListener('scroll', (evt) => {
      const limit = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight, 
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      const diff = limit - document.documentElement.clientHeight;
      const diffPercent = diff / limit;
      const percent = evt.target.scrollingElement.scrollTop / (limit * diffPercent);
      const pixCalc = (document.documentElement.clientWidth) * percent;

      this.width = `${pixCalc}px`;
      this.style.width = this.width;
    });
  }

  connectedCallback() {
    // Standard styles
    this.style.position = 'fixed';
    this.style.zIndex = '1000';
    this.style.top = '0';
    this.style.height = '0';
    this.style.width = this.width;

    // Styles from attributes
    this.style.background = this.hasAttribute('color') ? this.getAttribute('color') : '#45b4f5';
    this.style.height = this.hasAttribute('height') ? this.getAttribute('height') : '3px';
  }
}

customElements.define('scroll-tracker', ScrollTracker);
