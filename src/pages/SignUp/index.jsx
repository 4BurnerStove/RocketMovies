import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { TfiArrowLeft } from 'react-icons/tfi'
import { Link, useNavigate } from 'react-router-dom'

import { Container, Form, Background } from './styles'


export function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { signUp } = useAuth()

  function handleSignUp() {
    signUp({ name, email, password }, (navi) => {
      if (navi) {
        return
      }
      navigate('/')
    })
  }


  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          type='text'
          placeholder='Nome'
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          type='text'
          placeholder='E-mail'
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          type='password'
          placeholder='Senha'
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}

        ></Input>

        <Button onClick={handleSignUp} name='Cadastrar'></Button>

        <Link to='/'>
          <ButtonText icon={TfiArrowLeft} name='Voltar para o login' />
        </Link>

      </Form>
      <Background></Background>
    </Container>
  )
}