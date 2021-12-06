const element = document.getElementById("contact-us");

const style = css`
.contact {
    display: grid;
    grid-column: -1/1;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;   
}

.section-us{
    display: grid;
    background-color: rgba(0, 0, 0, 0.753);
    clip-path: polygon(0 0, 0 0, 50% 10%, 100% 1%, 100% 0, 100% 0, 100% 85%, 100% 85%, 100% 85%, 49% 98%, 0 85%, 0% 85%);
    grid-template-rows:repeat(6 , 100px);
    grid-template-columns:repeat(4,1fr); 
}
.t1{
    grid-row:-6/-5 ;
    grid-column: 4/3;
}
.t2{
    grid-row:-5/-4 ;
    grid-column: 4/3;
    
}
.t3{
    grid-row:-4/-3 ;
    grid-column:4/3;
    
}
.instagram{
    grid-row: -4/-5;
    grid-column: 3/2;
}
.telegram{
    grid-row:-3/-4;
    grid-column: 3/2;
}
.whatsapp{
    grid-row: -2/-3;
    grid-column: 3/2;
}
.text-us{
    color: white;
    text-align: start;
    padding: 1rem;
    padding-top: 4rem;
    font-size: 45px;
    padding-right: 65px;
}
.long{
    color: orange;
    font-size: 60px;
    
}
.t1,.t3{
    padding-top: 80px;
}
.fab{
    padding-top: 15px;
    padding-right: 200px;
    color: white;
    font-size: 60px;
    cursor: pointer;
    transform: 0.8s;
    -webkit-transform: 0.8s;
    -moz-transform: 0.8s;
    -ms-transform: 0.8s;
    -o-transform: 0.8s;
}

.fab:hover{
    color: orange;
}

@media screen and (max-width:1054px) {
    .long{
        font-size: 45px;
    }
    .t1,
    .t3{
        font-size: 35px;
    }
    .fab{
        font-size: 50px;
    }
    
}
`;
element.innerHTML = html`
${style}
<div class="section-us">
    <h3 class="text-us t1">با ما</h3>
    <h2 class="text-us long t2">در ارتباط</h2>
    <h3 class="text-us t3">باشید!</h3>
    <a href="#" class="instagram"><i class="fab fa-instagram "></i></a>
    <a href="#" class="telegram"><i class="fab fa-telegram "></i></a>
    <a href="#" class="whatsapp"><i class="fab fa-whatsapp "></i></a>


</div>

`;
