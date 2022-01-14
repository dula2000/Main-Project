const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".container");
const nextBtn = document.querySelector(" .nextbtn");
const prevbtn = document.querySelector(".prevbtn");
const navigationDots = document.querySelector(".navigation-dots");

let numberofImages = slideImage.length;
let slidewidth = slideImage[0].clientWidth;
// setting up the slider.

function init()
{
   /*
   positioning of images.
   slideImage[0] = 0
   slideImage[1] = 100%
   slideImage[2] = 200%
   slideImage[3] = 300%
   */

   slideImage.forEach((img,i)=> {
       img.style.left = i*100 +"%";
   });

   slideImage[0].classList.add("active");

   createNavigationDots();
}

init();

//Create navigation dots

function createNavigationDots()
{
    for(let i=0; i < numberofImages; i++)
    {
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);
    }
        navigationDots.children[0].classList.add("active");
}

// Next button

nextBtn.addEventList("click",()=>{
    slidesContainer.style.transform = "translateX(-"+ slidewidth + "px)";

});
