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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti, aut veritatis perspiciatis neque tempora, nemo nesciunt molestias eos voluptate, velit reiciendis assumenda sit. Doloremque tempora ducimus nihil aperiam cupiditate.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at vel, enim et iste rerum iusto quo adipisci maiores nesciunt! Officiis enim voluptas modi non explicabo aspernatur minima hic. Labore.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio suscipit provident optio laboriosam vitae minima rerum quaerat natus. Similique animi, quisquam magni rerum voluptates iste odit pariatur dolorem qui!

              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quo vitae non tenetur molestiae optio sunt quaerat ad facilis ex! Error praesentium aut rerum laboriosam voluptatibus officiis corporis fuga necessitatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti, aut veritatis perspiciatis neque tempora, nemo nesciunt molestias eos voluptate, velit reiciendis assumenda sit. Doloremque tempora ducimus nihil aperiam cupiditate.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at vel, enim et iste rerum iusto quo adipisci maiores nesciunt! Officiis enim voluptas modi non explicabo aspernatur minima hic. Labore.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio suscipit provident optio laboriosam vitae minima rerum quaerat natus. Similique animi, quisquam magni rerum voluptates iste odit pariatur dolorem qui!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quo vitae non tenetur molestiae optio sunt quaerat ad facilis ex! Error praesentium aut rerum laboriosam voluptatibus officiis corporis fuga necessitatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti, aut veritatis perspiciatis neque tempora, nemo nesciunt molestias eos voluptate, velit reiciendis assumenda sit. Doloremque tempora ducimus nihil aperiam cupiditate.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at vel, enim et iste rerum iusto quo adipisci maiores nesciunt! Officiis enim voluptas modi non explicabo aspernatur minima hic. Labore.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio suscipit provident optio laboriosam vitae minima rerum quaerat natus. Similique animi, quisquam magni rerum voluptates iste odit pariatur dolorem qui!
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique id veritatis cum ex placeat numquam possimus minima iure autem eveniet? Libero iure quaerat repellendus fugit maxime voluptatem debitis dignissimos earum.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim est, tempore beatae voluptatum quis necessitatibus sequi nemo placeat ipsa, doloribus impedit obcaecati repudiandae! Blanditiis praesentium accusantium placeat! Facilis.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore velit, dolorum, repudiandae corrupti consequuntur autem ab, odit sequi facilis voluptates ipsa perspiciatis commodi quibusdam magnam amet doloribus. Officia, quis.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique id veritatis cum ex placeat numquam possimus minima iure autem eveniet? Libero iure quaerat repellendus fugit maxime voluptatem debitis dignissimos earum.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim est, tempore beatae voluptatum quis necessitatibus sequi nemo placeat ipsa, doloribus impedit obcaecati repudiandae! Blanditiis praesentium accusantium placeat! Facilis.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore velit, dolorum, repudiandae corrupti consequuntur autem ab, odit sequi facilis voluptates ipsa perspiciatis commodi quibusdam magnam amet doloribus. Officia, quis.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique id veritatis cum ex placeat numquam possimus minima iure autem eveniet? Libero iure quaerat repellendus fugit maxime voluptatem debitis dignissimos earum.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim est, tempore beatae voluptatum quis necessitatibus sequi nemo placeat ipsa, doloribus impedit obcaecati repudiandae! Blanditiis praesentium accusantium placeat! Facilis.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore velit, dolorum, repudiandae corrupti consequuntur autem ab, odit sequi facilis voluptates ipsa perspiciatis commodi quibusdam magnam amet doloribus. Officia, quis.
            </p>
          </TextContent>
        </Scrollbar>

      </Content>
    </Container >
  )
}