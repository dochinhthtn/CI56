const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <div id="message-list"></div>
`;

export default class MessageList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$list = this.shadowRoot.getElementById('message-list');
    }

    static get observedAttributes() {
        return ['messages'];

    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        // newValue: string (json)
        if(attrName == 'messages') {
            let messages = JSON.parse(newValue);
            this.$list.innerHTML = '';
            
            for(let message of messages) {
                // tạo và gán thuộc tính cho message-container -> <message-container content=""></message-container>
                let $messageContainer = document.createElement('message-container');
                $messageContainer.setAttribute('content', message.content);
                $messageContainer.setAttribute('owned', message.owned);
                // thêm message-container vào list
                this.$list.appendChild($messageContainer);
            }
        }
    }
}

/* 
    messages = "[
        {"content": "Hello", owned: false},
        {"content": "Hi there", owned: true},
        {"content": "Em an com chua", owned: false}
    ]"
*/

window.customElements.define('message-list', MessageList);
