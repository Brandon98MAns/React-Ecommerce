const Carrusel = () => {
  return (
<div className="carousel">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://www.arredo.com.ar/arquivos/090421-sillones-cortazar.png?v=637535344973400000" className="w-full"/>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.grouponcdn.com/deal/44uJQHiZZQh2MqNxxKtn3Td9jXVM/44-2048x1229/v1/t600x362.jpg" className="w-full"/> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/575/211/products/taraval2seatobputtyshs15_16x91-934c9422eee3f52a6315125443857827-1024-1024.jpg" className="w-full"/>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://silloneseuropa.com.ar/wp-content/uploads/2021/01/francis-1.jpg" className="w-full"/>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
 
</div>
  )
}

export default Carrusel
