const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    
    <div id="app-stat">
        <div class="border rounded bg-white p-3 m-2">
            <i class="fas fa-users"></i>
            <span id="free-user-count">100</span>
        </div>
        
        <div class="border rounded bg-white p-3 m-2">
            <i class="fas fa-comments"></i>
            <span id="chatting-user-count">100</span>
        </div>

        <div class="border rounded bg-white p-3 m-2">
            <i class="fas fa-heart"></i>
            <span id="flirt-user-count">100</span>
        </div>

    </div>
`;

export default class AppStat extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('app-stat', AppStat);