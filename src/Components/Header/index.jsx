import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'


export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input  placeholder='Pesquisar pelo título'></Input>

      <Profile>
        <div>
        <h2>Andre Morryson</h2>
        <span>sair</span>

        </div>
        <Link to='/Profile'>
         <img src="https://github.com/4Burnerstove.png" alt="" />
        </Link>
      </Profile>
    </Container>

  )
}