import { Container } from "./styles";

export function ButtonText({name, ...rest}){
  return(
    <Container
      type='Button'
      {...rest}
    >
      {name}
    </Container>

  )
}