let arrowButton = document.getElementById('arrowButton')
let carousel = document.getElementById('movieCarousel')
let movieImgButton = document.querySelectorAll('.moveImg')
let movieButton = document.querySelectorAll('.movie')
let movieTitle = document.getElementById('movieTitle')
let movieSinopse = document.getElementById('movieSinopse')
let pageBg = document.querySelectorAll('.pageMovieBg')

function focusCheck() {
  if (movieButton[0].autofocus == true) {
    document.body.style = `background-image: url(${pageBg[0].src})`
    movieTitle.innerText = movieButton[0].name
    movieSinopse.innerText = movieButton[0].ariaLabel
  }
}
focusCheck()

arrowButton.addEventListener('click', () => {
  if (carousel.scrollLeft >= 0) {
    carousel.scrollLeft += 300
  }

  if (carousel.scrollLeft >= 1400) {
    carousel.scrollLeft = 0
  }
})

movieImgButton.forEach(mI => {
  mI.addEventListener('click', () => {})
})

movieButton.forEach(mN => {
  mN.addEventListener('click', () => {
    movieTitle.innerText = mN.name
    movieSinopse.innerText = mN.ariaLabel
    document.body.style = `background-image: url(${mN.lastElementChild.src})`
  })
})
