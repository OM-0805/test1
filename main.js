'use strict';
{
  function play(){

    setTimeout(() => {
      images[currentIndex].classList.remove("current");
      currentIndex++;
      if(currentIndex >= images.length){
        currentIndex = 0;
      }
      images[currentIndex].classList.add("current");

      play();
    },3000);
  }

  const images = document.querySelectorAll(".photo img");
  let currentIndex = 0;
  play();

}