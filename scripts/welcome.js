const header = document.getElementById("title");
const text = header.textContent;
const cursor = document.getElementById("cursor");
header.textContent = "";

let i = 0;

function type() {
  if (i < text.length) {
    header.textContent += text[i];
    header.appendChild(cursor);
    i++;
    setTimeout(type, 130);
  }
}

type();
