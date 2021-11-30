const element = document.getElementById("comments");

const style = css `


  
.container {
    margin: auto;
    padding: 10px;
    cursor: pointer;
    float: centre;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 2s;
    position: relative;
  }





  .control {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    background: #FFCF47;
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
    background-image: url(assets/chevron_left_icon.png);
    left: -50px;
  }
  
  .next {
    background-image: url(assets/chevron_right_icon.png);
    right: -50px;
  }
  
  .prev:active,
  .next:active {
    transform: scale(0.8);
  }
`;

const lorem = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است "
element.innerHTML = html `
  ${style}
  <div class="container mb-3" style="max-width: 540px;">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
          
          <div class="carousel-item active">
              <div class="card mb-3" style="max-width: 600px;">
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img src="assets/commenter1.jpeg" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <p> ${lorem} </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="carousel-item ">
              <div class="card mb-3" style="max-width: 600px;">
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img src="assets/commenter2.jpeg" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <p> ${lorem} </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
          <span class="control prev "></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
          <span class="control next "></span>
      </button>
  </div>
</div>
  
`;