import { Container, ContainerStar, RatingStar } from './styles'
import { Tag } from '../Tags'

export function Note({ data, rating, ...rest }) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  
  return (
    <Container {...rest}>
      <div>
        <h1>{data.title}</h1>

        <ContainerStar>
          {stars.map((star) => (
            <RatingStar key={star} active={star <= rating}></RatingStar>
          ))}
        </ContainerStar>

      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem porro ducimus sint doloremque quisquam numquam, earum reprehenderit vitae, eos saepe rem iure voluptates ipsum nesciunt! Ab ea illo consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae, praesentium quisquam fugiat totam, assumenda quos harum neque pariatur exercitationem laborum nulla. Harum omnis sequi illo quaerat eum, suscipit voluptas!</p>
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