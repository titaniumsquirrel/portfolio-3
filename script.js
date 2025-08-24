function showSection(id) {
  // Hide all sections
  document.querySelectorAll("main section").forEach((section) => {
    section.classList.remove("active");
  });

  // Show clicked section
  document.getElementById(id).classList.add("active");
}
