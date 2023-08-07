import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { TfiArrowLeft } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Container, Form, Background } from './styles'

export function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


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
        
        <Link to='/'>
        <ButtonText icon={TfiArrowLeft} name='Voltar para o login'/>
        </Link>

      </Form>
      <Background></Background>
    </Container>
  )
}