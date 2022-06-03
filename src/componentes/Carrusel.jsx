import imgSlide4 from '../assets/slide4.jpg';

const Carrusel = () => {
  return (

<div className="carousel" style={{marginBottom: 0 }}>
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://www.arredo.com.ar/arquivos/090421-sillones-cortazar.png?v=637535344973400000" className="m-auto"/>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-outline">❮</a> 
      <a href="#slide2" className="btn btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_699561-MLA49213591362_022022-F.webp" className="m-auto"/> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-outline">❮</a> 
      <a href="#slide3" className="btn btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_928732-MLA50032547798_052022-F.webp" className="m-auto"/>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-outline">❮</a> 
      <a href="#slide4" className="btn btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={imgSlide4} className="m-auto"/>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-outline">❮</a> 
      <a href="#slide5" className="btn btn-outline">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_670443-MLA47872861441_102021-F.webp" className="m-auto"/>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-outline">❮</a> 
      <a href="#slide1" className="btn btn-outline">❯</a>
    </div>
  </div>
</div>
  )
}

export default Carrusel
