import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Modal } from '../Modal'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../Assets/avatar_placeholder.svg'
import { api } from '../../services/api'

import { useState } from 'react'

export function Header() {
  const [openModal, setOpenModal] = useState(false)
  const { user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input
        placeholder='Pesquisar pelo título'

        onChange={(e) => setSearch(e.target.value)}
      ></Input>

      <Profile>
        <div>
          <Link to='/Profile'>
            <h2>{user.name}</h2>
          </Link>

          <Modal content={'Deseja realmente sair?'} next={'Sim'} close={'Não'} isOpen={openModal} closeModal={() => setOpenModal(!openModal)} />

          <span onClick={() => setOpenModal(true)}>sair</span>
        </div>

        <Link to='/Profile'>
          <img src={avatarUrl} alt="" />
        </Link>
      </Profile>
    </Container >

  )
}