import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'


export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder='Pesquisar pelo título'></Input>

      <Profile>
        <div>
          <Link to='/Profile'>
            <h2>Andre Morryson</h2>
          </Link>
          <span>sair</span>
        </div>
        <Link to='/Profile'>
          <img src="https://imgs.search.brave.com/leHCv-HR42-K9GZqeA3kPjMQ6CUIrRvkxJt8R-lwlmg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1Lzc3LzI3/LzM2MF9GXzY1Nzcy/NzE5X0ExVVY1a0xp/NW5DRVdJMEJOTExp/RmFCUEVrVWJ2NUZ2/LmpwZw" alt="" />
        </Link>
      </Profile>
    </Container>

  )
}