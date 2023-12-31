import { Container, Confirm, Content, ModalPart } from './styles'



export function Modal({ isOpen, modalFunction, closeModal, content, next, close }) {

  if (isOpen) {
    return (
      <Container>
        <Content>
          <ModalPart>
            {content}
            <div>
              <Confirm onClick={modalFunction}>{next}</Confirm>
              <Confirm onClick={closeModal}>{close}</Confirm>
            </div>
          </ModalPart>
        </Content>
      </Container>
    )
  }

  return null
}