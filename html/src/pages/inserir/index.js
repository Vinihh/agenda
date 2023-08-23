import { Link } from 'react-router-dom';
import './index.scss';


export default function Inserir() {


  return (
    <div className='pagina-inserir'>
      <div className='container'>
        <h1> Novo contato</h1>
        <section className='form'>
          <div>
            <label>Nome: </label>
            <input type='text' />
          </div>
          <div>
            <label>Telefone: </label>
            <input type='text' />
          </div>
          <div>
            <label>E-mail: </label>
            <input type='text' />
          </div>
          <div>
            <label>Cadastro: </label>
            <input type='date' />
          </div>
          <div>
            <label>Favorito: </label>
            <div>
              <input type='checkbox' /> Sim
            </div>
          </div>
          <div className='right'>
            <button> Salvar </button>
          </div>
        </section>

        <div className='voltar'>
          <hr />
          <Link to='/'> Voltar </Link>
        </div>
      </div>
    </div>
  )
}