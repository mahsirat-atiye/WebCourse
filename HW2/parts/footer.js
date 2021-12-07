const footer = document.getElementById("footer");
const news = document.getElementById("news");

const style = css`
  footer {
  }

  #news {
    padding: 1rem;
    transform: translate(0, 4rem);
  }

  @media (max-width: 599px) {
    #news h2 {
      text-align: center;
    }
    #news form {
      flex-direction: column;
    }
    #news form > *:not(:first-child) {
      margin-top: 0.5rem;
    }
  }

  @media (min-width: 600px) {
    #news .form-control {
      flex: 1;
    }
    #news form > *:not(:first-child) {
      margin-right: 1rem;
    }
  }

  #footer {
    padding: 10rem 0rem 5rem 0;
    background: var(--bs-dark);
  }

  #footer .banner-content {
    text-align: center;
  }
`;

news.innerHTML = html`
  ${style}
  <h2>خبرنامه</h2>
  <form class="flex" onsubmit="void 0">
    <input type="email" placeholder="Email address" class="form-control" />
    <input type="email" placeholder="Email address" class="form-control" />
    <input type="email" placeholder="Email address" class="form-control" />
    <button type="submit" class="btn btn-warning">submit</button>
  </form>
`;
news.className = "bg-primary m-auto w-75";

footer.innerHTML = html`
  <div class="banner-content text-white">
    <p>YourName@Gmail.com</p>
    <p>Copyright 2021 Your Name | Design by Your Name</p>
  </div>
`;
