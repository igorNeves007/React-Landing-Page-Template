export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Time Tecrov</h2>
          <p>
            Conheça os profissionais que trabalham para você!
          </p>
        </div>
        <div id='row'>
                <div className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    <img src="img/adam.png" alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>Adam Marcello de Brito</h4>
                      <p>CEO e Instrutor</p>
                    </div>
                  </div>
                </div>
        </div>
      </div>
    </div>
  )
}
