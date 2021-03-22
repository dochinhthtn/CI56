const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <div id="index-screen" class="d-flex">
        <div id="aside-left" class="bg-light w-25">
            <app-stat></app-stat>

            <user-actions status="free"></user-actions>
        </div>

        <chat-container class="w-75"></chat-container>
    </div>
`;

export default class IndexScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('index-screen', IndexScreen);