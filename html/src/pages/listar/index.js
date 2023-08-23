import { Link } from 'react-router-dom';
import './index.scss';


export default function Listar() {


  return (
    <div className='pagina-listar'>
      <div className='container'>
        <h1> Consultar </h1>
        <div className='filtros'>
          <button> Buscar Todos</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>Favorito</th>
              <th>Cadastro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bruno O.</td>
              <td>11 99999-8889</td>
              <td>bruno@gmail.com</td>
              <td>Sim</td>
              <td>2023-10-01</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Bruno O.</td>
              <td>11 99999-8889</td>
              <td>bruno@gmail.com</td>
              <td>Sim</td>
              <td>2023-10-01</td>
            </tr>
          </tbody>
        </table>

        <div className='voltar'>
          <hr />
          <Link to='/'> Voltar </Link>
        </div>

      </div>
    </div>
  )
}