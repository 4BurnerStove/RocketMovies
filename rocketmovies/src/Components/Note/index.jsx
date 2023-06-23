import { Container } from './styles'
import { Tag } from '../Tags'
import { Rating } from '../Rating'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <div>
        <h1>{data.title}</h1>
        <Rating rating={3} ></Rating>
      </div>
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