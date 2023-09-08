import { Container, Content, List } from './styles'
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import { Note } from '../../Components/Note'


import { FiPlus } from 'react-icons/fi'
import { Scrollbar } from '../../Components/Scrollbar'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get('/movieNotes')
      setNotes(response.data)
    }

    fetchNotes()
  }, [])

  function handleDetails(id) {
    navigate(`/moviepreview/${id}`)
  }

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
              notes.length === 0 ? (
                <p>Não há filmes cadastrados por enquanto.</p>
              ) : (
                notes.map(note => (
                  <Note
                    key={String(note.id)}
                    data={note}
                    onClick={() => handleDetails(note.id)}
                  >
                  </Note>
                )
                ))
            }
          </List>
        </Scrollbar>
      </Content>

    </Container >
  )

}