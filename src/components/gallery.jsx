export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Galeria</h2>
          <p>
            Oferecendo o melhor serviço para você! 
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <img src="img/fotos1.png" alt="" className="imgGaleria" />
                </div>

                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <img src="img/fotos2.jpg" alt="" className="imgGaleria" />
                </div>

                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <img src="img/fotos3.jpg"  alt="" className="imgGaleria" />
                </div>
                
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <img src="img/fotos4.jpg" alt="" className="imgGaleria" />
                </div>

                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <img src="img/fotos6.png" alt="" className="imgGaleria" />
                </div>  

                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <img src="img/fotos7.png" alt="" className="imgGaleria" />
                </div>         

          </div>
        </div>
      </div>
    </div>
  )
}
