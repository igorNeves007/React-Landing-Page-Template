export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Quem somos</h2>
              <p>A TECROV é uma  instituição que treina e capacita profissionais na área de Robótica Submarina também conhecido como TRAINEE EM ROV no Estado do Rio de Janeiro, Espirito Santos e Santa Catarina , tendo uma grade de treinamentos voltados à área de Robótica Submarina ( ROV).</p>
              <h3>Em quem focamos?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Estudantes de Engenharia Mecânica</li>
                    <li>Eletrônicos</li>
                    <li>Eletrotécnicos</li>
                    <li>Controle e Automação</li>                       
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Engenheiros</li>
                    <li>Mecatrônicos</li>
                    <li>Telecomunicações</li>
                    <li>Engenharia Naval</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
