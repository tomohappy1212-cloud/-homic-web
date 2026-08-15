document.addEventListener("DOMContentLoaded", () => {

  /*
   * =========================
   * HEADER
   * =========================
   */

  const header = document.querySelector(".header");

  if (header) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 30) {

        header.style.boxShadow =
          "0 8px 30px rgba(0,0,0,.07)";

      } else {

        header.style.boxShadow =
          "none";

      }

    });

  }


  /*
   * =========================
   * FOOTER YEAR
   * =========================
   */

  const year = new Date().getFullYear();

  const footerYear =
    document.querySelector("footer small");

  if (footerYear) {

    footerYear.textContent =
      `© ${year} HOMIC. All Rights Reserved.`;

  }


  /*
   * =========================
   * PAGE TOP
   * =========================
   */

  const pageTop =
    document.querySelector(".footer-back");

  if (pageTop) {

    pageTop.addEventListener("click", (event) => {

      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /*
   * =========================
   * FAQ
   * =========================
   */

  const details =
    document.querySelectorAll("details");

  details.forEach((item) => {

    item.addEventListener("toggle", () => {

      if (item.open) {

        details.forEach((other) => {

          if (
            other !== item &&
            other.open
          ) {

            other.open = false;

          }

        });

      }

    });

  });

});
