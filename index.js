var sliderImg= [[
    'images/desktop-image-hero-1.jpg', 'Discover innovative ways to decorate',
'We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.' ],
['images/desktop-image-hero-2.jpg','We are available all across the globe',"  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."],
['images/desktop-image-hero-3.jpg','Manufactured with the best materials','Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.']]

var currentSlide = 0

var imageDisplay = document.getElementById('imageSlide');
var headDisplay = document.getElementById('headerText');
var textDisplay = document.getElementById('headerPara');
var slider = document.getElementById('slider');
var navMenu = document.getElementById('navLinks');
var navBack = document.getElementById('navBack')


function scrlright(){
    if(currentSlide <sliderImg.length-1 ){
        currentSlide++;
        imageDisplay.style.scrollBehavior = "smooth"
        headDisplay.innerHTML = sliderImg[currentSlide][1];
        textDisplay.innerHTML = sliderImg[currentSlide][2];
        imageDisplay.scrollLeft += slider.children[0].offsetWidth
 

    }else{
        currentSlide = 0;
        imageDisplay.style.scrollBehavior = "auto"
        imageDisplay.scrollLeft = 0
        headDisplay.innerHTML = sliderImg[currentSlide][1];
        textDisplay.innerHTML = sliderImg[currentSlide][2]
    }
}
function scrlleft(){
    if(currentSlide > 0  ){
        currentSlide--;
        imageDisplay.style.scrollBehavior = "smooth"
        headDisplay.innerHTML = sliderImg[currentSlide][1];
        textDisplay.innerHTML = sliderImg[currentSlide][2];
        imageDisplay.scrollLeft -= slider.children[0].offsetWidth
 

    }else{
        currentSlide = 2;
        imageDisplay.style.scrollBehavior = "auto"
        imageDisplay.scrollLeft += 3*(slider.children[0].offsetWidth)

        headDisplay.innerHTML = sliderImg[currentSlide][1];
        textDisplay.innerHTML = sliderImg[currentSlide][2]
    }
}
function openMenu(){
    navMenu.style.top = 0;
    navBack.style.top=0
}
function closeMenu(){
    navMenu.style.top = '-70px';
    navBack.style.top = '-100vh'

}


function main(){
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > 200){
            $('nav').css('background','black')
        }else{
            $('nav').css('background','transparent')
        }
    });
}
$(document).ready(main)