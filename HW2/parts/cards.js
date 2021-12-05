const element = document.getElementById("cards");

const style = css`
  #cards {
    margin: 5rem 0;
  }
  #cards .card {
    margin: 2rem;
  }
  #cards .card-group {
    flex-flow: initial;
    justify-content: space-evenly;
  }
  #cards .card .card-header {
    background: #667ffe;
  }
  #cards .card:nth-child(2) .card-header {
    background: #fc6986;
  }
  #cards .card-body {
    display: flex;
    flex-direction: column;
  }
  #cards .card-body button {
    margin: auto;
  }
  #cards .card .badge {
    position: absolute;
    left: 5px;
    transform: rotate(-90deg);
  }
  @media (min-width: 600px) {
    #cards .card {
      flex: initial;
    }
    #cards .card:hover {
      transform: scale(1.25);
    }
  }
`;

element.innerHTML = html`
  ${style}
  <h2 class="text-center mb-5 text-center display-1">لورم ایپسوم</h2>
  <div class="card-group">
    ${Array(3)
      .fill({
        title: "لورم ایپسوم",
        description: "description",
        items: ["item 1", "item 2", "item 3"],
      })
      .map(
        (d, i) => html`
          <div class="card">
            <div class="card-header text-white">
              ${i == 1 ? html`<span class="badge bg-danger">مهم</span>` : ""}
              <p class="card-title">${d.title}</p>
              <p class="card-subtitle">${d.description}</p>
            </div>
            <div class="card-body bg-light text-dark">
              <ul>
                ${d.items.map((it) => html`<li class="card-text">${it}</li>`)}
              </ul>
              <button href="#" class="btn btn-warning text-light rounded-pill">
                Go somewhere
              </button>
            </div>
          </div>
        `
      )}
  </div>
`;
