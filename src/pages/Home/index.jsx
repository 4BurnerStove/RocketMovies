import { Container, Content, List } from './styles'
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import { Note } from '../../Components/Note'


import { FiPlus } from 'react-icons/fi'
import { Scrollbar } from '../../Components/Scrollbar'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <Container>
      <Header></Header>
      <Content>
        <div>
          <header>
            <h1>Meus filmes</h1>
            <Link to='/createmovie'>
            <Button icon={FiPlus} name='Adicionar Filme'>
            </Button>
            </Link>
          </header>
        </div>
        
      <Scrollbar>
        <List >
          <Note
            rating={1}
            data={{
              title: 'Interestelar',
              tags: [
                { id: '1', name: 'Drama' },

                { id: '2', name: 'Ficção cientifica' }
              ]
            }}
          >
          </Note>
          <Note
            rating={4}
            data={{
              title: 'Ghost: O outro lado da vida',
              tags: [
                { id: '1', name: 'Romance' },

                { id: '2', name: 'Melancolico' }
              ]
            }}
          ></Note>
          <Note
            rating={3}
            data={{
              title: 'O Poderoso chefão',
              tags: [
                { id: '1', name: 'Crime' },

                { id: '2', name: 'Mafia' }
              ]
            }}
          ></Note>
        </List>
      </Scrollbar>
    </Content>

    </Container>
  )

}