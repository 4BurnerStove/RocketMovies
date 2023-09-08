import { useAuth } from '../../hooks/auth'
import { Container, Confirm, Content, ModalPart } from './styles'



export function Modal({ isOpen, closeModal, content, next, close }) {

  const { signOut } = useAuth()


  if (isOpen) {
    return (
      <Container>
        <Content>
          <ModalPart>
            {content}
            <div>
              <Confirm onClick={signOut}>{next}</Confirm>
              <Confirm onClick={closeModal}>{close}</Confirm>
            </div>
          </ModalPart>
        </Content>
      </Container>
    )
  }

  return null
}