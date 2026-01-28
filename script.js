// Menu mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Popup projets (Tooltip)
const tooltip = document.getElementById("projectTooltip");
const cards = document.querySelectorAll(".project-card");

function positionTooltip(e) {
  let x = e.clientX + 20;
  let y = e.clientY + 20;

  if (x + tooltip.offsetWidth > window.innerWidth) {
    x = e.clientX - tooltip.offsetWidth - 20;
  }
  if (y + tooltip.offsetHeight > window.innerHeight) {
    y = e.clientY - tooltip.offsetHeight - 20;
  }

  tooltip.style.left = x + "px";
  tooltip.style.top = y + "px";
}

cards.forEach(card => {
  card.addEventListener("mouseenter", (e) => {
    tooltip.textContent = card.dataset.popup;
    tooltip.classList.add("show");
    positionTooltip(e);
  });

  card.addEventListener("mousemove", positionTooltip);

  card.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
  });
});

// 📩 Gestion du formulaire mailto
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const to = "angel.x.enriquez@gmail.com";
  const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.location.href = mailto;

  // Nettoyer le formulaire après l'ouverture de l'application mail
  setTimeout(() => {
    e.target.reset();
  }, 500); // Petit délai pour laisser le temps au navigateur de traiter le mailto
});
