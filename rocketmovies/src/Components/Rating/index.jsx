import { Container, RatingStar } from './styles'

export function Rating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <Container>
      {stars.map((star) => (
        <RatingStar key={star} active={star <= rating}></RatingStar>
      ))}
    </Container>

  )
}
