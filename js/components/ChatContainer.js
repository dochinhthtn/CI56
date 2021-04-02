import { getCurrentUser } from "../models/user.js";
import { listenConversation } from "../models/conversation.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <div id="chat-container">
        <message-list id="message-list" style="height: calc(100vh - 50px); display: block; overflow-y: scroll;"></message-list>
        <send-message-form class="pb-2"></send-message-form>
    </div>
`;

export default class ChatContainer extends HTMLElement {
    currentUser = null;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$messageList = this.shadowRoot.getElementById('message-list');
    }

    static get observedAttributes() {
        return ['conversation-id'];
    }

    async connectedCallback() {
        this.currentUser = await getCurrentUser();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'conversation-id') {
            listenConversation(newValue, (data) => {
                console.log(this.currentUser);

                let messages = data.messages.map((x) => {
                    return {
                        content: x.content,
                        owned: this.currentUser.id == x.userId
                    };
                });

                console.log(messages);

                this.$messageList.setAttribute('messages', JSON.stringify(messages));
            });
        }
    }
}

window.customElements.define('chat-container', ChatContainer);