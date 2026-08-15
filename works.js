const works = [

  {
    category: "CAFE",
    title: "CAFE MELLOW",
    description:
      "カフェ・飲食店向けホームページ",

    symbol: "CAFE"
  },


  {
    category: "RESTAURANT",
    title: "TORIKARA",
    description:
      "飲食店向けホームページ",

    symbol: "FOOD"
  },


  {
    category: "BEAUTY",
    title: "CUT BASE",
    description:
      "美容室・サロン向けホームページ",

    symbol: "BEAUTY"
  },


  {
    category: "KITCHEN CAR",
    title: "FOOD TRUCK",
    description:
      "キッチンカー向けホームページ",

    symbol: "TRUCK"
  }

];


const container =
  document.getElementById(
    "works-container"
  );


if (container) {

  works.forEach((work) => {

    const element =
      document.createElement("article");

    element.className = "work";


    element.innerHTML = `

      <div class="work-image">
        ${work.symbol}
      </div>

      <div class="work-info">

        <small>
          ${work.category}
        </small>

        <h3>
          ${work.title}
        </h3>

        <p>
          ${work.description}
        </p>

      </div>

    `;


    container.appendChild(element);

  });

}
