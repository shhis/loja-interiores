import '../pages/stylesmenu.css'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../imgs/Img1.jpg'
import Img2 from '../imgs/Img2.jpg'
import Img3 from '../imgs/Img3.jpg'

function Carrossel() {
  return (
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"> </img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"> </img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"> </img>
    </div>
  </div>
</div>
  );
}

export default Carrossel;