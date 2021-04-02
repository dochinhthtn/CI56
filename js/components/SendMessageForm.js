import { addMessage } from "../models/conversation.js";
import { getCurrentUser } from "../models/user.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <form id="send-message-form" class="d-flex justify-content-between">
        <input type="text" id="content" class="form-control">
        <button class="btn btn-primary">Send</button>
    </form>
`;

export default class SendMessageForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$form = this.shadowRoot.getElementById('send-message-form');
        this.$content = this.shadowRoot.getElementById('content');
    }

    connectedCallback() {

        this.$form.onsubmit = async (event) => {
            event.preventDefault();
            let currentUser = await getCurrentUser();

            if(this.$content.value == '') {
                alert("Please input your message content");
                return;
            }

            let message = {
                content: this.$content.value,
                dateModified: new Date().toISOString(),
                userId: currentUser.id
            };

            if(!currentUser.currentConversation) {
                alert("You are not in a conversation!");
                return;
            }

            await addMessage(currentUser.currentConversation, message);
        }
    }
}

window.customElements.define('send-message-form', SendMessageForm);
