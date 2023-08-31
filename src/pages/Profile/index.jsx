import { ButtonText } from '../../Components/ButtonText'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'

import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { TfiArrowLeft } from 'react-icons/tfi'
import { FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { Container, Form, Avatar } from './styles'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  
  async function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    await updateProfile({ user })
  }

  return (
    <Container>
      <header>
        <Link to='/'>
          <ButtonText icon={TfiArrowLeft} name='Voltar'></ButtonText>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/4Burnerstove.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id='avatar' />
          </label>
        </Avatar>


        <Input
          type='text'
          placeholder='Nome de usuário'
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        ></Input>

        <Input
          type='text'
          placeholder='E-mail'
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></Input>

        <Input
          type='password'
          placeholder='Senha atual'
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}
        ></Input>

        <Input
          type='password'
          placeholder='Nova senha'
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        ></Input>

        <Button name='Salvar' onClick={handleUpdate}></Button>

      </Form>
    </Container>
  )
}