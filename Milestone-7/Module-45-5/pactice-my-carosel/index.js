const carouselImg=document.getElementById('carousel-img');
const images=[
'/images/pic-1.jpg',
'/images/pic-2.jpg',
'/images/pic-3.jpg',
'/images/pic-4.jpg',
'/images/pic-5.jpg',
'/images/pic-6.jpg',
'/images/pic-7.jpg',
'/images/pic-8.jpg',
'/images/pic-9.jpg',
]
let currentImgNumber=0
setInterval(
function(){
if(images.length===currentImgNumber){
    currentImgNumber=0;
}
carouselImg.setAttribute('src',images[currentImgNumber])
currentImgNumber++;
},1000

)