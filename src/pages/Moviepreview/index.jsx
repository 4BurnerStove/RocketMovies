import { Container, Content, TextContent } from './styles'

import { Header } from '../../Components/Header'
import { Secnote } from '../../Components/Secnote'
import { ButtonText } from '../../Components/ButtonText'
import { Scrollbar } from '../../Components/Scrollbar'

import { TfiArrowLeft } from 'react-icons/tfi'
import { useEffect } from 'react'
import { api } from '../../services/api'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { Link } from 'react-router-dom'

export function Moviepreview() {
  const [details, setDetails] = useState([])
  const params = useParams()




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
        <Link to='/'>
          <ButtonText icon={TfiArrowLeft} name='Voltar'></ButtonText>
        </Link>
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