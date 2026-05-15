const btn = document.getElementById("themeBtn");
const html = document.documentElement;
const saved = localStorage.getItem("theme") || "dark";

html.setAttribute("data-theme", saved);
btn.textContent = saved === "dark" ? "☀️" : "🌙";

btn.addEventListener("click", () => {
  const curr = html.getAttribute("data-theme");
  const next = curr === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", next);
  btn.textContent = next === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", next);
});

const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => obs.observe(el));