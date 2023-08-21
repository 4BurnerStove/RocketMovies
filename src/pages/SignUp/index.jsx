import { useState } from 'react'
import { api } from '../../services/api'

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

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Por favor  preencha todos os campos')
    }

    api.post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possivel fazer o cadastro')
        }
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