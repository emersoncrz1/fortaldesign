document.querySelectorAll(".faq-item button").forEach(btn=>{
  btn.addEventListener("click",()=>btn.parentElement.classList.toggle("open"));
});
document.querySelectorAll(".thumb").forEach((thumb,i)=>{
  thumb.addEventListener("click",()=>{
    const main=document.querySelector(".gallery-main");
    main.textContent=thumb.dataset.label || `Visual ${i+1}`;
  });
});
