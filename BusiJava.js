const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".container");
const nextBtn = document.querySelector(" .nextbtn");
const prevbtn = document.querySelector(".prevbtn");
const navigationDots = document.querySelector(".navigation-dots");

let numberofImages = slideImage.length;
let slidewidth = slideImage[0].clientWidth;
let currentSlide=0;
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

        dot.addEventListener("click", () => {
            goToSlide(i);

        });
    }
        navigationDots.children[0].classList.add("active");
}

// Next button

nextBtn.addEventList("click",()=>{
    if(currentSlide >= numberofImages-1){
        goToSlide(0);
        currentSlide=0;
        return;

    }
   currentSlide++;
   goToSlide(currentSlide);
});

// prev button
prevbtn.addEventList("click",()=>{
    if(currentSlide >= 0){
        goToSlide(numberofImages-1);
        currentSlide=numberofImages-1;
        return;

    }
   currentSlide--;
   goToSlide(currentSlide);
});


//got slide

function goToSlide(slideNumber)
{
    slidesContainer.style.transform=
    "translatex(-" + slidewidth*slideNumber + "px)";

    currentSlide=slideNumber;

    setActiveClass();

}

function setActiveClass()
    {
        let currentActive = document.querySelector(".slide-image.active");
        currentActive.classList.remove("active");
        slideImage[currentSlide].classList.add("active");

        // set active class for navigation button.

        let currentActive = document.querySelector(".single-dot.active");
        currentDot.classList.remove("active");
        navigationDots.children[currentSlide].classList.add("active");

    }