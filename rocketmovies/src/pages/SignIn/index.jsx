import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container, Form, Background } from './styles'

export function SignIn() {
  return( 
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input type='text' placeholder='E-mail' icon={FiMail}></Input>
        <Input type='password'placeholder='Senha'icon={FiLock}></Input>
        <Button name='Entrar'></Button>
        <Link to='/signup'>
        <ButtonText name='Criar conta'></ButtonText>
        </Link>

      </Form>
      <Background></Background>
    </Container>
  )
}