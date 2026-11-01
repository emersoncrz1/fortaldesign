document.querySelectorAll(".faq-item button").forEach(btn=>{
  btn.addEventListener("click",()=>btn.parentElement.classList.toggle("open"));
});
document.querySelectorAll(".thumb[data-src]").forEach(thumb=>{thumb.addEventListener("click",()=>{const main=document.querySelector("#productGalleryMain");if(main){main.src=thumb.dataset.src;document.querySelectorAll(".thumb").forEach(t=>t.classList.remove("active"));thumb.classList.add("active");}});});
  thumb.addEventListener("click",()=>{
    const main=document.querySelector(".gallery-main");
    main.textContent=thumb.dataset.label || `Visual ${i+1}`;
  });
});
