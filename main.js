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
{
  document.addEventListener("DOMContentLoaded", () => {
    const text = "SCROLL DOWN ";
    const repeatedText = text.repeat(2);
    const circleText = document.querySelector(".circle-text_01");
    const totalChars = repeatedText.length;
    const anglePerChar = 360 / totalChars;

    for (let i = 0; i < totalChars; i++) {
      const span = document.createElement("span");
      span.textContent = repeatedText[i];
      span.style.transform = `rotate(${i * anglePerChar}deg)`;
      circleText.appendChild(span);
    }
  });
}

{
  const container = document.querySelector('.design-container');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');

  prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -220, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: 220, behavior: 'smooth' });
  });

}