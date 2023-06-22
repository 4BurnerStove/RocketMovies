import { Container, Profile } from './styles'
import { Input } from '../Input'


export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder='Pesquisar pelo título'></Input>

      <Profile>
        <div>
        <h2>Andre Morryson</h2>
        <span>sair</span>

        </div>
        <img src="https://github.com/4Burnerstove.png" alt="" />
      </Profile>
    </Container>

  )
}