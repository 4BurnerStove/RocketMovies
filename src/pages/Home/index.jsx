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
              data={{
                title: 'Interestelar',
                description: 'mucho texto',
                grade: '4',
                tags: [
                  { id: '1', name: 'Drama' },

                  { id: '2', name: 'Ficção cientifica' }
                ]
              }}
            >
            </Note>
          </List>
        </Scrollbar>
      </Content>

    </Container >
  )

}