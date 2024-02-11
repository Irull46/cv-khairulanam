document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".nav-list a");

  // Fungsi untuk memperbarui menu yang aktif saat pengguna menggulir halaman
  function updateActiveMenu() {
    let fromTop = window.scrollY;

    menuLinks.forEach(function (menuLink) {
      let section = document.querySelector(menuLink.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        menuLink.classList.add("active");
      } else {
        menuLink.classList.remove("active");
      }
    });
  }

  // Tambahkan event listener untuk setiap kali pengguna menggulir halaman
  window.addEventListener("scroll", updateActiveMenu);

  // Panggil fungsi updateActiveMenu saat halaman dimuat
  updateActiveMenu();

  // Tambahkan event listener untuk setiap tautan menu
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = menuLink.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });
});
