const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <div id="chat-container">
        <message-list style="height: calc(100vh - 50px); display: block; overflow-y: scroll;"></message-list>
        <send-message-form class="pb-2"></send-message-form>
    </div>
`;

export default class ChatContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('chat-container', ChatContainer);