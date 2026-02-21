class CaseCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/components/case-card/styles.css';
    this.shadowRoot.appendChild(link);
  }

  static get observedAttributes() {
    return ['img', 'heder', 'tag', 'year', 'subtitle', 'link'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const contentElement = this.shadowRoot.querySelector('.root');
    if (contentElement) {
      contentElement.remove();
    }

    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'root';
    contentWrapper.innerHTML = `
      <a href="${this.link || ''}" class="case-card">
        <img src="${this.img || ''}" alt="Превью">
        <div class="text">
          <div class="upperline">
            <h3>${this.heder || ''}</h3>
            <span>${this.tag || ''}</span>
            <time>${this.year || ''}</time>
          </div>
          <p>${this.subtitle || ''}</p>
        </div>
      </a>
    `;

    this.shadowRoot.appendChild(contentWrapper);
  }
}

customElements.define('case-card', CaseCard);
