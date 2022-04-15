import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_hr7wa6t', 'template_kss7vfe', e.target, 'TYKWanq1uXRjaQ6KY'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  function handleClick() {
    alert('Obrigado por entrar em contato!')
  }

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Entre em contato</h2>
                <p>
                Entre em contato com a nossa equipe enviando uma mensagem abaixo
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Nome'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Mensagem'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg' onClick={handleClick}>
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Informações de Contato</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Endereço
                </span>
                Rua Beija Flor , 240 - Campo Grande, Rio de janeiro - CEP: 23088-010 / Em frente ao West Shopping
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Telefones
                </span>
                Horário comercial: <br></br> (021) 3435-7575 <br></br> WhatsApp: <br></br> (021) 96527-5265 <br></br> Tim: <br></br> (021) 96527-5265
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Emails
                </span> adammarcello@gmail.com <br></br> adambrito65@hotmail.com
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/TECROV" target="_blank" rel="noreferrer">
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/tecrov_curso/" target="_blank" rel="noreferrer">
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 Tecrov. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}
