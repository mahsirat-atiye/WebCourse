const element = document.getElementById("gallery");

const style = css`
 #gallery{
    background-color:rgba(128, 128, 128, 0.384);
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    height:800px;
}
.gallery_section{
    display: grid;
    text-align: center;
    grid-template-columns: repeat(6 , 1fr);
    grid-template-rows: repeat(3 , 250px);
    grid-gap: 10px;
    margin: 10px;
    padding: 15px;
    grid-template-areas: "g1 g1 g1 g2 g2 g2 " "g1 g1 g1 g2 g2 g2" "g3 g3 g4 g4 g5 g5 ";
    overflow: hidden;
}

.section{
    background-color: rgba(128, 128, 128, 0.856);
    padding: 15px 15px 15px 15px ;
    margin: 10px 10px 10px 10px ;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    

}
.g1{
    grid-area: g1;
    background-image: linear-gradient(to bottom , #4d4c4c35, #000000),url(assets/gallery_picture5.jpg);
}.g2{
    grid-area: g2;
    background-image: linear-gradient(to bottom , #4d4c4c35, #000000),url(assets/gallery_picture2.jpg);
}.g3{
    grid-area: g3;
    background-image: linear-gradient(to bottom , #4d4c4c35, #000000),url(assets/gallery_picture4.jpg);
}.g4{
    grid-area: g4;
    background-image: linear-gradient(to bottom , #4d4c4c35, #000000),url(assets/gallery_picture1.jpg);
}.g5{
    grid-area: g5;
    background-image: linear-gradient(to bottom , #4d4c4c35, #000000),url(assets/gallery_picture3.jpg);
}
/*.text{
    position: absolute;
    bottom:-100%;
    left: 0px;
    width: 100%;
    background:rgb(0,0,8);
    box-sizing: border-box;
    color: #fff;

}
*/
/*
.section:hover  .text{
    bottom: 0px;
    transition: 0.5s;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -ms-transition: 0.5s;
    -o-transition: 0.5s;
    transition-delay: 0.5s;
}
*/
`;

element.innerHTML = html`
${style}
<section class="gallery_section">
    <div class="g1 section">
        <p class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words which don't look even slightly believable
        </p>
    </div>
    <div class="g2 section">
        <p class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words which don't look even slightly believable
        </p>
    </div>
    <div class="g3 section">
        <p class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words which don't look even slightly believable
        </p>
    </div>
    <div class="g4 section">
        <p class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words which don't look even slightly believable
        </p>
    </div>
    <div class="g5 section">
        <p class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words which don't look even slightly believable
        </p>
    </div>
</section>
`;

