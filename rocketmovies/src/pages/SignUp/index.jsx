import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { TfiArrowLeft } from 'react-icons/tfi'

import { Container, Form, Background } from './styles'

export function SignUp() {
  return( 
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input type='text' placeholder='Nome' icon={FiUser}></Input>
        <Input type='text' placeholder='E-mail' icon={FiMail}></Input>
        <Input type='password'placeholder='Senha'icon={FiLock}></Input>
        <Button name='Cadastrar'></Button>
        <ButtonText icon={TfiArrowLeft} name='Voltar para o login'></ButtonText>

      </Form>
      <Background></Background>
    </Container>
  )
}