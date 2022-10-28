const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const liEls = document.querySelectorAll(".lista li");
  const ulEl = document.querySelector(".lista");
  liEls.forEach(el => {
      el.remove();
  });
  cosasQueAprendimos.forEach(element => {
    const liEl = document.createElement("li");
    liEl.textContent = element.tema;
    /* liEl.classList.add(element.class || "item") */
    liEl.classList = element.class;
    ulEl.appendChild(liEl)
  })
}

main();
