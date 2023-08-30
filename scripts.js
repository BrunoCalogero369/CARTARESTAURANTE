document.addEventListener("DOMContentLoaded", function() {
  const platosButton = document.getElementById("platos-button");
  const bebidasButton = document.getElementById("bebidas-button");
  const entradasButton = document.getElementById("entradas-button");
  const postresButton = document.getElementById("postres-button");

  platosButton.addEventListener("click", () => scrollToSection("platos-section"));
  bebidasButton.addEventListener("click", () => scrollToSection("bebidas-section"));
  entradasButton.addEventListener("click", () => scrollToSection("entradas-section"));
  postresButton.addEventListener("click", () => scrollToSection("postres-section"));

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
});
