// Horizonte — interacciones del sitio

// Menú móvil
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Animación de aparición al hacer scroll
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// Formulario de contacto: envía el mensaje por WhatsApp
const WHATSAPP_NUMBER = "542235500469";
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const nombre = (data.get("nombre") || "").toString().trim();
    const empresa = (data.get("empresa") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const mensaje = (data.get("mensaje") || "").toString().trim();

    const body = [
      `Hola Horizonte, soy ${nombre}${empresa ? ` de ${empresa}` : ""}.`,
      "",
      "Cómo llevo hoy la administración:",
      mensaje,
      "",
      `Mi email: ${email}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener"
    );
  });
}

// Año dinámico en el footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
