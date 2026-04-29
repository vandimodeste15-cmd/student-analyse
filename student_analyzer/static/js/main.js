/**
 * StudyAI — main.js
 * Progressive enhancement utilities.
 */

// Auto-dismiss flash alerts after 5 seconds
document.addEventListener("DOMContentLoaded", () => {
  const alerts = document.querySelectorAll(".alert.alert-dismissible");
  alerts.forEach((alert) => {
    setTimeout(() => {
      const bsAlert = bootstrap.Alert.getOrCreateInstance(alert);
      bsAlert?.close();
    }, 5000);
  });

  // Activate tooltips
  const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltips.forEach((el) => new bootstrap.Tooltip(el));

  // Highlight active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active", "text-white");
    }
  });
});
