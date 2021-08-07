

document.querySelector(".navbar-toggler").onclick = function () {
    document.querySelector(".navbar-toggler span.sec-p").classList.toggle("open")
}

window.onload = function () {
    document.querySelector(".loader ").classList.toggle("hide")
}

// range input
const slider = document.getElementById("myinput")
const min = slider.min
const max = slider.max
const value = slider.value

slider.style.background = `linear-gradient(to right,  #c81a74  0%, #c81a74 ${(value-min)/(max-min)*100}%, #DEE2E6 ${(value-min)/(max-min)*100}%, #DEE2E6 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right,  #c81a74  0%,  #c81a74  ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`
};


slider.onchange=function(){
    console.log(slider.value)
    document.querySelector(".main2 .container .form label span:first-of-type").innerHTML=slider.value
}
