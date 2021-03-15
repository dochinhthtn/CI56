const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <form action="" id="register-form" class="p-3">
        <h2 class="text-center">Register to your account</h2>
        <p class="text-muted text-center">We are Different, We Make You Different.</p>
        <input-wrapper id="name" type="text" placeholder="Your name"></input-wrapper>
        <input-wrapper id="email" type="email" placeholder="Email"></input-wrapper>
        <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
        <input-wrapper id="password-confirmation" type="password" placeholder="Password confirmation"></input-wrapper>
        <button class="btn btn-primary btn-block">Register</button>
    </form>
`;

export default class RegisterForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('register-form', RegisterForm);