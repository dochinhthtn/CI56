const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <div id="user-actions">
        <div id="status-free">
            <button class="btn btn-block btn-primary">Flirt</button>
            <button class="btn btn-block btn-info">Bite</button>
        </div>

        <div id="status-flirting">
            <button class="btn btn-block btn-secondary">Stop flirting</button>
        </div>

        <div id="status-chatting">
            <button class="btn btn-block btn-primary">End Conversation</button>
        </div>
    </div>
`;

export default class UserActions extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('user-actions', UserActions);