const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

function closeMenu() {
  navMenu.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu when clicking a link (mobile)
navMenu?.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.matches("a")) closeMenu();
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

// Frontend-only form handling (no backend)
const form = document.getElementById("interestForm");
const formNote = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  // Minimal validation (browser already does required fields)
  const name = (data.get("name") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();

  if (!name || !email) {
    formNote.textContent = "Please fill out your name and email.";
    return;
  }

  // Demo success message
  form.reset();
  formNote.textContent = "Thank you for your interest, we’ll reach out soon.";
});

// Simple accordion
document.querySelectorAll("[data-accordion] .acc-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    const panel = btn.nextElementSibling;

    // toggle
    btn.setAttribute("aria-expanded", String(!expanded));
    if (panel) panel.hidden = expanded;
  });
});

