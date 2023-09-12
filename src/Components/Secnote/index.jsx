import { Container, ContainerStar, Updated, RatingStar, Etags, User, UpdatedAt, HeaderMovie } from './styles'

import { AiOutlineClockCircle } from 'react-icons/ai'
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api'

import avatarPlaceholder from '../../Assets/avatar_placeholder.svg'

export function Secnote({ data, ...rest }) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  const { user } = useAuth()

  const UnformatDate = new Date(data.updated_at)
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0')
    const mouth = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear()).padStart(-2)

    UnformatDate.setHours(UnformatDate.getHours() - 3);
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    const FormatedDate = `${day}/${mouth}/${year} as ${hours}:${minutes}:${seconds}`

    return { FormatedDate }
  }
  const { FormatedDate } = formatDate(UnformatDate)

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container {...rest}>
      <HeaderMovie>
        <h1>{data.titleMovie}</h1>

        <ContainerStar>
          {stars.map((star) => (
            <RatingStar key={star} active={star <= data.grade}></RatingStar>
          ))}
        </ContainerStar>
      </HeaderMovie>

      <Updated>
        <User>
          <img src={avatarUrl} alt="Foto do usuário" />
          <p>por {user.name}</p>
        </User>
        <UpdatedAt>
          <AiOutlineClockCircle />
          {FormatedDate}
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