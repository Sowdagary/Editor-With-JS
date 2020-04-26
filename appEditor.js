const editor = document.getElementById("editor");
const text = document.getElementById("text");
const run = document.getElementById("run");
const reset = document.getElementById("reset");
const clearAll = document.getElementById("clearAll");

// ------------------------- Editor Default Codes ------------------------- //
editor.value = `<!DOCTYPE html>
<html>
  <head>
        <title>Editor!</title>
  </head>
  <body>
        <h3>Editor The Web!</h3>
  </body>
</html>`;

// ------------------------- Click And Run The Codes ------------------------- //
run.onclick = clickBtn;
function clickBtn() {
    let value = editor.value;
    text.innerHTML = value;
}
setInterval(clickBtn, 1);

// ------------------------- Reset The Editor Codes ------------------------- //
reset.onclick = resetBtn;
function resetBtn() {
    editor.value = `<!DOCTYPE html>
<html>
  <head>
        <title>Editor!</title>
  </head>
  <body>
        <h3>Editor The Web-With JS!</h3>
  </body>
</html>`;
}

// ------------------------- Clear All Page ------------------------- //
clearAll.onclick = clearAllPage;
function clearAllPage() {     
    editor.value = ``;
    text.innerHTML = ``;
}
