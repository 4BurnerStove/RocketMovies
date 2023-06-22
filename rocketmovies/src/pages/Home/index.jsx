import { Container, Content } from './styles'
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import { Note } from '../../Components/Note'

import { FiPlus } from 'react-icons/fi'

export function Home() {<Note
          data={{
            title: 'Interestelar',
            tags: [
              {
                id: '1', name: 'Aventura'
              },
              {
                id: '2', name: 'Magical'
              }
            ]
          }}
        >
        </Note>
  return (
    <Container>
      <Header></Header>
      <Content>
        
        <h1>Meus filmes</h1>
        <Button icon={FiPlus} name='Adicionar Filme'>
        </Button>

        <Note
          data={{
            title: 'Interestelar',
            tags: [
              {
                id: '1', name: 'Aventura'
              },
              {
                id: '2', name: 'Magical'
              }
            ]
          }}
        >
        </Note>
      </Content>

    </Container>
  )

}