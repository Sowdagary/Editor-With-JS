// variables
const text = document.getElementById('text');
const run = document.getElementById('run');
const copy = document.querySelector('#copy');

// eventListeners

// copy text to the clipboard
copy.addEventListener('click', copyText);

// functions

// adding mother text
text.innerHTML = `<!DOCTYPE html>
<html>
  <head>
      <title>Editor The Web</title>
  </head>
  <body>
      <p>Welcome to Editor</p>
  </body>
</html>
`;

// runing code, add result to the html
setInterval(change, 1);
function change() {
    run.innerHTML = `${text.value}`;
}

// copy text to the clipboard
function copyText() {
    text.select();
    document.execCommand('copy');
}