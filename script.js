// Simulación de apertura de tapa
function abrirTapa() {
  const tapa = document.getElementById("lid");
  tapa.setAttribute("y", "40"); // sube la tapa
  setTimeout(() => {
    tapa.setAttribute("y", "60"); // vuelve a cerrar
  }, 2000);
}

// Galería interactiva
function ampliar(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function cerrarLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
