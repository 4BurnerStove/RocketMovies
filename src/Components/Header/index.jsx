import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Modal } from '../Modal'
import { SearchText } from '../SearchText'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../Assets/avatar_placeholder.svg'

import { useEffect, useState } from 'react'

export function Header() {
  const [openModal, setOpenModal] = useState(false)
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])
  const { user } = useAuth()

  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movieNotes?titleMovie=${search}`)
      setNotes(response.data)
    }

    search.trim() !== '' ? fetchNotes() : setNotes([])
  }, [search])

  console.log(notes)
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <Link to='/'>
        <h1>RocketMovies</h1>
      </Link>

      <div  className='input'>
        <Input
          placeholder='Pesquisar pelo título'
          onChange={(e) => setSearch(e.target.value)}
        ></Input>

        {
          notes.length === 0 ? null : (
            <ul>
              {
                notes.map((note) => (
                  <SearchText id={note.id} content={note.titleMovie} key={note.id} />
                ))
              }
            </ul>
          )
        }
      </div>

      <Profile>
        <div>
          <Link to='/Profile'>
            <h2>{user.name}</h2>
          </Link>

          <Modal
            content={'Deseja realmente sair?'}
            next={'Sim'}
            close={'Não'}
            isOpen={openModal}
            closeModal={() => setOpenModal(!openModal)}
            modalFunction={() => handleSignOut()}
          />

          <span onClick={() => setOpenModal(true)}>sair</span>
        </div>

        <Link to='/Profile'>
          <img src={avatarUrl} alt="" />
        </Link>
      </Profile>
    </Container >

  )
}