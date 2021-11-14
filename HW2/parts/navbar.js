const element = document.getElementById("navbar");

const style = css`
  .bootstap {
    background: blue;
  }
`;

element.innerHTML = html`
  ${style}
  <div class="">
    <div class="bootstap">
      adsds adsds adsds adsds adsds adsds adsds adsds adsds adsds adsds adsds
    </div>
    ${"2   salam"}
  </div>
`;
