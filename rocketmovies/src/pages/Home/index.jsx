import { Container, Content } from './styles'
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import { Note } from '../../Components/Note'

import { FiPlus } from 'react-icons/fi'

export function Home() {
 return (
    <Container>
      <Header></Header>
      <Content>
        <header>
        <h1>Meus filmes</h1>
        <Button icon={FiPlus} name='Adicionar Filme'>
        </Button>
        </header>
        
        <Note
          data ={{
            title: 'Interestelar',
            tags: [
              {id:'1', name:'Drama'},
              {id:'2', name:'Ficção cientifica'}
            ]

          }}
        ></Note>

      </Content>

    </Container>
  )

}