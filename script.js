const menu = document.querySelector(".menu-btn")
const navitems = document.querySelector(".nav-items")
const playBtn = document.querySelectorAll(".play-btn")
const imageOne = document.querySelector(".image-item a iframe")
const imageItemOne = document.querySelector(".image-item-one")
const imageItem = document.querySelector(".images-container")
const cross = document.querySelector(".cross")


menu.addEventListener("click", ()=>{
    navitems.classList.toggle("active")
})

playBtn.forEach(playBtn => {
    playBtn.addEventListener("click", ()=>{
        imageOne.classList.toggle("active")
        cross.classList.toggle("active")
        imageItem.classList.toggle("active")
        imageItemOne.classList.toggle("active")
    })    
});

cross.addEventListener("click", ()=>{
    imageOne.classList.remove("active")
    cross.classList.remove("active")
})

$('.slider-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:1
        },
        991:{
            items:3
        }
    },
    "dots":true,
    "dotsEach":5
})

$(".count").each(function () {
    $(this)
    .prop("Counter", 0)
    .animate(
        {
            Counter: $(this).text(),
        },
        {
            duration: 4000,
            easing:"swing",
            step:function (now) {
             now = Number(Math.ceil(now)).toLocaleString('en');
                                    $(this).text(now);
            },
        }
    );
});
    
