document.querySelectorAll(".faq-item button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("open");
  });
});

const mainGallery = document.querySelector("#productGalleryMain");
document.querySelectorAll(".thumb[data-src]").forEach(thumb => {
  thumb.addEventListener("click", () => {
    if (!mainGallery) return;
    mainGallery.src = thumb.dataset.src;
    document.querySelectorAll(".thumb").forEach(item => {
      item.classList.toggle("active", item === thumb);
    });
  });
});
