let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

window.addEventListener("scroll", function() {
    var element = document.querySelector(".about_images1")
    var position = element.getBoundingClientRect()

    if (position.top < this.window.innerHeight && position.bottom >= 0)
    {
        element.classList.add("visible")
    } else {
        element.classList.remove("visible")
    }
})

window.addEventListener("scroll", function() {
    var element = document.querySelector(".about_images2")
    var position = element.getBoundingClientRect()

    if (position.top < this.window.innerHeight && position.bottom >= 0)
    {
        element.classList.add("visible")
    } else {
        element.classList.remove("visible")
    }
})
window.addEventListener("scroll", function() {
    var element = document.querySelector(".about_images3")
    var position = element.getBoundingClientRect()

    if (position.top < this.window.innerHeight && position.bottom >= 0)
    {
        element.classList.add("visible")
    } else {
        element.classList.remove("visible")
    }
})