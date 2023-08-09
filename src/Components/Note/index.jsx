import { Container, ContainerStar, RatingStar } from './styles'
import { Tag } from '../Tags'

export function Note({ data, ...rest }) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  
  return (
    <Container {...rest}>
      <div>
        <h1>{data.title}</h1>

        <ContainerStar>
          {stars.map((star) => (
            <RatingStar key={star} active={star <= data.grade}></RatingStar>
          ))}
        </ContainerStar>

      </div>
      <p>{data.description}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.name} name={tag.name}></Tag>)
          }
        </footer>
      }

    </Container>
  )
}