const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <div id="message-container" class="mb-1">
        <span id="content" class="d-inline-block p-2 bg-primary text-white rounded">Dảk dảk bủh bủh lmao</span>
    </div>
`;

export default class MessageContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$container = this.shadowRoot.getElementById('message-container');
        this.$content = this.shadowRoot.getElementById('content');
    }

    static get observedAttributes() {
        return ['content', 'owned'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'content') {
            this.$content.innerHTML = newValue;
        } else if (attrName == 'owned') {
            if (newValue == 'true') this.$container.classList.add('text-right');
        }
    }
}

window.customElements.define('message-container', MessageContainer);
