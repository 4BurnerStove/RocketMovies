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