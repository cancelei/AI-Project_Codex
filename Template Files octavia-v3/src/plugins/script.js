const dropdownLinks = document.querySelectorAll(".dropdown-link");
const singleLink = document.querySelectorAll(".single-link");
const dropdownLinksActive = document.querySelector(".dropdown-link .active");
const adminWrapLayout = document.querySelector(".app-admin-wrap-layout");

// header-sidebar
const headerBtn = document.querySelector(".header-btn-toggle");
const sidebarOverlay = document.querySelector(".sidebar-overlay");

//form
const formMaterialInput = document.querySelector(".form-material-input");

// dropdown menu functionality
dropdownLinks.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!btn.classList.contains("active")) {
      singleLink.forEach((s) => s.classList.remove("active"));
      dropdownLinks.forEach((x) => x.classList.remove("active"));
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
});

singleLink.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    singleLink.forEach((s) => s.classList.remove("active"));
    dropdownLinks.forEach((x) => x.classList.remove("active"));
    btn.classList.toggle("active");
  });
});

// END::menu functionality

if (headerBtn) {
  headerBtn.addEventListener("click", () => {
    adminWrapLayout.classList.toggle("sidebar-close");
    console.log("test");
  });
  sidebarOverlay.addEventListener("click", () =>
    adminWrapLayout.classList.remove("sidebar-close")
  );
}
