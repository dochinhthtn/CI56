const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <div id="user-actions">
        <div id="status-free" class="m-2">
            <button class="btn btn-block btn-primary">Flirt</button>
            <button class="btn btn-block btn-info">Bite</button>
        </div>

        <div id="status-flirting" class="m-2">
            <button class="btn btn-block btn-secondary">Stop flirting</button>
        </div>

        <div id="status-chatting" class="m-2">
            <button class="btn btn-block btn-danger">End Conversation</button>
        </div>
    </div>
`;

export default class UserActions extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$free = this.shadowRoot.getElementById('status-free');
        this.$flirting = this.shadowRoot.getElementById('status-flirting');
        this.$chatting = this.shadowRoot.getElementById('status-chatting');
    }

    static get observedAttributes() {
        return ['status'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'status') {

            if(newValue == 'free') {
                this.$free.style.display = 'block';
                this.$flirting.style.display = 'none';
                this.$chatting.style.display = 'none';
            } else if(newValue == 'flirting') {
                this.$free.style.display = 'none';
                this.$flirting.style.display = 'block';
                this.$chatting.style.display = 'none';
            } else if(newValue == 'chatting') {
                this.$free.style.display = 'none';
                this.$flirting.style.display = 'none';
                this.$chatting.style.display = 'block';
            }            
        }
    }
}

window.customElements.define('user-actions', UserActions);