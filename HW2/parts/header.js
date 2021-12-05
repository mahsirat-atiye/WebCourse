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

  #header:after {
    content: "";
    width: 100%;
    transform: scaleY(0.5);
    transform-origin: bottom;
    position: absolute;
    bottom: 0;
    height: 250px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 250' fill='%23fff'%3E%3Cpath d='m0 256 48-42.7C96 171 192 85 288 80s192 69 288 112 192 53 288 32 192-75 288-101.3C1248 96 1344 96 1392 96h48v224H0z' /%3E%3C/svg%3E%0A") bottom / cover;
    background-repeat: no-repeat;
    pointer-events: none;
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
`;

changeColor();

const changeColorButton = element.querySelector(".banner-content .btn");
changeColorButton.onclick = changeColor;
