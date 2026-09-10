// ---------------------------------------------------------------------------
// 1. Load each section's HTML from its own file in /sections.
//    This is what makes the site modular: edit sections/cv.html on its own
//    without touching index.html or any other section.
// ---------------------------------------------------------------------------
async function loadSections() {
  const targets = document.querySelectorAll("[data-include]");

  await Promise.all(
    Array.from(targets).map(async (el) => {
      const path = el.getAttribute("data-include");
      try {
        const res = await fetch(path);
        if (!res.ok) throw new Error(`${path} responded with ${res.status}`);
        el.innerHTML = await res.text();
      } catch (err) {
        el.innerHTML = `<div class="section-inner"><p class="empty-state">Could not load this section (${path}). If you're opening this file directly by double-clicking it, run it through a local server instead (see README).</p></div>`;
        console.error(err);
      }
    })
  );
}

// ---------------------------------------------------------------------------
// 2. Mobile menu toggle
// ---------------------------------------------------------------------------
function setupMobileToggle() {
  const toggle = document.getElementById("tocToggle");
  const list = document.getElementById("tocList");
  if (!toggle || !list) return;

  toggle.addEventListener("click", () => {
    const isOpen = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the mobile menu after a link is tapped
  list.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      list.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ---------------------------------------------------------------------------
// 3. Highlight the active section in the sidebar as the user scrolls
// ---------------------------------------------------------------------------
function setupActiveSectionTracking() {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".toc a[data-section]");

  if (!sections.length || !navLinks.length) return;

  const linkFor = (id) =>
    document.querySelector(`.toc a[data-section="${id}"]`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("active"));
          const activeLink = linkFor(entry.target.id);
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", async () => {
  await loadSections();
  setupMobileToggle();
  setupActiveSectionTracking();
});
