import { Container, Content, TextContent } from './styles'

import { Header } from '../../Components/Header'
import { Secnote } from '../../Components/Secnote'
import { ButtonText } from '../../Components/ButtonText'
import { Scrollbar } from '../../Components/Scrollbar'
import { Modal } from '../../Components/Modal'

import { TfiArrowLeft } from 'react-icons/tfi'
import { useEffect } from 'react'
import { api } from '../../services/api'
import { useParams, useNavigate  } from 'react-router-dom'
import { useState } from 'react'

import { Link } from 'react-router-dom'


export function Moviepreview() {
  const [details, setDetails] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()
  const params = useParams()

  async function handleRemove() {
    await api.delete(`/movieNotes/${params.id}`)
    navigate('/')
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movieNotes/${params.id}`)
      setDetails(response.data)
    }

    fetchMovie()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <div className='navigate'>
          <Link to='/'>
            <ButtonText icon={TfiArrowLeft} name='Voltar'></ButtonText>
          </Link>
          <p onClick={() => setOpenModal(true)}>Remover filme</p>
          <Modal
            content={'Deseja realmente remover esse filme'}
            next={'Sim'}
            close={'Não'}
            isOpen={openModal}
            closeModal={() => setOpenModal(!openModal)}
            modalFunction={() => handleRemove()}
          />
        </div>
        <Secnote
          data={details}
        >
        </Secnote>
        <Scrollbar>
          <TextContent>
            {details.description}
          </TextContent>
        </Scrollbar>
      </Content>

    </Container >
  )
}