export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          
          <a className='navbar-brand page-scroll' href='#page-top'>
            Tecrov  
          </a>
          <img src="img/tecrovIcon.png" className="tecrovicon"/>

        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                O que é ROV
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Quem somos
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Curso
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Galeria
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testemunhas
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Time
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
