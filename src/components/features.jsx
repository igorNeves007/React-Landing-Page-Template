export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Rov</h2>
          <p>Veículo submarino operado remotamente</p>
        </div>
        <div className='row'>
                <div className='col-xs-6 col-md-3' id="rovAbout">
                  <img src="img/rov.png" alt="" srcset="" />
                  <h3>Robótica Submarina</h3>
                  <p>ROV é a abreviatura de Remotely Operated Vehicle. 
                    Não existe tradução oficial no Brasil, mas esta poderia se dar como Veículo Operado Remotamente,
                     ou de Veículo Operação Remota.</p>
                </div>

                <div className='col-xs-6 col-md-3' id="rovAbout">
                  <img src="img/sistemaRov.png" alt="" srcset="" />
                  <h3>Sistema ROV</h3>
                  <p>Trata-se de um submarino, não tripulado, cuja finalidade principal é de apoio às operações em poços de petróleo. O ROV é muito usado também em pesquisas submarinas em geral, inclusive busca aos destroços de embarcações naufragadas e pesquisa arqueológica subaquática.</p>
                </div>

                <div className='col-xs-6 col-md-3' id="rovAbout">
                  <img src="img/remota.png" alt="" srcset="" />
                  <h3>Operações Remotas</h3>
                  <p>Na indústria do petróleo é usado principalmente na operação de poços, manifolds, posicionamento, construção e inspeção, acompanha-mento do trabalho de mergulhadores, etc. Para que possa ser operado da superfície de navios ou plataformas submarinas, o ROV dispõe de computadores, cujos sinais são multiplexados entre a superfície e o veículo no fundo do mar.</p>
                </div>

                <div className='col-xs-6 col-md-3' id="rovAbout">
                  <img src="img/classes.jpg" alt="" srcset="" />
                  <h3>Classes de ROV</h3>
                  <p>Os ROV´s podem ser divididos em duas grandes classes: ROV de observação (Observation ROV) e ROV de trabalho (Work Class). Os ROV´s de observação são, geralmente, menores que um metro cúbico e não dispõem de braços. </p>
                </div>
        </div>
      </div>
    </div>
  )
}
