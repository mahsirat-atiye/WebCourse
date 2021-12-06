const element = document.getElementById("comments");

const style = css`
  #comments {
    display: flex;
    justify-content: center;
  }

  .control {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    background: #ffcf47;
    border-radius: 20px;
    margin-top: -20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    z-index: 2;
  }

  .prev,
  .next {
    background-size: 22px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .prev {
    background-image: url("assets/chevron_left_icon.png");
  }

  .next {
    background-image: url("assets/chevron_right_icon.png");
  }

  .prev:active,
  .next:active {
    transform: scale(0.8);
  }
`;

const lorem =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ";
element.innerHTML = html`
  ${style}
  <div
    id="comments-crasual"
    class="carousel slide"
    data-bs-ride="carousel"
    style="max-width: 500px;"
  >
    <div class="carousel-inner">
      ${["assets/commenter1.jpeg", "assets/commenter2.jpeg"].map(
        (src, index) => html`
          <div class="carousel-item ${index === 0 ? "active" : ""}">
            <div class="flex items-center">
              <img src="${src}" class="img-fluid rounded-start" alt="..." />
              <div class="card-body">
                <p>${lorem}</p>
              </div>
            </div>
          </div>
        `
      )}
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#comments-crasual"
      data-bs-slide="prev"
    >
      <span class="control prev "></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#comments-crasual"
      data-bs-slide="next"
    >
      <span class="control next "></span>
    </button>
  </div>
`;
