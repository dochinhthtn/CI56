const $template = document.createElement('template');
$template.innerHTML = `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <form id="login-form" class="p-3">
        <h2 class="text-center">Login to your account</h2>
        <p class="text-muted text-center">We are Different, We Make You Different.</p>
        <input-wrapper id="email" type="email" placeholder="Email"></input-wrapper>
        <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
        <button class="btn btn-primary btn-block">Login</button>
    </form>
`;

export default class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('login-form', LoginForm);