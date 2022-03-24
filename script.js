const prevBtn = document.getElementById('prev'),
  nextBtn = document.getElementById('next'),
  slidesEl = document.querySelector('.slider-slides'),
  numOfSlides = document.querySelectorAll('.slide').length

let currentSlide = 0

// Event listeners
prevBtn.addEventListener('click', (e) => {
  currentSlide--
  changeSlide()
})
nextBtn.addEventListener('click', (e) => {
  currentSlide++
  changeSlide()
})

function changeSlide() {
  if (currentSlide < 0) {
    currentSlide = numOfSlides - 1
  }
  if (currentSlide >= numOfSlides) {
    currentSlide = 0
  }

  slidesEl.style.left = `${-currentSlide * 100}%`
  console.log(currentSlide)
}
