const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <div id="auth-screen" class="container d-flex justify-content-around border rounded mt-5 p-3">
        <login-form></login-form>
        <register-form></register-form>
    </div>
`;

export default class AuthScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('auth-screen', AuthScreen);