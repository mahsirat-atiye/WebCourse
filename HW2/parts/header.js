const element = document.getElementById("header");

function randInRange(min = 0, max = 255) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandRGB() {
  return [randInRange(), randInRange(), randInRange()].join(" ");
}

function changeColor() {
  const from = `rgb(${getRandRGB()})`;
  const to = `rgb(${getRandRGB()} / 70%)`;
  element.style.background = `linear-gradient(90deg, ${from}, ${to}), url("./assets/banner.jpeg") right / cover no-repeat`;
}

const style = css`
  #header {
    height: 20rem;
    padding-top: 4rem;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    padding-top: 100px;
    background: #3c31dd;
  }
  .banner-content {
    width: 40%;
    margin: auto;
  }
`;

element.innerHTML = html`
  ${style}
  <div class="banner-content">
    <h1>لورم ایپسوم</h1>
    <p>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
    </p>
    <button class="btn btn-warning text-light rounded-pill px-3">
      تغیر رنگ
    </button>
  </div>
  <div class="curve"></div>
`;

changeColor();

const changeColorButton = element.querySelector(".banner-content .btn");
changeColorButton.onclick = changeColor;
