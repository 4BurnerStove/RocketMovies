import { Container, Content } from './styles'
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import { Note } from '../../Components/Note'
import { Scrollbar } from '../../Components/Scrollbar'

import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header></Header>
      <div c>
        <header>
          <h1>Meus filmes</h1>
          <Button icon={FiPlus} name='Adicionar Filme'>
          </Button>
        </header>
      </div>

    <Scrollbar>

      <Content>
        <Note
          data={{
            title: 'Interestelar',
            tags: [
              { id: '1', name: 'Drama' },

              { id: '2', name: 'Ficção cientifica' }
            ]
          }}
        ></Note>

        <Note
          data={{
            title: 'Ghost: O outro lado da vida',
            tags: [
              { id: '1', name: 'Romance' },

              { id: '2', name: 'Melancolico' }
            ]
          }}
        ></Note>
      </Content>
    </Scrollbar>

    </Container>
  )

}