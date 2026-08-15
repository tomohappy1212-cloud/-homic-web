document.addEventListener("DOMContentLoaded", () => {

  // 現在の年を自動表示
  const year = new Date().getFullYear();

  const footerYear = document.querySelector("footer small");

  if (footerYear) {
    footerYear.innerHTML =
      `© ${year} HOMIC. All Rights Reserved.`;
  }

  // スクロール時にヘッダーの影を追加
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {
      header.style.boxShadow =
        "0 5px 25px rgba(0,0,0,.06)";
    } else {
      header.style.boxShadow = "none";
    }

  });

});
