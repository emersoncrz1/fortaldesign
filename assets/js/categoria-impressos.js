const products = [...document.querySelectorAll(".product-card")];
const chips = [...document.querySelectorAll(".chip")];
const sortSelect = document.querySelector("#sortSelect");
const grid = document.querySelector("#productGrid");
const countLabel = document.querySelector("#countLabel");

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const filter = chip.dataset.filter;
    let count = 0;
    products.forEach(card => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !show);
      if (show) count++;
    });
    countLabel.textContent = `${count} produto${count !== 1 ? "s" : ""}`;
  });
});

sortSelect.addEventListener("change", () => {
  const value = sortSelect.value;
  if (value === "featured") return;
  const sorted = [...products].sort((a,b) => {
    const A = a.dataset.name.localeCompare(b.dataset.name, "pt-BR");
    return value === "az" ? A : -A;
  });
  sorted.forEach(card => grid.appendChild(card));
});

const searchMap = products.map(card => [card.dataset.name, "#produtos"]);
const searchInput = document.querySelector("#searchInput");
const searchResults = document.querySelector("#searchResults");
const searchButton = document.querySelector("#searchButton");

function doSearch(){
  const q = searchInput.value.toLowerCase().trim();
  if(!q){
    searchResults.innerHTML = "";
    searchResults.classList.remove("active");
    return;
  }
  const matches = searchMap.filter(([name]) => name.toLowerCase().includes(q)).slice(0,8);
  searchResults.innerHTML = matches.length
    ? matches.map(([name]) => `<a href="#produtos" data-search="${name}">${name}</a>`).join("")
    : `<a href="#contato">Não encontrou? Pedir orçamento</a>`;
  searchResults.classList.add("active");
}
searchInput.addEventListener("input", doSearch);
searchButton.addEventListener("click", doSearch);

searchResults.addEventListener("click", e => {
  const link = e.target.closest("[data-search]");
  if(!link) return;
  const name = link.dataset.search;
  searchInput.value = name;
  products.forEach(card => {
    const show = card.dataset.name === name;
    card.classList.toggle("hidden", !show);
  });
  countLabel.textContent = "1 produto";
  searchResults.classList.remove("active");
});

document.addEventListener("click", e => {
  if(!e.target.closest(".search-box")) searchResults.classList.remove("active");
});

const mobileMenu = document.querySelector("#mobileMenu");
const mainMenu = document.querySelector("#mainMenu");
mobileMenu.addEventListener("click", () => mainMenu.classList.toggle("open"));

document.querySelectorAll(".side-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const list = btn.nextElementSibling;
    list.classList.toggle("open");
    btn.querySelector("span").textContent = list.classList.contains("open") ? "−" : "+";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
