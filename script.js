document.addEventListener("DOMContentLoaded", () => {

  const header =
    document.querySelector(".header");

  if (header) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 25) {

        header.style.boxShadow =
          "0 8px 30px rgba(16,24,43,.08)";

      } else {

        header.style.boxShadow =
          "none";

      }

    });

  }


  const year =
    new Date().getFullYear();

  const footerYear =
    document.querySelector("footer small");

  if (footerYear) {

    footerYear.textContent =
      `© ${year} HOMIC. All Rights Reserved.`;

  }


  const pageTop =
    document.querySelector(".footer-back");

  if (pageTop) {

    pageTop.addEventListener(
      "click",
      (event) => {

        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  const details =
    document.querySelectorAll("details");

  details.forEach((item) => {

    item.addEventListener(
      "toggle",
      () => {

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

      }
    );

  });

});
