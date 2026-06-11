const botonSubir = document.getElementById("btnSubir");

window.addEventListener("scroll", () => {
  if (window.scrollY > 420) {
    botonSubir.classList.add("visible");
  } else {
    botonSubir.classList.remove("visible");
  }
});

botonSubir?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
