import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function SearchText({ content, id }) {

  const navigate = useNavigate()

  function handleDetails() {
    navigate(`/moviepreview/${id}`)
    setTimeout(() => {
      window.location.reload();
    }, 5)
  }
  

  return (
    <Container onClick={handleDetails}>
      <p>{content}</p>
    </Container>
  )
}