import { Header } from '../../Components/Header'
import { ButtonText } from '../../Components/ButtonText'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { Textarea } from '../../Components/Textarea'
import { Scrollbar } from '../../Components/Scrollbar'
import { MovieItem } from '../../Components/MovieItem'


import { Container, Form, Tag } from './styles'
import { TfiArrowLeft } from 'react-icons/tfi'

export function CreateMovie() {
  return (
    <Container>
      <Header></Header>

      <main>
        <header>
          <ButtonText name='Voltar' icon={TfiArrowLeft}></ButtonText>
          <h1>Novo filme</h1>
        </header>

      <Scrollbar>
        <Form>
          <div>
          <Input type='text' placeholder='Título'></Input>
          <Input type='number' placeholder='Sua nota(de 0 a 5)'></Input>
          </div>
          <Textarea placeholder='Detalhes'></Textarea>
          <section>
            <h2>Marcadores</h2>
            <Tag>
              <MovieItem value='Aventura'></MovieItem>
              <MovieItem value='Ação'></MovieItem>
              <MovieItem placeholder='Novo marcador' isNew></MovieItem>
            </Tag>
          </section>
          <div>
            <Button name='Excluir filme'></Button>
            <Button name='Salvar alterações'></Button>
          </div>    
        </Form>
      </Scrollbar>
      </main>
    </Container>

  )
}