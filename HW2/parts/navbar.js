const element = document.getElementById("navbar");

const style = css`
  
`;

element.innerHTML = html`
  ${style}
  <div dir="ltr" class="container-fluid">
    <a class="bg-warning text-black rounded-3 navbar-brand px-5" href="#">لوگو</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbar-list-content"
      aria-controls="navbar-list-content"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div dir="rtl" class="collapse navbar-collapse" id="navbar-list-content">
      <ul class="navbar-nav">
        ${[
          { title: "بخش اول", id: "cards" },
          { title: "بخش دوم", id: "gallery" },
          { title: "بخش سوم", id: "activities" },
          { title: "بخش چهارم", id: "contact-us" },
          { title: "بخش پنجم", id: "comments" },
        ]
          .map(
            (item) => html`
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#${item.id}"
                >
                  ${item.title}
                </a>
              </li>
            `
          )
          .join("")}
      </ul>
    </div>
  </div>
`;
