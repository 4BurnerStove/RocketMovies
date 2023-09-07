import { Header } from '../../Components/Header'
import { ButtonText } from '../../Components/ButtonText'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { Textarea } from '../../Components/Textarea'
import { Scrollbar } from '../../Components/Scrollbar'
import { MovieItem } from '../../Components/MovieItem'

import { api } from '../../services/api'
import { useState } from 'react'

import { Container, Form, Tag } from './styles'
import { TfiArrowLeft } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

export function CreateMovie() {
  const [titleMovie, setTitleMovie] = useState('')
  const [description, setDescription] = useState('')
  const [grade, setGrade] = useState(Number)

  const [moviesTags, setmoviesTags] = useState([])
  const [newTags, setNewTags] = useState('')

  function handleAddTag() {
    if (!newTags) {
      return alert('Adicione ao menos uma tag antes de prosseguir')
    }
    setmoviesTags(prevState => [...prevState, newTags])
    setNewTags('')
  }

  function handleRemoveTag(delet) {
    setmoviesTags(prevState => prevState.filter(moviesTags => moviesTags !== delet))
  }

  async function handleNewMovie() {
    if (!titleMovie) {
      return alert('É preciso dar um titulo ao filme.')
    }

    if (!grade) {
      return alert('Você esqueceu de avaliar o filme.')
    }


    if (newTags) {
      return alert('Você esqueceu uma tag no campo de marcadores, mas não a adicionou, adicione por favor.')
    }

    try {
      await api.post('/movieNotes', {
        titleMovie,
        grade,
        description,
        moviesTags
      });
      alert('Filme adicionado com sucesso!');
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <Container>
      <Header />
      <main>
        <header>
          <Link to='/'>
            <ButtonText name='Voltar' icon={TfiArrowLeft}></ButtonText>
          </Link>
          <h1>Novo filme</h1>
        </header>

        <Scrollbar>
          <Form>
            <div>
              <Input
                type='text'
                placeholder='Título'
                onChange={(e) => setTitleMovie(e.target.value)}
              ></Input>
              <Input
                type='number'
                placeholder='Sua nota(de 1 a 5)'
                onChange={(e) => setGrade(e.target.value)}
              ></Input>
            </div>
            <Textarea
              placeholder='Detalhes'
              onChange={(e) => setDescription(e.target.value)}
            ></Textarea>

            <section>
              <h2>Marcadores</h2>
              <Tag>
                {
                  moviesTags.map((moviesTags, index) => (
                    < MovieItem
                      key={String(index)}
                      value={moviesTags}
                      onClick={() => handleRemoveTag(moviesTags)} />
                  ))
                }

                <MovieItem
                  placeholder='Novo marcador'
                  isNew
                  onChange={(e) => setNewTags(e.target.value)}
                  value={newTags}
                  onClick={handleAddTag}
                ></MovieItem>
              </Tag>
            </section>

            <div>
              <Button
                name='Adicionar Filme'
                onClick={handleNewMovie}></Button>
            </div>

          </Form>
        </Scrollbar>
      </main>
    </Container >

  )
}