import { Container, Content, List } from './styles'
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import { Note } from '../../Components/Note'


import { FiPlus } from 'react-icons/fi'
import { Scrollbar } from '../../Components/Scrollbar'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get('/movieNotes')
      setNotes(response.data)
      console.log(response.data)
    }

    fetchNotes()
  }, [])

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
            {
              notes.map(note => (
                <Note
                  key={String(note.id)}
                  data={note}
                >
                </Note>
              ))
            }
          </List>
        </Scrollbar>
      </Content>

    </Container >
  )

}