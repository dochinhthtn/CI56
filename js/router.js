let router = new Navigo(null, true);
let $app = document.getElementById('app');

router.on('/homepage', function () {
    $app.innerHTML = 'this is homepage';
}).resolve();

router.on('/about', function () {
    $app.innerHTML = 'this is about page';
}).resolve();

router.on('/support', function () {
    $app.innerHTML = 'this is support page';
}).resolve();

router.on('/auth', function () {
    $app.innerHTML = '<auth-screen></auth-screen>';
}).resolve();

router.on('/index', function () {
    $app.innerHTML = '<index-screen></index-screen>';
}).resolve();

router.on(function() {
    // router.navigate('/auth');
}).resolve();

window.router = router;
