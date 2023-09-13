import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Modal } from '../Modal'
import { SearchText } from '../SearchText'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../Assets/avatar_placeholder.svg'

import { useEffect, useState, useRef } from 'react'

export function Header() {
  const [openModal, setOpenModal] = useState(false)
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])
  const { user } = useAuth()
  const searchRef = useRef(null)

  const { signOut } = useAuth()
  const navigate = useNavigate()

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearch('');
      setNotes([]);
    }
  }

  useEffect(() => {
    // Adiciona um ouvinte de evento de clique ao documento
    document.addEventListener('click', handleClickOutside);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movieNotes?titleMovie=${search}`)
      setNotes(response.data)
    }

    // Garante com que a barra de pesquisa não fique exibindo informações sozinha
    search.trim() !== '' ? fetchNotes() : setNotes([])
  }, [search])

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <Link to='/'>
        <h1>RocketMovies</h1>
      </Link>

      <div className='input' ref={searchRef}>
        <Input
          placeholder='Pesquisar pelo título'
          onChange={(e) => setSearch(e.target.value)}
        ></Input>

        {
          notes === '' ? null : (
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