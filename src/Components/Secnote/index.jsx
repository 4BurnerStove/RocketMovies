import { Container, ContainerStar, Updated, RatingStar, Etags, User, UpdatedAt, HeaderMovie } from './styles'

import { AiOutlineClockCircle } from 'react-icons/ai'


export function Secnote({ data, userName, ...rest }) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <Container {...rest}>
      <HeaderMovie>
        <h1>{data.title}</h1>

        <ContainerStar>
          {stars.map((star) => (
            <RatingStar key={star} active={star <= data.grade}></RatingStar>
          ))}
        </ContainerStar>
      </HeaderMovie>

      <Updated>
        <User>
          <img src="https://github.com/4Burnerstove.png" alt="Foto do usuário" />
          <p>por {userName}</p>
        </User>
        <UpdatedAt>
          <AiOutlineClockCircle />
          23/05/22 as 08:00
        </UpdatedAt>
      </Updated>


      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Etags key={tag.name} name={tag.name}></Etags>)
          }
        </footer>
      }

    </Container>
  )
}