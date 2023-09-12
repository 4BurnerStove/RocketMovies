import { useAuth } from '../../hooks/auth'
import { Container, Confirm, Content, ModalPart } from './styles'
import { useNavigate } from 'react-router-dom'



export function Modal({ isOpen, closeModal, content, next, close }) {

  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleSignOut(){
    signOut()
    navigate('/')
  }


  if (isOpen) {
    return (
      <Container>
        <Content>
          <ModalPart>
            {content}
            <div>
              <Confirm onClick={handleSignOut}>{next}</Confirm>
              <Confirm onClick={closeModal}>{close}</Confirm>
            </div>
          </ModalPart>
        </Content>
      </Container>
    )
  }

  return null
}