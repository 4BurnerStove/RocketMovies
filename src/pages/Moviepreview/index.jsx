import { Container, Content, TextContent } from './styles'

import { Header } from '../../Components/Header'
import { Secnote } from '../../Components/Secnote'
import { ButtonText } from '../../Components/ButtonText'
import { Scrollbar } from '../../Components/Scrollbar'

import { TfiArrowLeft } from 'react-icons/tfi'

export function Moviepreview() {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonText icon={TfiArrowLeft} name='Voltar'></ButtonText>
        <Secnote
          userName='Andre Morryson'
          rating={4}
          data={{
            title: 'Interestelar',
            tags: [
              { id: '1', name: 'Drama' },
              { id: '2', name: 'Ficção cientifica' }
            ]
          }}
        />
        <Scrollbar>
          <TextContent>
          </TextContent>
        </Scrollbar>

      </Content>
    </Container >
  )
}