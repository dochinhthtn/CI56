import { getCurrentUser, getUserByToken, updateUser } from "../models/user.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <div id="user-actions">
        <div id="status-free" class="m-2">
            <button id="flirt-btn" class="btn btn-block btn-primary">Flirt</button>
            <button id="bite-btn" class="btn btn-block btn-info">Bite</button>
        </div>

        <div id="status-flirting" class="m-2">
            <button id="stop-flirting-btn" class="btn btn-block btn-secondary">Stop flirting</button>
        </div>

        <div id="status-chatting" class="m-2">
            <button id="end-conversation-btn" class="btn btn-block btn-danger">End Conversation</button>
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

        this.$flirtBtn = this.shadowRoot.getElementById('flirt-btn');
        this.$biteBtn = this.shadowRoot.getElementById('bite-btn');
        this.$stopFlirtingBtn = this.shadowRoot.getElementById('stop-flirting-btn');
        this.$endConversationBtn = this.shadowRoot.getElementById('end-conversation-btn');
    }

    async connectedCallback() {
        let currentUser = await getCurrentUser();

        this.$flirtBtn.onclick = async () => {
            await updateUser(currentUser.id, { status: 'flirting' });
        }

        this.$stopFlirtingBtn.onclick = async () => {
            await updateUser(currentUser.id, { status: 'free' });
        }
    }

    static get observedAttributes() {
        return ['status'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'status') {

            if (newValue == 'free') {
                this.$free.style.display = 'block';
                this.$flirting.style.display = 'none';
                this.$chatting.style.display = 'none';
            } else if (newValue == 'flirting') {
                this.$free.style.display = 'none';
                this.$flirting.style.display = 'block';
                this.$chatting.style.display = 'none';
            } else if (newValue == 'chatting') {
                this.$free.style.display = 'none';
                this.$flirting.style.display = 'none';
                this.$chatting.style.display = 'block';
            }
        }
    }
}

window.customElements.define('user-actions', UserActions);