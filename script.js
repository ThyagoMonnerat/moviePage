const arrowButton = document.getElementById('arrowButton')
const carousel = document.getElementById('movieCarousel')

function slideMovies(){
  carousel.scrollLeft += 200;

  if(carousel.scrollLeft == 1512){
    carousel.scrollLeft = 0
  }
}

