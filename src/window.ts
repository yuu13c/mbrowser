let View: HTMLElement | null = null;
let Urlin: HTMLInputElement | null = null;

window.addEventListener('load', () => {
    View = document.getElementById('view');
    Urlin = document.getElementById('urlin') as HTMLInputElement;
    Urlin.value = 'https://translate.google.com/';
    View?.setAttribute('src',
        'data:text/html,<h1>Hello World!</h1> \
    <p>Please enter only <b>reliable</b> URLs.</p> \
    <p>Electron <script>document.write(process.versions.electron)</script></p>');
}, false);

function KeyPressed(key: number): void {
    if (key != 13) return;
    Urlin?.blur();
    View?.setAttribute('src', Urlin?.value as string);
}

function ClosePressed(): void {
    window.close();
}